import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-concertations',
  templateUrl: './user-concertations.component.html',
  styleUrls: ['./user-concertations.component.css']
})
export class UserConcertationsComponent {

  user: any = {};
  selectedConcertation: any = {};
  concertations: any[] = [];
  proposals: any[] = [];

  voted: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user') || "{}") || {};
    if (this.user.id === undefined) {
      this.router.navigate(['/login']);
    }

    fetch('http://localhost:4000/api/concertation/user/' + this.user.id)
      .then((response) => response.json())
      .then((data) => {
        this.concertations = data;
        this.selectedConcertation = this.concertations[0];

        fetch('http://localhost:4000/api/concertation/' + this.selectedConcertation.id + '/proposals')
          .then((response) => response.json())
          .then((data) => {
            this.proposals = data;
          });

      });
  }

  exit() {
    this.router.navigate(['/login']);
  }

  changeSelectedConcertation(concertation: any) {
    this.selectedConcertation = concertation;

    fetch('http://localhost:4000/api/concertation/' + this.selectedConcertation.id + '/proposals')
      .then((response) => response.json())
      .then((data) => {
        this.proposals = data;
      });
  }

  validateVotation(proposal: any) {

    fetch('http://localhost:4000/api/proposals/califications/' + proposal.id)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((calification: any) => {
          if (calification.userId == this.user.id) {this.voted = true; }
        });
      });
  }

  votarPropuesta(proposal: any) {

    const vote = document.getElementById(proposal.id + '-score-proposal') as HTMLInputElement;

    const calification = {
      score: vote.value,
      proposalId: proposal.id,
      userId: this.user.id
    };

    fetch('http://localhost:4000/api/proposals/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(calification)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    this.voted = true;
  }

  navigateToCreate(id: number) {
    this.router.navigate(['/user/' + id + '/new-proposal']);
  }

}
