import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  correctUser = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log("entra al formvalidad")
      const value = this.form.value;
      this.authService.users().subscribe((res) => {
        console.log("usuarios", res)
        Object.keys(res).forEach(key => {
          console.log("itera")
          if(res[key].email === value.email && res[key].password === value.password){
            this.correctUser = true;
            this.authService.login(value.email, value.password).subscribe((res) => {
              this.router.navigate(['/employees']);
            });
          }else{
            this.correctUser = false;
          }
        });
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

}