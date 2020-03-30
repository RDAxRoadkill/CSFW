import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators  } from "@angular/forms";
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  submitted = false;
  userEditForm: FormGroup;
  userData: User[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateUser();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getUser(id);
    this.userEditForm = this.fb.group({
      Username: ['', [Validators.required]],
      Firstname: [''],
      Lastname: ['']
    })
  }

  // Getter to access form control
  get myForm(){
    return this.userEditForm.controls;
  }

  getUser(id) {
    this.userService.getUser(id).subscribe(data =>{
      this.userEditForm.setValue({
        Username: data['Username'],
        Firstname: data['Firstname'],
        Lastname: data['Lastname']
      })
    })
  }

  updateUser(){
    this.userEditForm = this.fb.group({
      Username: ['', [Validators.required]],
      Firstname: [''],
      Lastname: [''] 
    })
  }

  onSubmit() {
    console.log("Submitted")
    this.submitted = true;
    if (!this.userEditForm.valid) {
      return false;
      //TODO: Send back feedback on false data
      window.location.reload();
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.userService.updateUser(id, this.userEditForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-user');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }



}
