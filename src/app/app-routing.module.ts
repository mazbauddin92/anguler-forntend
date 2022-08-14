import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path:'addemployee',
    component: AddEmployeeComponent
  },
  {
    path:'updateemployee/:id',
    component: UpdateEmployeeComponent
  },
  {
    path:'listemployee',
    component: ListEmployeeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'',
    component: ListEmployeeComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
