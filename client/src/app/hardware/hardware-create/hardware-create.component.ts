import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardwareApiService } from '../../service/hardware-api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-hardware-create',
  templateUrl: './hardware-create.component.html',
  styleUrls: ['./hardware-create.component.css']
})
export class HardwareCreateComponent implements OnInit {
  submitted = false;
  hardwareForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private HardwareApiService: HardwareApiService
  ) {
    this.mainForm();
   }

  ngOnInit() {
  }

  mainForm() {
    this.hardwareForm = this.fb.group({
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
      ]]
    })
  }

  // Getter to access form control
  get myForm(){
    return this.hardwareForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    //Validate variables etc
    if(!this.hardwareForm.valid) {
      return false;
    } else {
      this.HardwareApiService.createHardware(this.hardwareForm.value).subscribe(
        (res) => {
          console.log("Hardware created");
          this.router.navigateByUrl('/list-hardware');
        }, (error) => {
          console.log(error);
        }
      )
    }
  }

}
