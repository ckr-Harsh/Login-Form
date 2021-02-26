import { Component, OnInit } from '@angular/core';
import {  Validators,FormControl,FormGroup } from '@angular/forms';
import { FireService } from 'src/app/service/fire.service';
import { Custom } from './Validator';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    Email:string;
    Password:string;

  form = new FormGroup({
    fname: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    lname: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    email:new FormControl('',[
      Validators.required,
      Validators.email,
      Validators.minLength(5),
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6),

    ]),
    confirmPass: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
    ]),
  },{
    validators:Custom.Match,
  })
  
  get fname(){
    return this.form.get('fname');
  }
  get lname(){
    return this.form.get('lname');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
    
  }
  get confirmPass(){
    return this.form.get('confirmPass');
  }
  ngOnInit(){
    console.log(this.form.value);
  }
 
  constructor(private authService:FireService){

  }

  SignUp(email,password) {
    localStorage.setItem('fname',JSON.stringify(this.form.get('fname').value));
    localStorage.setItem('lname',JSON.stringify(this.form.get('lname').value));
    this.authService.SignUp(email, password);
    }


}
