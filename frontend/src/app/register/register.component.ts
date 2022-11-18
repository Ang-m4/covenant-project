import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formSignUp = new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    departmentId: new FormControl(''),
    segmentId: new FormControl(''),
    roleId: new FormControl(''),

  })

  departments: any[] = [];
  segments: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    //gets departments from the backend
    fetch('http://localhost:4000/api/users/departments')
      .then((response) => response.json())
      .then((data) => this.departments = data);

    //gets departments from the backend
    fetch('http://localhost:4000/api/users/segments')
      .then((response) => response.json())
      .then((data) => this.segments = data);
  }

  saveUser() {

    //saves user to the backend
    fetch('http://localhost:4000/api/users/add', {
      method: "POST",
      body: JSON.stringify(this.formSignUp.value),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));

      this.router.navigate(['/login']);
  }

}
