import { Component, OnInit } from '@angular/core';
import { Hardware } from '../../model/hardware';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators  } from "@angular/forms";
import { HardwareApiService } from '../../service/hardware-api.service';

import { SpecService } from '../../service/spec.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-hardware-edit',
  templateUrl: './hardware-edit.component.html',
  styleUrls: ['./hardware-edit.component.css']
})
export class HardwareEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  hardwareData: Hardware[];
  Specifications: any = [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private hardwareApiService: HardwareApiService,
    private router: Router,
    private specService: SpecService
  ) {
    this.updateHardware();
   }

  ngOnInit() {
    this.updateHardware();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getHardware(id);
    this.getSpec();
  }
  // Getter to access form control
  get myForm(){
    return this.editForm.controls;
  }

  getHardware(id) {
    this.hardwareApiService.getHardware(id).subscribe(data => {
      this.editForm.setValue({
        Name: data['Name'],
        ClientCapacity: data['ClientCapacity'],
        ClientsSupported: data['ClientsSupported'],
        Specifications: ['']
      });
    });

    of(this.getSpec()).subscribe(Specifications => {
      this.Specifications = Specifications
    });
  }

  getSpec() {
    this.specService.getSpecs().subscribe((data) => {
      this.Specifications = data;
    })
  }

  updateHardware() {
    this.editForm = this.fb.group({
      Name: ['', [
        Validators.required, 
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      ClientCapacity: ['', [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]],
      ClientsSupported: ['', [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]],
      Specifications: ['', [
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
        this.hardwareApiService.updateHardware(id, this.editForm.value)
          .subscribe(res => {
            //this.router.navigateByUrl('/list-hardware');
            console.log('Content updated successfully!')
            console.log(this.editForm.value)
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
