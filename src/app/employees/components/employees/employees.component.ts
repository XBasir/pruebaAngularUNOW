import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { AuthService } from '../../../auth/auth.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  employeesFilter = [];
  inputFilter = '';

  constructor( private route: Router, 
               private router: ActivatedRoute, 
               public employeeService: EmployeeService,
               private authService: AuthService) { }

  
  ngOnInit() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employees = res;
      this.employees.sort((a, b) => a.lastname.localeCompare(b.lastname));
      this.employeesFilter = this.employees;
    })
  }

  filterEmployee(): void {
    this.employeesFilter = [];
    Object.keys(this.employees).forEach(key => {
      let add = false;
      if(this.compareStrings(this.employees[key].name.toUpperCase(), this.inputFilter.toUpperCase())) add = true
      if(this.compareStrings(this.employees[key].lastname.toUpperCase(), this.inputFilter.toUpperCase())) add = true
      if(this.compareStrings(this.employees[key].charge.toUpperCase(), this.inputFilter.toUpperCase())) add = true
      if(this.compareStrings(this.employees[key].phone.toUpperCase(), this.inputFilter.toUpperCase())) add = true
      if(this.compareStrings(this.employees[key].mail.toUpperCase(), this.inputFilter.toUpperCase())) add = true
      if(add){
        this.employeesFilter.push(this.employees[key]);
      }
    })
  } 

  logout(): void {
    this.authService.logout().subscribe((res) => {
      this.route.navigate(['/login']);
    })
  } 

  compareStrings(value, filter) {
      let arr = new Array(256);
      let i = 0;
      for (i = 0; i < 256; i++) {
        arr[i] = 0;
      }
      for (i = 0; i < value.length; i++) {
        arr[value.charCodeAt(i)] += 1;
      }
      for (i = 0; i < filter.length; i++) {
        arr[filter.charCodeAt(i)] -= 1;
        if (arr[filter.charCodeAt(i)] < 0) {
          return false;
        }
      }
      return true;
  }

}
