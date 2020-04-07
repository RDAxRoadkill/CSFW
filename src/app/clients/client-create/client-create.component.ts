import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../service/client.service';
import { SubscriptionService } from '../../service/subscription.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { of } from 'rxjs';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  submitted = false;
  clientForm: FormGroup;
  Subscriptions: any = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ClientService: ClientService,
    private subService: SubscriptionService
  ) {
    this.mainForm();
   }

  ngOnInit() {
    this.formSetup();
  }

  mainForm() {
    this.clientForm = this.fb.group({
      Name: ['', [
        Validators.required, 
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      Firstname: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      Lastname: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      Subscriptions: ['', [
        Validators.required
      ]]
    })
  }

  formSetup(){
    this.clientForm.setValue({
      Name: [''],
      Firstname: [''],
      Lastname: [''],
      Subscriptions: ['']
    })

    of(this.getSubscription()).subscribe(Subscriptions => {
      return this.Subscriptions = Subscriptions
    });
  }

  getSubscription(){
    this.subService.getSubscriptions().subscribe((data) => {
      this.Subscriptions = data;
    })
  }


    // Getter to access form control
    get myForm(){
      return this.clientForm.controls;
    }
  
    onSubmit(){
      this.submitted = true;
      //Validate variables etc
      if(!this.clientForm.valid) {
        return false;
      } else {
        console.log(this.clientForm);
        this.ClientService.createClient(this.clientForm.value).subscribe(
          (res) => {
            console.log("Client created");
            this.router.navigateByUrl('/list-client');
          }, (error) => {
            console.log(error);
          }
        )
      }
    }

}
