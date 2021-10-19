import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-registeration',
  templateUrl: './admin-registeration.component.html',
  styleUrls: ['./admin-registeration.component.css']
})
export class AdminRegisterationComponent implements OnInit {

  AdminLimit=0;
  MyForm: FormGroup | any;
  ImageUrl: any;
  constructor(private _FormBuilder: FormBuilder) { this.MyFormModel() }

  ngOnInit(): void {
  }

  MyFormModel() {
    this.MyForm = this._FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern(/^[0-9*#+]*$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      file: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onFileSelect(event:any) {
    this.ImageUrl=event.target.files[0];
    this.MyForm.get('file').setValue(this.ImageUrl);
    // to display the image on the angular
    // if (event.target.files) {
    //   var reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0]);
    //   reader.onload = (FinalData: any) => {
    //     this.ImageUrl = FinalData.target.result;
    //   }
    // }

  }

  onRegister() {}

}
