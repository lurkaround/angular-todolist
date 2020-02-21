import { Component, OnInit } from '@angular/core';
import Todo from "../../models/Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: "To-do One",
        completed: true
      },
      {
        id: 2,
        title: "To-do Two",
        completed: true
      },
      {
        id: 3,
        title: "To-do Three",
        completed: false
      },
    ]

  }

}
