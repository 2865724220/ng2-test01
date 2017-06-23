import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { HeroService } from './hero.service';
import {Hero} from './hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./app.component.css']
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}




