import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showSettingsList = false;
  user=1;
  FilePath:any;
  AdminName="Admin";

  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }

  LogOut(){
    this._Router.navigate(['home']);
  }
}
