import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DnpHomeComponent } from './dnp-home/dnp-home.component';
import { ExpertHomeComponent } from './expert-home/expert-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserHomeComponent },
  { path: 'dnp', component: DnpHomeComponent },
  { path: 'expert', component: ExpertHomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
