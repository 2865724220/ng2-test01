import { Component, Input } from '@angular/core';

import { Hero } from './hero';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'AngularJs2';
  heros = Heros;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}



const Heros: Hero[] = [
  {id: 1, name: 'test01'},
  {id: 2, name: 'test02'},
  {id: 3, name: 'test03'},
  {id: 4, name: 'test04'},
  {id: 5, name: 'test05'},
  {id: 6, name: 'test06'},
  {id: 7, name: 'test07'},
  {id: 8, name: 'test08'},
  {id: 9, name: 'test09'},
  {id: 10, name: 'test010'}
];
