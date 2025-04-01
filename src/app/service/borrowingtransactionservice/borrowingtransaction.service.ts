import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BorrowingTransaction } from '../../models/BorrowingTransaction';

@Injectable({
  providedIn: 'root'
})
export class BorrowingtransactionService {

  constructor(private http:HttpClient) { }
  getborrowingtransactionbyidall(name:string): Observable<BorrowingTransaction>{
    return <Observable<BorrowingTransaction>>this.http.get("http://localhost:6063/transactions"+name);
  }

  borrowbook(bookIDs: number[], memberID: number): Observable<any> {
    const params = new HttpParams()
      .set('memberID', memberID.toString())
      .set('bookIDs', bookIDs.join(','));
  
    return this.http.post("http://localhost:6063/transactions/borrow", null, { params });
  }
  returnbook(bookIDs: number[], memberID: number): Observable<any> {
    const params = new HttpParams()
      .set('memberID', memberID.toString())
      .set('bookIDs', bookIDs.join(','));
    return this.http.post("http://localhost:6063/transactions/return", null, { params });
  }
}
