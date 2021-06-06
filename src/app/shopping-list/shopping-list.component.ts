import { Component, OnInit } from '@angular/core';

import Ingridient from '../shared/indrigient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[] = [
    {
      name: 'Apple',
      amount: 2,
    },
    {
      name: 'Tomato',
      amount: 5,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngridientAdded(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
  }
}
