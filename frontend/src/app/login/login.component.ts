import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    const response = await fetch('http://localhost:4000/api/login', {
      method: "POST",
      body: JSON.stringify(this.loginForm.value),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    });

    const result = await response.json();
    const data = result[0];
    if (response.status === 200) {
      if(data.roleId === 2) {
        this.router.navigate(['/user']);
      } else if(data.roleId === 3) {
        this.router.navigate(['/dnp']);
      } else if(data.roleId === 4) {
        this.router.navigate(['/expert']);
      }
    }
  }

}


