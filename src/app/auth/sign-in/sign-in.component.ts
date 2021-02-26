import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { FireService } from 'src/app/service/fire.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {
  
  form=new FormGroup({
    Email:new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    Pass:new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ])
  });

  get Email(){
    return this.form.get('Email');
  }
  get Pass(){
    return this.form.get('Pass');
  }


  constructor(private authService:FireService,public router:Router,public ngZone: NgZone){}



    SignIn(email,password) {
      console.log(email);
      console.log(password);
      this.authService.SignIn(email, password);
      email = '';
      password = '';
    }

    signWithGoogle(){
      this.authService.GoogleAuth();
    }


    goToHome(){
      this.ngZone.run(()=>{
      this.router.navigate(['signup'])
      })
      console.log('event');
      
    }
}
