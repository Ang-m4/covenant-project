import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dnp-create-concertation',
  templateUrl: './dnp-create-concertation.component.html',
  styleUrls: ['./dnp-create-concertation.component.css']
})
export class DnpCreateConcertationComponent {

  constructor(private router: Router) { }
  sectors: any[] = [];

  formConcertation = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    isOpen: new FormControl(true),
    sectorId: new FormControl(0),
    apertureDate: new FormControl(''),
    votationPhaseId: new FormControl(1)
  })

  ngOnInit() {
    fetch('http://localhost:4000/api/concertation/sectors')
      .then((response) => response.json())
      .then((data) => this.sectors = data);
  }

  navigateDnp() {
    fetch('http://localhost:4000/api/concertation/add', {
      method: "POST",
      body: JSON.stringify(this.formConcertation.value),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));

    this.router.navigate(['/dnp']);
  }

}
