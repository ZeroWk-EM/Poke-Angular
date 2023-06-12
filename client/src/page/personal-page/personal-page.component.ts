import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css'],
})
export class PersonalPageComponent {
  name!: string;
  surname!: string;
  email!: string;

  constructor(){}

  ngOnInit() {
    this.name=String(localStorage.getItem("fullname")?.split(" ")[0]);
    this.surname=String(localStorage.getItem("fullname")?.split(" ")[1]);
    this.email=String(localStorage.getItem("email"));

  }
}
