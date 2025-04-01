import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FineService } from '../../service/fineservice/fine.service';
import { Fine } from '../../models/Fine';
import { AuthserviceService } from '../../service/authservice/authservice.service';

@Component({
  selector: 'app-getfines',
  imports: [CommonModule,FormsModule],
  templateUrl: './getfines.component.html',
  styleUrl: './getfines.component.css'
})
export class GetfinesComponent implements OnInit {
  searchType: string = '';
  searchValue: string = '';
  msg: string = '';
  finesList: Fine[] = [];
  role:string = '';
  localmemberID:number=0;

  ngOnInit(): void {
    this.role=this.authservice.getUserRole();
    this.localmemberID=this.authservice.getUserID();
  }

  constructor(private fineservice: FineService,private authservice:AuthserviceService) {}

  isInteger(value: string): boolean {
    return /^[0-9]*$/.test(value);
  }

  searchFines() {
    let url = '';
    switch (this.searchType) {
      case 'memberID':
        if (!this.isInteger(this.searchValue)) {
          this.msg = 'Member ID must be an integer';
          return;
        }
        url = `/member/${this.searchValue}`;
        break;
      case 'totalFine':
        if (!this.isInteger(this.searchValue)) {
          this.msg = 'Member ID must be an integer';
          return;
        }
        url = `/member/${this.searchValue}`;
        break;
      case 'all':
        url = ``;
        if(this.role!=='Admin'){
          url=`/member/${this.localmemberID}`
          
        }
        break;
    }

    this.fineservice.getfinebyidall(url).subscribe(
      data => {
        this.finesList = data;
        if(this.searchType=='totalFine'){
          this.fineservice.getotalfine(Number(this.searchValue)).subscribe(data=>{
            this.msg=JSON.stringify(data);
          },error=>{
            window.alert("No Transaactions"+error.error.text);
          })
        }
        console.log(url, JSON.stringify(data, null, 2));
      },
      error => {
        this.msg = error.error.text;
      }
    );
  }

}