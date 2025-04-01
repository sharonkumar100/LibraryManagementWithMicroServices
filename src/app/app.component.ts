import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AddbookComponent } from './book/addbook/addbook.component';
import { UpdatebookComponent } from "./book/updatebook/updatebook.component";
import { DisplayallbooksComponent } from "./book/displayallbooks/displayallbooks.component";
import { DeletebookComponent } from "./book/deletebook/deletebook.component";
import { GetdataComponent } from "./book/getdata/getdata.component";
import { RegistermemberComponent } from "./member/registermember/registermember.component";
import { GetmemberComponent } from "./member/getmember/getmember.component";
import { DeletememberComponent } from "./member/deletemember/deletemember.component";
import { PutmemberComponent } from "./member/putmember/putmember.component";
import { GetborrowingtransactionComponent } from './borrowingtransaction/getborrowingtransaction/getborrowingtransaction.component';
import { BorrowbookComponent } from "./borrowingtransaction/borrowbook/borrowbook.component";
import { ReturnbookComponent } from "./borrowingtransaction/returnbook/returnbook.component";
import { GetfinesComponent } from "./fine/getfines/getfines.component";
import { ClearfineComponent } from "./fine/clearfine/clearfine.component";
import { LandingpageComponent } from "./components/landingpage/landingpage.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MemberpageComponent } from "./components/memberpage/memberpage.component";
import { MainpageComponent } from "./components/mainpage/mainpage.component";
import { NotificationComponent } from "./notification/notification.component";
import { AuthserviceService } from './service/authservice/authservice.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddbookComponent, RouterLink, UpdatebookComponent, DisplayallbooksComponent, DeletebookComponent, GetdataComponent, RegistermemberComponent, GetmemberComponent, DeletememberComponent, PutmemberComponent, GetborrowingtransactionComponent, BorrowbookComponent, ReturnbookComponent, GetfinesComponent, ClearfineComponent, LandingpageComponent, LoginComponent, NavbarComponent, MemberpageComponent, MainpageComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLogin:boolean=false;
  role:string ='';
  isAuthenticated:boolean = false;
  constructor(private router:Router,private authService:AuthserviceService){}
  ngOnInit(): void {
    this.role=this.authService.getUserRole();
    console.log("the role is"+this.role);
    this.isAuthenticated=this.authService.isAuthenticated();
    const token = localStorage.getItem('loggedInUser');
    this.isLogin=!!token;
    if(this.isLogin){
      this.router.navigate(['/mainpage']);
    }else{
      this.router.navigate(['dashboard'])
    }
  }
  title = 'librarymanagement';
}
