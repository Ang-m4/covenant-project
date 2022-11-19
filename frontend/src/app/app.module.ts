import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { DnpHomeComponent } from './dnp/dnp-home/dnp-home.component';
import { ExpertHomeComponent } from './expert-home/expert-home.component';
import { DnpCreateConcertationComponent } from './dnp/dnp-create-concertation/dnp-create-concertation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    DnpHomeComponent,
    ExpertHomeComponent,
    DnpCreateConcertationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
