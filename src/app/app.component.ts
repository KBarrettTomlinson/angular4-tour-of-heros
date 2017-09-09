import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: ` <h1>{{title}}</h1>
              <h2>{{hero.name}} details!</h2>
              <h3>Super Secret ID: {{hero.id}}`,
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
