import { Component, OnInit } from '@angular/core';
import { Shop } from '../../entities/shop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shops= [
    {
      "id": 1,
      "distance": 545.21,
      "name": "shop1"
    },
    {
      "id": 1,
      "distance": 545.21,
      "name": "shop1"
    },
    {
      "id": 1,
      "distance": 545.21,
      "name": "shop1"
    },
    {
      "id": 1,
      "distance": 545.21,
      "name": "shop1"
    },
    {
      "id": 1,
      "distance": 545.21,
      "name": "shop1"
    },
    {
      "id": 1,
      "distance": 545.21,
      "name": "shop1"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
