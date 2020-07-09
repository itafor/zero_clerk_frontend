import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-subscription-plans',
  templateUrl: './subscription-plans.component.html',
  styleUrls: ['./subscription-plans.component.css']
})
export class SubscriptionPlansComponent implements OnInit {
  reference = '';
  title;

  constructor(public _activatedRoute:ActivatedRoute,
    private service: UsersService, private router: Router) { }

  ngOnInit() {
    let uuid:string = this._activatedRoute.snapshot.params['uuid'];
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    this.router.navigate(['plans'])
    console.log(this.title, ref);
  }

  paymentCancel() {
    console.log('payment failed');
  }

}
