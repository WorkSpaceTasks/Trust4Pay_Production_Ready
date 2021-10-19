import { AdminModule } from './AdminPortal/AdminModule/admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './MainPortal/Management/AdminManagement/admin-login/admin-login.component';
import { AdminRegisterationComponent } from './MainPortal/Management/AdminManagement/admin-registeration/admin-registeration.component';
import { UserRegisterationComponent } from './MainPortal/Management/UserManagement/user-registeration/user-registeration.component';
import { UserLoginComponent } from './MainPortal/Management/UserManagement/user-login/user-login.component';
import { HomeComponent } from './MainPortal/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminRegisterationComponent,
    UserRegisterationComponent,
    UserLoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
