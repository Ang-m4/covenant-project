import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

    fetch(`${environment.urlBackend}/api/proposals/user/` + this.user.id)
      .then((response) => response.json())
      .then((data) => {
        this.userProposals = data;
        console.log(this.userProposals);
      });
  }

  deleteProposal(proposal:any){
    fetch(`${environment.urlBackend}/api/proposals/` + proposal.id, {
      method: 'DELETE'
    })
    .then((response) => response.json())
    .then((data) => {
      this.ngOnInit();
    });
  }

}
