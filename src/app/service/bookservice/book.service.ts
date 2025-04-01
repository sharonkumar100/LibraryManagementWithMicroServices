import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../models/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  addBook(b:Book): Observable<Book>{
    return <Observable<Book>>this.http.post("http://localhost:6061/books/addbook",b);
  }
  uploadImageToFileSystem(file:File):Observable<any>{
    const formData = new FormData();
    formData.append('image',file);
    return <Observable<any>>this.http.post("http://localhost:6061/books/fileSystem",formData,{responseType:'text'});
  }
  updateBook(b:Book): Observable<Book>{
    return <Observable<Book>>this.http.put("http://localhost:6061/books/"+b.bookID,b);
  }
  getAllBooks(): Observable<any>{
    return this.http.get("http://localhost:6061/books");
  }
  deleteBook(bookID:number):Observable<any>{
    return this.http.delete("http://localhost:6061/books/"+bookID);
  }
  // getByGenre(genre:string): Observable<any>{
  //   return this.http.get("http://localhost:6061/books/genre/"+genre);
  // }
  // getByAuthor(author:string): Observable<any>{
  //   return this.http.get("http://localhost:6061/books/genre/"+author);
  // }
  // getByTitle(title:string): Observable<any>{
  //   return this.http.get("http://localhost:6061/books/genre/"+title);
  // }

  getByIdTitleAuthorGenre(value:string): Observable<any>{
    return this.http.get("http://localhost:6061/books/"+value);
  }


  getById(id:number): Observable<any>{
    return this.http.get("http://localhost:6061/books/"+id);
  }
  
  
  

}