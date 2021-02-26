import { Injectable, NgZone } from '@angular/core';
import firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})



export class FireService {
  user: firebase.User;

  constructor(
    private Auth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
    )
     { 
   this.Auth.authState.subscribe(res=>{
    if (res){
      this.user =res;
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      localStorage.setItem('user', null);
    }
  });
  }

 
  
  

  // Sign Up
  SignUp(email:string,password:string){
    this.Auth
    .createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.ngZone.run(()=>{
        this.router.navigate(['signin'])
      })
      console.log('SucessFully Signed up!');
      alert('Sucessfully Created your Account')
    })
    .catch(err=>{
      console.log('Something went wrong:',err.message);
      alert(err.code);
    });
  }

  //Sign In
  SignIn(email:string,password:string){
   return  this.Auth
    .signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.ngZone.run(()=>{
        this.router.navigate(['demo'])
      });
      console.log('SucessFully Logged In',res);
    })
    .catch(err=>{
      console.log('Something went wrong',err);
      alert(err.message);
    });
  }
  SignOut(){
   this.Auth.signOut();
   localStorage.removeItem('user');
   this.router.navigate(['signin']);
  }

  isLoggedIn():boolean{
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

 GoogleAuth(){
  return this.Auth
   .signInWithPopup(new firebase.auth.GoogleAuthProvider)
   .then(res=>{
    this.ngZone.run(()=>{
      this.router.navigate(['demo'])
    });
    console.log('SucessFully Logged In',res);
  })
  .catch(err=>{
    console.log('Something went wrong',err);
    alert(err.message);
  });
 }
   

  
}
