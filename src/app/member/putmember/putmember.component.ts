import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Member } from '../../models/Member';
import { MemberService } from '../../service/memberservice/member.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-putmember',
  imports: [CommonModule, FormsModule],
  templateUrl: './putmember.component.html',
  styleUrl: './putmember.component.css'
})
export class PutmemberComponent implements OnInit {
  @Input() member: Member;
  @Input() member1: Member;

  msg: string = '';
  filename: string = '';
  imagePreview: string | ArrayBuffer | null = null;
  selectedFile!: File;
  flag: boolean = false;

  constructor(private memberservice: MemberService, private route: ActivatedRoute, private router: Router) {
    this.member = new Member();
    this.member1 = new Member();
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('memberID'));
    console.log("nginit" + id);
    this.getMemberById(id);
  }
  getMemberById(id: number): void {
    console.log("coming", id);
    this.memberservice.getmemberbyid(id).subscribe(
      (data) => {
        this.member = data;
      }, (error) => {
        console.log('Error fetching book', error);
      }
    )
  }
  updateMember() {
    this.flag = true;
    if (this.selectedFile == null) {

      this.memberservice.updatemember(this.member.memberID, this.member).subscribe(data => {
        this.member1 = data;
        this.msg = 'data updated';
      }, error => {
        this.msg = error.error;
      })
    }
    else {
      this.memberservice.uploadImageToFileSystem(this.selectedFile).subscribe(
        (url: any) => {
          this.filename = url;
          this.member.profileimg = url;
          window.alert("image uploaded successfully");

          this.memberservice.register(this.member).subscribe(
            data => {

              this.msg = JSON.stringify(data, null, 2);
              window.alert("Member Registered");

             
              this.router.navigate(['login']);

            },
            error => {
              this.msg = JSON.stringify(error.error, null, 2);
              window.alert("Member not Registered");
            }
          );
        }, error => {
          console.log(error.error.text);
          window.alert("error while uploading the image");
        }
      )
    }
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
