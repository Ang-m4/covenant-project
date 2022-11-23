import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-create-proposal',
  templateUrl: './user-create-proposal.component.html',
  styleUrls: ['./user-create-proposal.component.css']
})
export class UserCreateProposalComponent {

  constructor(private router: Router,private route:ActivatedRoute) { }

  concertationId: number = 0;

  user: any = {};

  formProposal = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  ngOnInit(){

    this.user = JSON.parse(localStorage.getItem('user') || "{}") || {};
    if (this.user.id === undefined) {
      this.router.navigate(['/login']);
    }

    this.route.params.subscribe(params => {
      this.concertationId = +params['id'];
    });

  }

  navigateUser() {

    const proposal = {
      name: this.formProposal.value.name,
      description: this.formProposal.value.description,
      votationPhaseId: 1,
      userId: this.user.id,
      departmentId: this.user.departmentId,
      concertationId: this.concertationId
    };

    console.log(proposal);

    fetch('http://localhost:4000/api/proposals/add', {
      method: "POST",
      body: JSON.stringify(proposal),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));

    this.router.navigate(['/user/proposals']);
  }

}
