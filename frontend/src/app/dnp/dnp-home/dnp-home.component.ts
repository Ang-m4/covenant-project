import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dnp-home',
  templateUrl: './dnp-home.component.html',
  styleUrls: ['./dnp-home.component.css']
})

export class DnpHomeComponent {

  constructor(private router: Router) { }

  public isCollapsed = false;

  concertations: any[] = [];
  proposals: any[] = [];

  selectedConcertation: any = { name: 'Loading...' };

  ngOnInit() {
    fetch('http://localhost:4000/api/concertation/list')
      .then((response) => response.json())
      .then((data) => {
        this.concertations = data;
        this.selectedConcertation = data[0];

        fetch('http://localhost:4000/api/concertation/' + this.selectedConcertation.id + '/proposals')
          .then((response) => response.json())
          .then((data) => {
            this.proposals = data;
          });

      });
  }

  navigateToCreate() {
    this.router.navigate(['/dnp/new/concertation']);
  }

  changeSelectedConcertation(concertation: any) {
    this.selectedConcertation = concertation;

    fetch('http://localhost:4000/api/concertation/' + this.selectedConcertation.id + '/proposals')
          .then((response) => response.json())
          .then((data) => {
            this.proposals = data;
          });
  };

  exit(){
    this.router.navigate(['/login']);
  }

  deleteConcertation(id:number){
    fetch('http://localhost:4000/api/concertation/' + id, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(json => {console.log(json); this.ngOnInit();})
      .catch(err => console.log(err));

  }

}
