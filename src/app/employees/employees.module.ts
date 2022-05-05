import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesComponent } from './components/employees/employees.component';

import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  declarations: [
    EmployeesComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule {

}