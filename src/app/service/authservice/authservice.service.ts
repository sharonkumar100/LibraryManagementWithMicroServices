import { Injectable } from '@angular/core';
import { MemberData } from '../../models/Member';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

 
  user?:MemberData;
  getUserRole(): string {
    
    this.user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    return this.user?.role || '';
  }
  getUserID(): number {
    
    this.user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    return this.user?.memberID ||0;
  }

  // Check if user is logged in
  isAuthenticated(): boolean {
    this.user = JSON.parse(localStorage.getItem('user') || '{}')
    return this.user?.role === 'Admin';
  }




}
