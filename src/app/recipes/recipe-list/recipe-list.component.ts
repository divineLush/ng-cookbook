import { Component, OnInit } from '@angular/core';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'test',
      description: 'desc',
      imagePath: 'https://images.unsplash.com/photo-1622130557958-f380d617a4ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      name: 'test2',
      description: 'desc2',
      imagePath: 'https://images.unsplash.com/photo-1622130557958-f380d617a4ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      name: 'test2',
      description: 'desc2',
      imagePath: 'https://images.unsplash.com/photo-1622130557958-f380d617a4ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
