import {Routes,RouterModule} from '@angular/router'
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'employee',component:EmployeeComponent},

  // {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);
