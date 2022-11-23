import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

  constructor(private router: Router) { }

  logout(){
    this.router.navigate(['/login']);
  }

  showProposals(){
    const conMenu = document.getElementById('conMenu');
    const propMenu = document.getElementById('propMenu');

    propMenu!.classList.add('active');
    conMenu!.classList.remove('active');

    this.router.navigate(['/user/proposals']);
  }

  showConcertations(){
    const conMenu = document.getElementById('conMenu');
    const propMenu = document.getElementById('propMenu');

    conMenu!.classList.add('active');
    propMenu!.classList.remove('active');

    this.router.navigate(['/user/concertations']);


  }

}
