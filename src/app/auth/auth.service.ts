import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    localStorage.setItem('logged', 'true');
    return this.httpClient.get('/assets/mockapi/login.json')
  }

  logout(){
    localStorage.setItem('logged', 'false');
    return this.httpClient.get('/assets/mockapi/logout.json')
  }
}
