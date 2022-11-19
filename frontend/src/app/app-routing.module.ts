import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DnpCreateConcertationComponent } from './dnp/dnp-create-concertation/dnp-create-concertation.component';
import { DnpHomeComponent } from './dnp/dnp-home/dnp-home.component';
import { ExpertHomeComponent } from './expert-home/expert-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserHomeComponent },
  { path: 'dnp', component: DnpHomeComponent},
  { path: 'dnp/new/concertation', component: DnpCreateConcertationComponent},
  { path: 'expert', component: ExpertHomeComponent },


  // { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
