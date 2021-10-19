import { NavigationStart, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testingui';
  showHead = true;
  showFoot = true;
  constructor(private _Router:Router) {
    _Router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (
          // event.url == '/admin' || 
          // event.url == '/admin/CreateCard' || 
          // event.url == '/admin/CardAnalytics' || 
          // event.url == '/admin/dashboard'|| 
          // event.url == '/admin/CreateFeatureCard' || 
          // event.url == '/admin/UserManagement' ||
          // event.url =='/admin/Settings' || 
          // event.url =='/admin/FeatureCardAnalytics' || 
          // event.url == '/superAdmin' || 
          // event.url == '/superAdmin/dummy' ||
          // event.url == '/user' ||
          // event.url == '/user/userDashboard'
          event.url.startsWith("/admin") ||
          event.url.startsWith("/admin/") ||
          event.url.startsWith('/user') ||
          event.url.startsWith('/user/')
          ) { this.showHead = false; this.showFoot = false; } else {
            this.showHead = true;
            this.showFoot = true;
          }
      }
    });
  }

  GoToUserLogin(){
    this._Router.navigate(['ul']);
  }

  GoToUserRegister(){
    this._Router.navigate(['ur']);
  }

  GoToHome(){
    this._Router.navigate(['home'])
  }

  GoToAdminDashBoard(){
    this._Router.navigate(['admin']);
  }
}
