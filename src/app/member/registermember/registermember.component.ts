import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Member } from '../../models/Member';
import { MemberService } from '../../service/memberservice/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registermember',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registermember.component.html',
  styleUrls: ['./registermember.component.css']
})

export class RegistermemberComponent implements OnInit {
  @Input() member: Member;
  isLogin:boolean=false;
  confirmPassword: string = '';
  flag: boolean = false;
  msg: string = '';
  filename: string='';
  imagePreview: string | ArrayBuffer | null = null; 
  selectedFile!:File;

  ngOnInit(): void {
      const token = localStorage.getItem('loggedInUser');
      this.isLogin=!!token;
      
  }

  constructor(private memberservice: MemberService,private router:Router) {
    this.member = new Member();
  }

  addMember() {
    this.flag = true;
    
    this.memberservice.uploadImageToFileSystem(this.selectedFile).subscribe(
      (url:any)=>{
        this.filename=url;
        this.member.profileimg=url;
        window.alert("image uploaded successfully");
        
        this.memberservice.register(this.member).subscribe(
          data => {
            
            this.msg = JSON.stringify(data,null,2);
            window.alert("Member Registered");
            
            this.resetForm(); 
            this.router.navigate(['login']);
            
          },
          error => {
            this.msg = JSON.stringify(error.error,null,2);
            window.alert("Member not Registered");
          }
        );
      },error=>{
        console.log(error.error.text);
        window.alert("error while uploading the image");
      }
    )

    if (this.member.password !== this.confirmPassword) {
      this.msg = 'Passwords do not match';
      return;
    }

    
  }

  resetForm() {
    this.member = new Member();
    this.confirmPassword = '';
    this.msg = '';
    this.imagePreview = null; 
  }

  
  onFileSelected(event: any) {
   
    const file = event.target.files[0];

    if (file) {
      this.selectedFile=file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}

