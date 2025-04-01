import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLogin:boolean =false;

  ngOnInit(): void {
      this.checkLoginStatus();
  }
  checkLoginStatus():void{
    const token=localStorage.getItem('loggedInUser');
    this.isLogin=!!token;
  }
  constructor(private router:Router){}
  login(){
    this.router.navigate(['login']);
  }
  logout(){
    localStorage.removeItem('loggedInUser');
    sessionStorage.removeItem('reloaded');
    console.log("coming to logout")
    this.isLogin=false;
    this.router.navigate(['/'])
  }
  onButtonClick(){
    if(this.isLogin){
      this.logout();
    }else{
      this.login();
    }
  }
  signup(){
    this.router.navigate(['signup'])
  }

}
