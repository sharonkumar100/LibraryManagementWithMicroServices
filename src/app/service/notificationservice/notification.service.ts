import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }

  generate():Observable<any>{
    return <Observable<any>>this.http.post("http://localhost:6065/notifications/generate",{});
  }
  getNotificationsByMemberID(memberID:string):Observable<any>{
    return <Observable<any>>this.http.get("http://localhost:6065/notifications"+memberID);
  }
  getAllNotifications():Observable<any>{
    return <Observable<any>>this.http.get("http://localhost:6065/notifications"); 
  }

  getmemberbyidemailall(name:string): Observable<any>{
    return <Observable<any>>this.http.get("http://localhost:6065/notifications"+name);
  }
  

}
