import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { NotificationService } from '../service/notificationservice/notification.service';
import { AuthserviceService } from '../service/authservice/authservice.service';

@Component({
  selector: 'app-notification',
  imports: [CommonModule,FormsModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit{
  searchType: string = 'id';
  searchValue: string = '';
  msg: string = '';
  role:string = '';
  localmemberID:number=0;

  ngOnInit(): void {
    this.role=this.authservice.getUserRole();
    this.localmemberID=this.authservice.getUserID();
  }
 

  notifications:Observable<any>=of([]);
  constructor(private authservice:AuthserviceService,private notificationservice:NotificationService){}

  notifybtn(){
    this.notificationservice.generate().subscribe(data=>{
      this.notifications=data;
      window.alert("notifications sent");
    },error=>{
      this.msg="No notifications to show";
      window.alert("Error while sending notifications");
    })
  }

  isInteger(value: string): boolean {
    return /^[0-9]*$/.test(value);
  }

  searchNotification(){
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
        url = `/email/${this.searchValue}`;
        break;
      case 'all':
        url = ``;
        if(this.role!=='Admin'){
          url='/id/${this.localmemberID}'
        }
        break;
    }

    this.notificationservice.getmemberbyidemailall(url).subscribe((data)=>{
      console.log("new member service"+data);
      if(this.searchType=='id'){

        this.notifications=of([data]);
      }else{
        this.notifications=of(data);
      }
    },error=>{
      console.log(error);
      this.msg=JSON.stringify(error.error.text);
      console.log("error is "+error.error.text);
      console.log(error.error)
    })
   
  }
}