import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; //Import for routing functionality

//Components etc
import { UsecasesComponent } from './about/usecases/usecases.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
//Hardware components
import { HardwareCreateComponent } from './hardware/hardware-create/hardware-create.component';
import { HardwareListComponent } from './hardware/hardware-list/hardware-list.component';
import { HardwareEditComponent } from './hardware/hardware-edit/hardware-edit.component';
//Spec components
import { SpecCreateComponent } from './spec/spec-create/spec-create.component';
import { SpecListComponent } from './spec/spec-list/spec-list.component';
import { SpecEditComponent } from './spec/spec-edit/spec-edit.component';
//Subscription components
import { SubscriptionCreateComponent } from './subscription/subscription-create/subscription-create.component';
import { SubscriptionEditComponent } from './subscription/subscription-edit/subscription-edit.component';
import { SubscriptionListComponent } from './subscription/subscription-list/subscription-list.component';
//User components
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
//Helpers
import { Guard } from './_helpers/guard';

//Components we can navigate to
const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: UsecasesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //Hardware routes
  { path: 'list-hardware', component: HardwareListComponent},
  { path: 'create-hardware', component: HardwareCreateComponent, canActivate: [Guard] },
  { path: 'edit-hardware/:id', component: HardwareEditComponent, canActivate: [Guard] },
  //Spec routes
  { path: 'list-spec', component: SpecListComponent},
  { path: 'create-spec', component: SpecCreateComponent, canActivate: [Guard] },
  { path: 'edit-spec/:id', component: SpecEditComponent, canActivate: [Guard] },
  //Subscription routes
  { path: 'list-subscription', component: SubscriptionListComponent},
  { path: 'create-subscription', component: SubscriptionCreateComponent, canActivate: [Guard] },
  { path: 'edit-subscription/:id', component: SubscriptionEditComponent, canActivate: [Guard] },
  //User routes
  { path: 'list-user', component: UserListComponent},
  { path: 'edit-user/:id', component: UserEditComponent, canActivate: [Guard]}, //TODO: Upgrade to only allow specific user to edit their details
  //CatchAll
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
