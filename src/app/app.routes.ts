import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { RegistermemberComponent } from './member/registermember/registermember.component';
import { SampleComponent } from './components/sample/sample.component';
import { AddbookComponent } from './book/addbook/addbook.component';
import { DeletebookComponent } from './book/deletebook/deletebook.component';
import { DisplayallbooksComponent } from './book/displayallbooks/displayallbooks.component';
import { GetdataComponent } from './book/getdata/getdata.component';
import { UpdatebookComponent } from './book/updatebook/updatebook.component';
import { GetmemberComponent } from './member/getmember/getmember.component';
import { DeletememberComponent } from './member/deletemember/deletemember.component';
import { PutmemberComponent } from './member/putmember/putmember.component';
import { BorrowbookComponent } from './borrowingtransaction/borrowbook/borrowbook.component';
import { ReturnbookComponent } from './borrowingtransaction/returnbook/returnbook.component';
import { GetborrowingtransactionComponent } from './borrowingtransaction/getborrowingtransaction/getborrowingtransaction.component';
import { ClearfineComponent } from './fine/clearfine/clearfine.component';
import { GetfinesComponent } from './fine/getfines/getfines.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NotificationComponent } from './notification/notification.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:LandingpageComponent},
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    {path:'mainpage',component:MainpageComponent},
    {path:'sample',component:SampleComponent},
    {path:'signup',component:RegistermemberComponent},
    // {path:'updatebook/:bookID',component:UpdatebookComponent},
    { 
        path: 'mainpage', 
        component: MainpageComponent,
        children: [
          { path: 'add-book', component: AddbookComponent ,data:{role:'Admin'}},
          { path: 'deletebook', component: DeletebookComponent,data:{role:'Admin'}},
          { path: 'showbook', component: DisplayallbooksComponent },
          { path: 'getbook', component: GetdataComponent },
          { path: 'updatebook/:bookID', component: UpdatebookComponent ,data:{role:'Admin'}},
          
          { path: 'registermember', component: RegistermemberComponent ,data:{role:'Admin'}},
          { path: 'getmember', component: GetmemberComponent,data:{role:'Admin'} },
          { path: 'deletemember', component: DeletememberComponent,data:{role:'Admin'} },
          { path: 'updatemember/:memberID', component: PutmemberComponent,data:{role:'Admin'} },
      
          { path: 'borrowbook', component: BorrowbookComponent },
          { path: 'returnbook', component: ReturnbookComponent },
          { path: 'gettransaction', component: GetborrowingtransactionComponent },
      
          { path: 'clearfine', component: ClearfineComponent },
          { path: 'getfine', component: GetfinesComponent },

          {path:'notifications',component:NotificationComponent,data:{role:'Admin'}}
          
        ]
      }
      
];
