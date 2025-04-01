import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BorrowingtransactionService } from '../../service/borrowingtransactionservice/borrowingtransaction.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-returnbook',
  imports: [CommonModule,FormsModule],
  templateUrl: './returnbook.component.html',
  styleUrl: './returnbook.component.css'
})
export class ReturnbookComponent {
  memberID: number=0;
  bookIDs: string='';
  msg: string='';
  borrowingtransactionlist:Observable<any>;
  
  isInteger(value: any): boolean {
    return Number.isInteger(Number(value));
  }

  isIntegerList(value: string): boolean {
    return value.split(',').every(val => this.isInteger(val.trim()));
  }

  constructor(private borrowtransactionservice:BorrowingtransactionService){
    this.borrowingtransactionlist=new Observable<any>;
  }
  returnBooks(){
    
    const bookIDList = this.bookIDs.split(',').map(id => parseInt(id.trim(), 10));
    this.borrowtransactionservice.returnbook(bookIDList,this.memberID).subscribe(data=>{
      window.alert("Book Returned");
      this.msg='book returned'
      this.borrowingtransactionlist=data;
    },error=>{
      this.msg=error.error;
    })
  }
}
