import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../service/bookservice/book.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-addbook',
  imports: [CommonModule,FormsModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {
  @Input() book:Book;
  @Input() book1:Book;
  msg:string='';
  filename: string='';
  imagePreview: string | ArrayBuffer | null = null; 
  selectedFile!:File;
  flag: boolean = false;
  constructor(private bookservice:BookService){
    this.book = new Book();
    this.book1=new Book();
    
  }
  addBook(){
    this.flag = true;
    this.bookservice.uploadImageToFileSystem(this.selectedFile).subscribe(
      (url:any)=>{
        this.filename=url;
        this.book.bookurl=url;
        window.alert("image uploaded successfully");
        this.bookservice.addBook(this.book).subscribe(data=>{
          console.log(data);
          window.alert("Book Added");
          this.msg="book added";
          this.book1=data;
        },error=>{
          console.log(error);
          window.alert("Book Already Exists");
          this.msg=error.error;
        }
        )
      },error=>{
        this.msg = JSON.stringify(error.error,null,2);
            window.alert("Error while uploading the book image");
      }
    )
    
  }
  resetForm() {
    this.book = new Book();
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
