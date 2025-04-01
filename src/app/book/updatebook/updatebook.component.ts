import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/Book';
import { BookService } from '../../service/bookservice/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  // standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './updatebook.component.html',
  styleUrl: './updatebook.component.css'
})
export class UpdatebookComponent implements OnInit {
  @Input() book:Book;
  @Input() book1:Book;
  msg:string='';

  filename: string='';
  imagePreview: string | ArrayBuffer | null = null; 
  selectedFile!:File;
  flag: boolean = false;

  constructor(private bookservice:BookService,private route:ActivatedRoute,private router:Router){
    this.book = new Book();
    this.book1=new Book();
  }
  ngOnInit(): void {
      const id=Number(this.route.snapshot.paramMap.get('bookID'))
      console.log("nginit"+id)
      this.getBookById(id);
  }
  getBookById(id:number):void{
    console.log("coming",id)
    this.bookservice.getById(id).subscribe(
      (data)=>{
        this.book=data;
        // imgpath ="C:/Angular/librarymanagement/public/assets/books/Java.png"
        // this.imagePreview=this.book.bookurl as string;
        // this.imagePreview="C:/Angular/librarymanagement/public/assets/books/Java.png"
        this.imagePreview="assets/books/Java.png"
        
        
      },(error)=>{
        console.error('Error fetching book',error);
      }
    );
  }
  updateBook(){

    this.flag=true;
    if(this.selectedFile==null){
      this.bookservice.updateBook(this.book).subscribe(data=>{
        this.msg="Record Updated";
        alert(this.msg);
        this.router.navigate(['/mainpage/showbook']);
        this.book1=data;
      },error=>{
        this.msg=error.error;
      window.alert("Error while uploading")
      })
    }else{
    this.bookservice.uploadImageToFileSystem(this.selectedFile).subscribe(
      (url:any)=>{
        this.filename=url;
        this.book.bookurl=url;
        window.alert("image uploaded successfully");
        this.bookservice.updateBook(this.book).subscribe(data=>{
          this.msg="Record Updated";
          alert(this.msg);
          this.router.navigate(['/mainpage/showbook']);
          this.book1=data;
        },error=>{
          this.msg=error.error;
        window.alert("Error while uploading")
        })
      },error=>{
        window.alert("Book not updated ");
        this.msg=error.error;
      }
      )
        
      }
    }

  onFileSelected(event: any) {
    // const file = (event.target as HTMLInputElement).files?.[0];
    const file = event.target.files[0];

    if (file) {
      this.selectedFile=file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        // this.member.profileimg = this.imagePreview?.toString() || ''; 
      };
      reader.readAsDataURL(file);
    }
  }
}
