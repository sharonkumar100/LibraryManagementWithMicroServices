import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  imports: [CommonModule, FormsModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent implements OnInit {
  constructor(private router:Router){}
  
  modules = [
    {
      title: 'Books',
      description: 'Manage book inventory, categories, authors, and availability with ease.',
      link: '/books'
    },
    {
      title: 'Members',
      description: 'Handle member registrations, profiles, and borrowing history.',
      link: '/members'
    },
    {
      title: 'Borrowing Transactions',
      description: 'Track book issuances, returns, renewals, and overdue alerts.',
      link: '/transactions'
    },
    {
      title: 'Fines',
      description: 'Automate fine calculations and payments for late returns.',
      link: '/fines'
    },
    {
      title: 'Notifications',
      description: 'Send timely notifications about due dates, fines, and more.',
      link: '/notifications'
    }
  ];
  isLogin:boolean=false;
  ngOnInit(): void {
    const token = localStorage.getItem('loggedInUser');
    this.isLogin=!!token;
    if(this.isLogin){
      this.router.navigate(['/mainpage']);
    }
  }

  registerMember(){
    this.router.navigate(['/signup']);
  }
}
