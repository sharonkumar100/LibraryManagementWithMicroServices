import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../service/bookservice/book.service';
import { Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '../../models/Book';
import { AuthserviceService } from '../../service/authservice/authservice.service';

@Component({
  selector: 'app-getdata',
  imports: [CommonModule,FormsModule],
  templateUrl: './getdata.component.html',
  styleUrl: './getdata.component.css'
})
export class GetdataComponent {
  searchType: string = 'id';
  searchValue: string = '';
  msg: string='';
  role:string='';
  @Input() booklist:Observable<any> = of([]);
  
  constructor(private bookservice:BookService,private router:Router,private authService:AuthserviceService){
    this.role=authService.getUserRole();

  }

  isInteger(value: string): boolean {
    return /^[0-9]*$/.test(value);
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
  editBook(bookID:number){
    this.router.navigate(['mainpage/updatebook',bookID]);
  }

  searchBook(){
    let url='';
    switch (this.searchType) {
      case 'id':
        url = `${this.searchValue}`;
        break;
      case 'title':
        url = `title/${this.searchValue}`;
        break;
      case 'author':
        url = `author/${this.searchValue}`;
        break;
      case 'genre':
        url = `genre/${this.searchValue}`;
        break;
    }



    this.bookservice.getByIdTitleAuthorGenre(url).subscribe(

      (data) => {
        console.log("the data is ",data);
        if(this.searchType == 'id'){
          this.booklist=of([data]);
        }
        else{
          this.booklist=of(data);
        }
        
        this.msg =  JSON.stringify(data, null, 2);
      },
      (error) => {
        window.alert("Book not found");
        this.msg = error.error;
      }
    );
  }
}


