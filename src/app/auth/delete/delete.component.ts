import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FireService } from 'src/app/service/fire.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  name!: any;
  photo!: any;
  constructor(private service: FireService, public router: Router) {}

  ngOnInit() {
    this.photo = 'https://picsum.photos/200/300';
    setTimeout(() => {
      this.Data();
    }, 500);
  }
  Data() {
    this.name = JSON.parse(localStorage.getItem('user'));
  }

  SignOut() {
    this.service.SignOut();
  }
  canActivate() {
    if (this.name !== null) {
      return true;
    }
    this.router.navigate(['/signin']);
    return false;
  }
}
