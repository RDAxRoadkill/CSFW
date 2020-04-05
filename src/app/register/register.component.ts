import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({ templateUrl: './register.component.html' })
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private registerService: RegisterService
  ) {  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          Username: ['', [
          Validators.required,
          Validators.email
          ]],
          Password: ['', [
            Validators.required,
            Validators.minLength(3)
          ]],
          Firstname: ['', Validators.required],
          Lastname: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;
    //Validate variables etc
    if(!this.registerForm.valid) {
      console.log("Make sure all is valid");
      return false;
    } else {
      console.log(this.registerForm.value)
      this.registerService.createUser(this.registerForm.value).subscribe(
        (res) => {
          console.log("User created");
          this.router.navigateByUrl('/list-user');
        }, (error) => {
          console.log(error);
        }
      )
    }
  }

}
