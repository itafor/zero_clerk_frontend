import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular4PaystackModule } from 'angular4-paystack';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { ProfileComponent } from './users/profile/profile.component';
import { BuyPlanComponent } from './users/buy-plan/buy-plan.component';
import { RequestResetComponent } from './users/password/request-reset/request-reset.component';
import { RespondResetComponent } from './users/password/respond-reset/respond-reset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubscriptionPlansComponent } from './users/subscription-plans/subscription-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    BuyPlanComponent,
    RequestResetComponent,
    RespondResetComponent,
    SubscriptionPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular4PaystackModule.forRoot('pk_test_3796b530257f04cc0c640811d7523ad1e4581241'),

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
