import { Injectable, NgZone } from '@angular/core';
import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FireService {
  name: any;
  photo: any;
  User: firebase.User;

  constructor(
    private Auth: AngularFireAuth,
    private fireStore: AngularFirestore,
    public router: Router,
    public ngZone: NgZone,
    public afs: AngularFirestore
  ) {
    this.Auth.authState.subscribe((res) => {
      if (res) {
        this.User = res;
        localStorage.setItem('user', JSON.stringify(this.User));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Previous Signup Method
  SignUp(data: any) {
    this.Auth.createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: `${data.fname}`,
        });
        data.UserId = res.user.uid;
        data.IsDeleted = false;
        this.fireStore.doc(`users/${res.user.uid}`).set(data);

        this.router.navigate(['auth']);
      })
      .catch((err) => {
        // console.log('Something went wrong:', err.message);
        alert(err.code);
      });
  }

  //Sign In
  SignIn(email: string, password: string) {
    return this.Auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.router.navigate(['dashboard']);
      })
      .catch((err) => {
        // console.log('Something went wrong', err);
        alert(err.message);
      });
  }

  //Sign Out
  SignOut() {
    this.Auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['auth']);
  }

  //Check if user logged in or not
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? true : false;
  }

  //Sign in with google
  GoogleAuth() {
    return this.Auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        res
          ? this.router.navigate(['dashboard'])
          : console.error('Something went wrong');
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}
