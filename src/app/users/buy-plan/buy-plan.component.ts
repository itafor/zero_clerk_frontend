import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-buy-plan',
  templateUrl: './buy-plan.component.html',
  styleUrls: ['./buy-plan.component.css']
})
export class BuyPlanComponent implements OnInit {
  currentPlan = null;
  loading = false;
  submitted = false;
  errors = null;
  reference = '';
  title = '';
  

  constructor(
    public _activatedRoute:ActivatedRoute,
    private service: UsersService,
    private _fb:FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.getPlan(this._activatedRoute.snapshot.params['uuid']);
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    this.router.navigate(['plans'])
    console.log(this.title, ref);

    this.service.transactionDone(ref.trxref).subscribe(
      data=>{
        
        console.log(data);
      },
      (error)=>{
        
        console.log(error);
      }
    )

  }

  paymentCancel() {
    console.log('payment failed');
  }

  getPlan(id) {
    this.service.fetchPlan(id)
      .subscribe(
        data => {
          this.currentPlan = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  buyPlan(plan_data){
    // if(plan_data.invalid){
    //   console.log('invalid form');
    //   return
    // }
   
    const name=this.currentPlan.plan.name;
    //const email=this.getPlanData.email.value;
    const amount=this.currentPlan.plan.amount.toString();
    const plan_id=this.currentPlan.plan.uuid;
    this.loading = true;
    console.log(name)
    this.service.buy_plan(name,amount,plan_id).subscribe(
      data=>{
        
        console.log(data);
      },
      (error)=>{
        
        console.log(error);
      }
    )
   
  }

}