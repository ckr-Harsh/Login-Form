import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from 'src/app/service/fire.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  name;
  photo;
  constructor(
    private service: FireService,
    public router: Router,
  ) {
  }



  ngOnInit() {
    this.service.isLoggedIn ?
      this.router.navigate(['demo']) :
      this.router.navigate(['signin'])

    this.photo = 'https://picsum.photos/200/300';
    setTimeout(() => {
      this.Data()
    }, 500)


  }
  Data() {
    this.name = JSON.parse(localStorage.getItem('user'));
    console.log(this.name);

  }


  SignOut() {
    this.service.SignOut();
  }
}
