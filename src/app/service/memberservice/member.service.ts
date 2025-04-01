import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../../models/Member';
import { map, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }
  // register(m:FormData): Observable<Member>{
    //   return <Observable<Member>>this.http.post("http://localhost:6062/members/register",m)
    // }
    register(m:Member): Observable<string>{
      return <Observable<string>>this.http.post("http://localhost:6062/members/register",m,{responseType:'text'})
    }
    loginUser(email:string,password:string):Observable<Member>{
      const params = new HttpParams()
      .set('email', email.toString())
      .set('password', password.toString());
      return <Observable<Member>>this.http.get("http://localhost:6062/members/login",{params,responseType:'json'});
    }

    uploadImageToFileSystem(file:File):Observable<any>{
      const formData = new FormData();
      formData.append('image',file);
      return <Observable<any>>this.http.post("http://localhost:6062/members/fileSystem",formData,{responseType:'text'});
    }

    downloadImageFromFileSystem(s:string):Observable<File>{
      return <Observable<File>>this.http.get("http://localhost:6062/members/fileSystem"+s);
    }
    // getmembers(): Observable<any>{
    //   return <Observable<Member>>this.http.get("http://localhost:6062/members");
    // }
    getmemberbyid(id:number): Observable<any>{
      return <Observable<Member>>this.http.get("http://localhost:6062/members/id/"+id);
    }
  getmemberbyemail(e:string): Observable<Member>{
    return <Observable<Member>>this.http.get("http://localhost:6062/members/email/"+e);
  }


  getmemberbyidemailall(name:string): Observable<any>{
    
    return <Observable<any>>this.http.get("http://localhost:6062/members"+name);
  }

  // getmemberbyidemailall(url: string): Observable<Member[]> {
  //   return this.http.get<Member | Member[]>("http://localhost:6062/members"+url).pipe(
  //     map(response => Array.isArray(response) ? response : [response])
  //   );
  // }

  deletemember(id:number): Observable<Member>{
    return <Observable<Member>>this.http.delete("http://localhost:6062/members/"+id);
  }
  updatemember(id:number,member:Member): Observable<Member>{
    return <Observable<Member>>this.http.put("http://localhost:6062/members/"+id,member);
  }


}
