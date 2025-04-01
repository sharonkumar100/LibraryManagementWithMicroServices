import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FineService } from '../../service/fineservice/fine.service';

@Component({
  selector: 'app-clearfine',
  imports: [CommonModule,FormsModule],
  templateUrl: './clearfine.component.html',
  styleUrl: './clearfine.component.css'
})
export class ClearfineComponent {
  msg:string='';
  memberID:number=0;
  amount:number=0;
  isInteger(value: number): boolean {
    return /^[0-9]*$/.test(value+'');
  }
  isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  constructor(private fineservice:FineService) {
    
  }
  clearFine(){
    this.fineservice.returned(this.memberID,this.amount).subscribe(data=>{
      window.alert(data);
      this.msg=JSON.stringify(data.body,null,2);
    },error=>{
      console.log("error",error)
      this.msg=JSON.stringify(error.error,null,2);
    })
  }
}
