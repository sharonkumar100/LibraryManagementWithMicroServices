import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../service/memberservice/member.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../service/authservice/authservice.service';
import { Member, MemberData } from '../../models/Member';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  email: string = '';
  password: string = '';
  isLogin:boolean=false;
  memberdata ?: MemberData;

  ngOnInit(): void {
    const token = localStorage.getItem('loggedInUser');
    
    this.isLogin=!!token;
    if(this.isLogin){
      this.router.navigate(['/mainpage']);
     
    }
  }

  constructor(private memberservice: MemberService,private router:Router,private authService:AuthserviceService) {

  }

  
  login() {
    
    this.memberservice.loginUser(this.email,this.password).subscribe(
      (response) => {
        console.log("Login respoonse",response);
        if (response) {
          localStorage.setItem('loggedInUser', JSON.stringify(response));
          const token = JSON.stringify(localStorage.getItem('loggedInUser'))
          const token1=JSON.parse(token)
          console.log("after login"+token)

          alert('Login successful!');
          this.router.navigate(['/mainpage']);  // Redirect to dashboard
        } else {
          alert('Invalid email or password');
        }
      },
      (error) => {
        console.log("Login respoonse failed",error.error,error);
        alert('User not found');
      }
    );
   
  }
}

