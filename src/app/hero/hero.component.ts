import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  heroesList = [
    {
      id: 1,
      name: 'Iron man',
    },
    {
      id: 2,
      name: 'Hulk',
    },
    {
      id: 3,
      name: 'Spider man',
    },
    {
      id: 4,
      name: 'Black panter',
    },
    {
      id: 5,
      name: 'Captain america',
    },
    {
      id: 6,
      name: 'Batman',
    },
    {
      id: 7,
      name: 'Flash',
    },
    {
      id: 8,
      name: 'Mr nobody',
    },
  ];
}