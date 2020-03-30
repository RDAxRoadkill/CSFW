import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../model/subscription';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators  } from "@angular/forms";
import { SubscriptionService } from '../../service/subscription.service';

@Component({
  selector: 'app-subscription-edit',
  templateUrl: './subscription-edit.component.html',
  styleUrls: ['./subscription-edit.component.css']
})
export class SubscriptionEditComponent implements OnInit {
  submitted = false;
  editSubForm: FormGroup;
  subData: Subscription[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private subscriptionService: SubscriptionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateSubscription();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getSubscription(id);
    this.editSubForm = this.fb.group({
      Name: ['', [Validators.required]],
      Costs: [''],
    })
  }

  // Getter to access form control
  get myForm(){
    return this.editSubForm.controls;
  }

  getSubscription(id){
    this.subscriptionService.getSubscription(id).subscribe(data =>{
      console.log(data)
      this.editSubForm.setValue({
        Name: data['Name'],
        Costs: data['Costs']
      })
    })
  }

  updateSubscription(){
    this.editSubForm = this.fb.group({
      Name: ['', [Validators.required]],
      Costs: ['']
    })
  }

  onSubmit() {
    console.log("Submitted")
    this.submitted = true;
    if (!this.editSubForm.valid) {
      return false;
      //TODO: Send back feedback on false data
      window.location.reload();
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
