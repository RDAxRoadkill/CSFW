import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionService } from '../../service/subscription.service';
import { HardwareApiService } from '../../service/hardware-api.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { of } from 'rxjs';

@Component({
  selector: 'app-subscription-create',
  templateUrl: './subscription-create.component.html',
  styleUrls: ['./subscription-create.component.css']
})
export class SubscriptionCreateComponent implements OnInit {
  submitted = false;
  subscriptionForm: FormGroup;
  Hardwares: any = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private SubscriptionService: SubscriptionService,
    private HardwareService: HardwareApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() {
    this.formSetup();
  }

  formSetup(){
    this.subscriptionForm.setValue({
      Name: [''],
      Costs: [''],
      Hardwares: ['']
    })

    of(this.getHardware()).subscribe(Hardwares => {
      this.Hardwares = Hardwares
    });
  }

  getHardware(){
    this.HardwareService.getHardwares().subscribe((data) => {
      this.Hardwares = data;
    })
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
      ]],
      Hardwares: ['']
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
