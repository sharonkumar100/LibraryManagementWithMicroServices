import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FineService {

  constructor(private http:HttpClient) { }
  getfinebyidall(val:string):Observable<any>{
    return this.http.get("http://localhost:6064/fines"+val);
  }
  getotalfine(val:number):Observable<any>{
    return this.http.get("http://localhost:6064/fines/totalfine/member/"+val,{responseType:'text'});
  }
  returned(memberID:number,amount:number):Observable<any>{
    const params = new HttpParams()
      .set('memberID', memberID)
      .set('amount',amount);
    return this.http.put("http://localhost:6064/fines/clearfine",params,{responseType:'text'});
  }
}
