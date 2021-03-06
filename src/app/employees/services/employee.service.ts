import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

  constructor(private httpClient: HttpClient) { }
  
  public getEmployees(): any{
    return this.httpClient.get('/assets/mockapi/employees-list.json')
  }
}
