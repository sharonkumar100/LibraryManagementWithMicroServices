import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BorrowingtransactionService } from '../../service/borrowingtransactionservice/borrowingtransaction.service';
import { Observable, of } from 'rxjs';
import { AuthserviceService } from '../../service/authservice/authservice.service';

@Component({
  selector: 'app-getborrowingtransaction',
  imports: [CommonModule,FormsModule],
  templateUrl: './getborrowingtransaction.component.html',
  styleUrl: './getborrowingtransaction.component.css'
})
export class GetborrowingtransactionComponent implements OnInit {
  searchType: string = 'id';
  searchValue: string = '';
  role:string = '';
  msg: string = '';
  transactions:Observable<any>=of([]);
  localmemberID:number=0;

  ngOnInit(): void {
    this.role=this.authservice.getUserRole();
    this.localmemberID=this.authservice.getUserID();
    
  }

  constructor(private borrowingtransactionservice: BorrowingtransactionService,private authservice:AuthserviceService) {
    
  }

  isInteger(value: string): boolean {
    return /^[0-9]*$/.test(value);
  }

  searchTransaction() {
    let url = '';
    switch (this.searchType) {
      case 'memberID':
        if (!this.isInteger(this.searchValue)) {
          this.msg = 'Member ID must be an integer';
          return;
        }
        
        url = `/member/${this.searchValue}`;
        break;
      case 'bookID':
        if (!this.isInteger(this.searchValue)) {
          this.msg = 'Book ID must be an integer';
          return;
          
        }
        url = `/book/${this.searchValue}`;
        if(this.role!=='Admin'){
          url = `/memberAndBook/${this.localmemberID}/${this.searchValue}`;
        }
        break;
      case 'all':
        url = ``;
        if(this.role!=='Admin'){
          url = `/member/${this.localmemberID}`;
        }
        break;
    }

    this.borrowingtransactionservice.getborrowingtransactionbyidall(url).subscribe(

      (data) => {
        console.log(url)
        this.transactions=of(data);
        this.msg = JSON.stringify(data, null, 2);
      },
      (error) => {
        window.alert("Error while Fetching the data");
        this.msg = 'Error fetching member data: ' + error.error.text;
      }
    );
  }
}
