import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './AdminPortal/AdminComponent/DashBoard/dash-board/dash-board.component';
import { AdminComponent } from './AdminPortal/AdminModule/admin/admin.component';
import { HomeComponent } from './MainPortal/home/home.component';
import { AdminLoginComponent } from './MainPortal/Management/AdminManagement/admin-login/admin-login.component';
import { AdminRegisterationComponent } from './MainPortal/Management/AdminManagement/admin-registeration/admin-registeration.component';
import { UserLoginComponent } from './MainPortal/Management/UserManagement/user-login/user-login.component';
import { UserRegisterationComponent } from './MainPortal/Management/UserManagement/user-registeration/user-registeration.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'al',component:AdminLoginComponent},
  {path:'ar',component:AdminRegisterationComponent},
  {path:'ul',component:UserLoginComponent},
  {path:'ur',component:UserRegisterationComponent},
  {path:'admin',component:AdminComponent,
  children:[
    {path:'',component:DashBoardComponent},
    {path:'dashboard',component:DashBoardComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
