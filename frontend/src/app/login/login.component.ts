import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async validateLogin() {
    const response = await fetch(`${environment.urlBackend}/api/login`, {
      method: "POST",
      body: JSON.stringify(this.loginForm.value),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    });

    const result = await response.json();
    const data = result[0];
    if (response.status === 200) {
      localStorage.setItem('user', JSON.stringify(data));

      if(data.roleId === 14) {
        this.router.navigate(['/user/proposals']);
      } else if(data.roleId === 24) {
        this.router.navigate(['/dnp']);
      } else if(data.roleId === 34) {
        this.router.navigate(['/expert']);
      }
    }
  }

}


