import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo: 'list-employee'},
  {path: 'list-employee', component: ListEmployeeComponent},
  // {path: 'create-employee', component: ListEmployeeComponent},
  // {path: 'detail-employee/:id', component: ListEmployeeComponent},
  // {path: 'update-employee/:id', component: ListEmployeeComponent},
  // {path: 'delete-employee/:id', component: ListEmployeeComponent},
  // {path: 'list-timkeeping', component: ListEmployeeComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class EmployeeRoutingModule { }
