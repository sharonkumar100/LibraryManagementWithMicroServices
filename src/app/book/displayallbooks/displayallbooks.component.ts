import { Component, Input } from '@angular/core';
import { Book } from '../../models/Book';
import { BookService } from '../../service/bookservice/book.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../service/authservice/authservice.service';

@Component({
  selector: 'app-displayallbooks',
  imports: [CommonModule,FormsModule],
  templateUrl: './displayallbooks.component.html',
  styleUrl: './displayallbooks.component.css'
})
export class DisplayallbooksComponent {
  @Input() booklist:Observable<Book[]>;
  

  msg:string='';
  role:string='';
  constructor(private bookservice:BookService,private router:Router,private authService:AuthserviceService){
    this.role=this.authService.getUserRole();
    this.booklist=bookservice.getAllBooks();
    console.log(this.booklist)
  }
  // bookservice.getAllBooks().subscribe(data=>{
  //   this.msg="getting all books";
  // })

  deleteBook(bookID:number){
    const numericBookID=Number(bookID);
    this.bookservice.deleteBook(numericBookID).subscribe(data=>{
      this.msg=data;
      window.alert("Book Deleted Successfully")
    },error=>{
      window.alert("Error while Deleting")
      this.msg=error.error;
    })
  }
  editBook(bookID:number){
    this.router.navigate(['mainpage/updatebook',bookID]);
  }
}
