import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionService } from '../../service/subscription.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscription-create',
  templateUrl: './subscription-create.component.html',
  styleUrls: ['./subscription-create.component.css']
})
export class SubscriptionCreateComponent implements OnInit {
  submitted = false;
  subscriptionForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private SubscriptionService: SubscriptionService
  ) { 
    this.mainForm();
  }

  ngOnInit() {
  }

  mainForm(){
    this.subscriptionForm = this.fb.group({
      Name: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      Costs: ['', [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]]
    })
  }

  //Getter to access form control
  get myForm(){
    return this.subscriptionForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    //Validate variables etc
    if (!this.subscriptionForm.valid) {
      return false;
    } else {
      this.SubscriptionService.createSubscription(this.subscriptionForm.value).subscribe(
        (res) => {
          console.log("Subscription created by form");
          this.router.navigateByUrl('/list-subscription');
        }, (error) => {
          console.log(error);
        }
      )
    }
  }

}
