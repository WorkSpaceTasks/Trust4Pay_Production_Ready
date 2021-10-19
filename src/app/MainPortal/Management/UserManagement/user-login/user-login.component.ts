import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  MyForm: FormGroup | any;
  constructor(
    private _FormBuilder : FormBuilder
  ) {
    this.MyFormModel();
   }

  ngOnInit(): void {
  }

  MyFormModel() {
    this.MyForm = this._FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    });
  }

  UserLogin(){}
}
