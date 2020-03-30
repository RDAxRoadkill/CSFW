import { Component, OnInit } from '@angular/core';
import { Specifications} from '../../model/specifications';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators  } from "@angular/forms";
import { SpecService } from '../../service/spec.service';

@Component({
  selector: 'app-spec-edit',
  templateUrl: './spec-edit.component.html',
  styleUrls: ['./spec-edit.component.css']
})
export class SpecEditComponent implements OnInit {
  submitted = false;
  editSpecForm: FormGroup;
  specData: Specifications[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private specService: SpecService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateSpec();
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.getSpec(id);
    this.editSpecForm = this.fb.group({
      Name: ['', [Validators.required]],
      Type: [''],
      Amount: [''],
      AmountType: ['']
    })
  }

  get myForm(){
    return this.editSpecForm.controls;
  }

  getSpec(id){
    this.specService.getSpec(id).subscribe(data => {
      console.log(data);
      this.editSpecForm.setValue({
        Name: data['Name'],
        Type: data['Type'],
        Amount: data['Amount'],
        AmountType: data['AmountType']
      });
    });
  }

  updateSpec() {
    this.editSpecForm = this.fb.group({
      Name: ['', [Validators.required]],
      Type: [''],
      Amount: [''],
      AmountType: ['']
    })
  }

  onSubmit() {
    console.log("Submitted")
    this.submitted = true;
    if (!this.editSpecForm.valid) {
      return false;
      //TODO: Send back feedback on false data
      window.location.reload();
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.specService.updateSpec(id, this.editSpecForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-spec');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
