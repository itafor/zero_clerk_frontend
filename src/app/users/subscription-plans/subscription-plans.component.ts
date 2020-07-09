import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-subscription-plans',
  templateUrl: './subscription-plans.component.html',
  styleUrls: ['./subscription-plans.component.css']
})
export class SubscriptionPlansComponent implements OnInit {

  constructor(public _activatedRoute:ActivatedRoute,
    private service: UsersService,) { }

  ngOnInit() {
    let uuid:string = this._activatedRoute.snapshot.params['uuid'];
  }

}
