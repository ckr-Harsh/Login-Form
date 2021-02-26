import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FireService } from 'src/app/service/fire.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  name:string;
  constructor(
    private service : FireService,
    private Auth:AngularFireAuth,
    public ngZone:NgZone,
    public router: Router,
    ) {
   }
   

    
  ngOnInit(){
    this.service.isLoggedIn();
    let data = localStorage.getItem('fname');
     this.name=data.trim()  
  }

  SignOut(){
    this.service.SignOut();
    localStorage.setItem('fname',null);
  }
}
