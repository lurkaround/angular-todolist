import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
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
