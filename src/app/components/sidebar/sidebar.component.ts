import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../service/authservice/authservice.service';
import { MemberData } from '../../models/Member';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent implements OnInit {
  role:string = '';
  memberUser?:MemberData;

  ngOnInit() {
      this.role=this.authService.getUserRole();
      this.memberUser=JSON.parse(localStorage.getItem('loggedInUser') || '{}');
      
      console.log("it is calling"+JSON.parse(localStorage.getItem('loggedInUser') || '{}'))
      console.log("working on sidebar"+this.memberUser?.role)
      this.role=this.memberUser?.role||'{}'
  }
  activeModule: string = '';
  constructor(private router:Router,private authService:AuthserviceService){}

  toggleModule(module: string) {
    if (this.activeModule === module) {
      this.activeModule = '';
    } else {
      this.activeModule = module;
    }
  }
  addBook() { this.router.navigate(['mainpage/add-book']); }
deleteBook() { this.router.navigate(['mainpage/deletebook']); }
showBooks() { this.router.navigate(['mainpage/showbook']); }
getBook() { this.router.navigate(['mainpage/getbook']); }
updateBook() { this.router.navigate(['mainpage/updatebook']); }

registerMember() { 
  console.log("It is clicking Register member")
  this.router.navigate(['mainpage/registermember']); 
}
getMember() { this.router.navigate(['mainpage/getmember']); }
deleteMember() { this.router.navigate(['mainpage/deletemember']); }
updateMember() { this.router.navigate(['mainpage/updatemember']); }

borrowBook() { this.router.navigate(['mainpage/borrowbook']); }
returnBook() { this.router.navigate(['mainpage/returnbook']); }
getTransaction() { this.router.navigate(['mainpage/gettransaction']); }

clearFine() { this.router.navigate(['mainpage/clearfine']); }
getFine() { this.router.navigate(['mainpage/getfine']); }

notifications() {
  console.log("the notification is clicked");
   this.router.navigate(['mainpage/notifications']);
 }



}
