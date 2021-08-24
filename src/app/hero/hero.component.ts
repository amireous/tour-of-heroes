import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Iron man',
  };

  heroesList: Hero[] = [
    { id: 1, name: 'Iron man' },
    { id: 2, name: 'Hulk' },
    { id: 3, name: 'Batman' },
    { id: 4, name: 'Thor' },
    { id: 5, name: 'Odin' },
    { id: 6, name: 'Captain america' },
    { id: 7, name: 'Doctor strange' },
    { id: 8, name: 'Harley queen ' },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectedHero?: Hero;

  dashboardClick() {
    document.querySelector('.heroes-section')?.classList.add('hidden');
    document.querySelector('.top-heroes')?.classList.remove('hidden');
    document.querySelector('.selected-item')?.classList.add('hidden');
  }

  displayHeroes() {
    document.querySelector('.heroes-section')?.classList.toggle('hidden');
    document.querySelector('.top-heroes')?.classList.add('hidden');
    document.querySelector('.selected-item')?.classList.add('hidden');
  }

  viewItemDetail(hero: Hero) {
    this.selectedHero = hero;
    document.querySelector('.details')?.classList.add('hidden');
    document.querySelector('.view-details-section')?.classList.remove('hidden');
    document.querySelector('.selected-item')?.classList.remove('hidden');
  }

  viewDetailBtn() {
    document.querySelector('.details')?.classList.remove('hidden');
    document.querySelector('.view-details-section')?.classList.add('hidden');
  }
}
