import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <!-- Testing a comment -->
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  };
}
export class Hero {
  id: number;
  name: string;
}
