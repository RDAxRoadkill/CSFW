import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../model/subscription';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators  } from "@angular/forms";
import { SubscriptionService } from '../../service/subscription.service';
import { HardwareApiService } from '../../service/hardware-api.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-subscription-edit',
  templateUrl: './subscription-edit.component.html',
  styleUrls: ['./subscription-edit.component.css']
})
export class SubscriptionEditComponent implements OnInit {
  submitted = false;
  editSubForm: FormGroup;
  subData: Subscription[];
  Hardwares: any = [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private subscriptionService: SubscriptionService,
    private router: Router,
    private hardwareService: HardwareApiService
  ) { 
    this.updateSubscription();
  }

  ngOnInit() {
    this.updateSubscription();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getSubscription(id);
    this.getHardware();
  }

  // Getter to access form control
  get myForm(){
    return this.editSubForm.controls;
  }

  getSubscription(id){
    this.subscriptionService.getSubscription(id).subscribe(data =>{
      this.editSubForm.setValue({
        Name: data['Name'],
        Costs: data['Costs'],
        Hardwares: ['']
      })
    })
  }

  getHardware(){
    this.hardwareService.getHardwares().subscribe((data) => {
      this.Hardwares = data;
    })
  }

  updateSubscription(){
    this.editSubForm = this.fb.group({
      Name: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      Costs: ['', [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]],
      Hardwares: ['', [
        Validators.required
      ]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editSubForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.subscriptionService.updateSubscription(id, this.editSubForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-subscription');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
