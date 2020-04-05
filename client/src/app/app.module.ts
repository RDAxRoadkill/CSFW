import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//TODO: Verify with https://gitlab.com/avans-informatica-breda/programmeren/clientside-frameworks/angular-gitlab-heroku/blob/master/src/app/app.module.ts

import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app-routing.module';

//Services
import { HardwareApiService } from './service/hardware-api.service';
import { SpecService } from './service/spec.service';
import { SubscriptionService } from './service/subscription.service';

//Helpers
import { Interceptor } from './_helpers/interceptor';

//Added components 
import { UsecasesComponent } from './about/usecases/usecases.component';
import { UsecaseComponent } from './about/usecases/usecase/usecase.component';
import { HardwareCreateComponent } from './hardware/hardware-create/hardware-create.component';
import { HardwareListComponent } from './hardware/hardware-list/hardware-list.component';
import { LoginComponent } from './login/login.component';
import { HardwareEditComponent } from './hardware/hardware-edit/hardware-edit.component';
import { RegisterComponent } from './register/register.component';
import { SpecListComponent } from './spec/spec-list/spec-list.component';
import { SpecCreateComponent } from './spec/spec-create/spec-create.component';
import { SpecEditComponent } from './spec/spec-edit/spec-edit.component';
import { SubscriptionCreateComponent } from './subscription/subscription-create/subscription-create.component';
import { SubscriptionEditComponent } from './subscription/subscription-edit/subscription-edit.component';
import { SubscriptionListComponent } from './subscription/subscription-list/subscription-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    UsecasesComponent,
    UsecaseComponent, 
    HardwareCreateComponent,
    HardwareListComponent,
    LoginComponent,
    HardwareEditComponent,
    RegisterComponent,
    SpecListComponent,
    SpecCreateComponent,
    SpecEditComponent,
    SubscriptionCreateComponent,
    SubscriptionEditComponent,
    SubscriptionListComponent,
    UserListComponent,
    UserEditComponent,
    ClientListComponent,
    ClientCreateComponent,
    ClientEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    HardwareApiService,
    SpecService,
    SubscriptionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
