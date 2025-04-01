import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  imports: [SidebarComponent,CommonModule,RouterModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit {
  ngOnInit(): void {
      if(!sessionStorage.getItem('reloaded')){
        sessionStorage.setItem('reloaded','true');
        window.location.reload();
        console.log("reloaded");
      }
  }

}
