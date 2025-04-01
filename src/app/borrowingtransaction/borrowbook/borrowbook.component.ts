import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BorrowingTransaction } from '../../models/BorrowingTransaction';
import { BorrowingtransactionService } from '../../service/borrowingtransactionservice/borrowingtransaction.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-borrowbook',
  imports: [CommonModule,FormsModule],
  templateUrl: './borrowbook.component.html',
  styleUrl: './borrowbook.component.css'
})
export class BorrowbookComponent {
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
  borrowBooks(){
    
    const bookIDList = this.bookIDs.split(',').map(id => parseInt(id.trim(), 10));

    this.borrowtransactionservice.borrowbook(bookIDList,this.memberID).subscribe(data=>{
      this.msg='book borrowed'
      this.borrowingtransactionlist=data;
      window.alert("Book Borrowed");
    },error=>{
      this.msg=error.error;
    })
  }
}
