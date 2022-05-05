import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  ) { }
  login(email: string, password: string) {
    return true;
  }

  logout() {
    return false;
  }

  hasUser() {
    return true;
  }
}
