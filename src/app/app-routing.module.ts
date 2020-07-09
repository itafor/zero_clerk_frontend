import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { ProfileComponent } from './users/profile/profile.component';
import { RequestResetComponent } from './users/password/request-reset/request-reset.component';
import { BuyPlanComponent } from './users/buy-plan/buy-plan.component';
import { SubscriptionPlansComponent } from './users/subscription-plans/subscription-plans.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:ProfileComponent},
  {path:'request-password-reset',component:RequestResetComponent},
  {path:'respond-password-reset',component:RequestResetComponent},
  {path:'plans',component:SubscriptionPlansComponent},
  {path:'buy-plan/:uuid',component:BuyPlanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
