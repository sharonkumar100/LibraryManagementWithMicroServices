import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MemberService } from '../../service/memberservice/member.service';
import { Member } from '../../models/Member';

@Component({
  selector: 'app-deletemember',
  imports: [CommonModule,FormsModule],
  templateUrl: './deletemember.component.html',
  styleUrl: './deletemember.component.css'
})
export class DeletememberComponent {
  @Input() memberID:any='';
  @Input() member:Member;
  msg:string='';
  constructor(private memberservice:MemberService){
    this.member=new Member();
  }

  deleteMember(memberID:number){
    const numericMemberID=Number(memberID);
    this.memberservice.deletemember(numericMemberID).subscribe(data=>{
      this.member=data;
      window.alert("Member deleted Succesfully");
      this.msg="Member deleted successfully";
    },error=>{
      window.alert("Record Does not exist")
      this.msg=error.error;
    })
  }
}
