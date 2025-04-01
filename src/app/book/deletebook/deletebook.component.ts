import { Component, Input } from '@angular/core';
import { BookService } from '../../service/bookservice/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deletebook',
  imports: [CommonModule,FormsModule],
  templateUrl: './deletebook.component.html',
  styleUrl: './deletebook.component.css'
})
export class DeletebookComponent {
  @Input() bookID:any='';
  msg:string='';
  constructor(private bookservice:BookService){
    
  }

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
  
}
