import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-proposals',
  templateUrl: './user-proposals.component.html',
  styleUrls: ['./user-proposals.component.css']
})
export class UserProposalsComponent {

  constructor(private router:Router) { }

  user: any = {};
  userProposals: any = [];

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user') || "{}") || {};
    if(this.user.id === undefined){
      this.router.navigate(['/login']);
    }

    fetch('http://localhost:4000/api/proposals/user/' + this.user.id)
      .then((response) => response.json())
      .then((data) => {
        this.userProposals = data;
        console.log(this.userProposals);
      });
  }

  deleteProposal(proposal:any){
    fetch('http://localhost:4000/api/proposals/' + proposal.id, {
      method: 'DELETE'
    })
    .then((response) => response.json())
    .then((data) => {
      this.ngOnInit();
    });
  }

}
