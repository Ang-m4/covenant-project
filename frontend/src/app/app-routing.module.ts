import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DnpCreateConcertationComponent } from './dnp/dnp-create-concertation/dnp-create-concertation.component';
import { DnpHomeComponent } from './dnp/dnp-home/dnp-home.component';
import { ExpertHomeComponent } from './expert-home/expert-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserConcertationsComponent } from './user/user-concertations/user-concertations.component';
import { UserCreateProposalComponent } from './user/user-create-proposal/user-create-proposal.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserProposalsComponent } from './user/user-proposals/user-proposals.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'user', component: UserHomeComponent, children: [
      { path: 'proposals', component: UserProposalsComponent },
      { path: 'concertations', component: UserConcertationsComponent },
      { path: ':id/new-proposal', component: UserCreateProposalComponent},
      { path: '', redirectTo: 'proposals', pathMatch: 'full' }
    ]
  },
  { path: 'dnp', component: DnpHomeComponent },
  { path: 'dnp/new/concertation', component: DnpCreateConcertationComponent },
  { path: 'expert', component: ExpertHomeComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
