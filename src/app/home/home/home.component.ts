import { Component, OnInit } from '@angular/core';
import { FireService } from 'src/app/service/fire.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name!: any;
  photo!: any;
  constructor(private service: FireService) {}

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
}
