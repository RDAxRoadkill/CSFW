import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators  } from "@angular/forms";
import { ClientService } from '../../service/client.service';
import { SubscriptionService } from '../../service/subscription.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  clientData: Client[];
  Subscriptions: any = [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private clientService: ClientService,
    private router: Router,
    private subService: SubscriptionService
  ) {
    this.updateClient();
   }

  ngOnInit() {
    this.updateClient();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getClient(id);
    this.getSubscription();
  }
  // Getter to access form control
  get myForm(){
    return this.editForm.controls;
  }

  getClient(id){
    this.clientService.getClient(id).subscribe(data => {
      this.editForm.setValue({
        Name: data['Name'],
        Firstname: data['Firstname'],
        Lastname: data['Lastname'],
        Subscriptions: ['']
      });
    });

    of(this.getSubscription()).subscribe(Subcriptions => {
      this.Subscriptions = Subcriptions;
    });
  }

  getSubscription(){
    this.subService.getSubscriptions().subscribe((data) => {
      this.Subscriptions = data;
    })
  }
  updateClient(){
    this.editForm = this.fb.group({
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

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.clientService.updateClient(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-client');
          }, (error) => {
            console.log(error)
          })
      }
    }
  }
}
