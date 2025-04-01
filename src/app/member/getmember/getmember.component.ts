import { Component, Input } from '@angular/core';
import { MemberService } from '../../service/memberservice/member.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Member } from '../../models/Member';
import { Observable, of } from 'rxjs';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getmember',
  imports: [CommonModule,FormsModule],
  templateUrl: './getmember.component.html',
  styleUrl: './getmember.component.css'
})
export class GetmemberComponent {
  memberlist:Observable<any> = new Observable<any>;
  searchType: string = 'id';
  searchValue: string = '';
  msg: string = '';

  constructor(private memberService: MemberService,private router:Router) {
    
  }

  isInteger(value: string): boolean {
    return /^[0-9]*$/.test(value);
  }

  editMember(memberid:number){
    this.router.navigate(['mainpage/updatemember',memberid])
  }

  deleteMember(memberid:number){
    const numericMemberId=Number(memberid);
    this.memberService.deletemember(numericMemberId).subscribe(data=>{
      this.msg=JSON.stringify(data);
      window.alert("Book Deleted Successfully");
    },error=>{
      window.alert(error.error.text);
      this.msg=error.error;

    });
  }

  searchMember() {
    
    let url = '';
    switch (this.searchType) {
      case 'id':
        if (!this.isInteger(this.searchValue)) {
          this.msg = 'ID must be an integer';
          return;
        }
        url = `/id/${this.searchValue}`;
        break;
      case 'email':
        console.log("It is coming to email field",this.searchValue);
        url = `/email/${this.searchValue}`;
        break;
      case 'all':
        url = ``;
        break;
    }

    

    this.memberService.getmemberbyidemailall(url).subscribe((data)=>{
      console.log("new member service"+data);
      if(this.searchType=='id'){
        this.memberlist=of([data]);
        console.log(data);
      }
      else{
        this.memberlist=of(data);
      }
    },error=>{
      window.alert(error.error);
      this.msg=JSON.stringify(error.error);
    })
   
  }
}
