import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todosService';
import { todo } from '../model/todo';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';

@Component({
  selector: 'app-todos',
  imports: [TodoItem],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<todo>>([]);

  ngOnInit(): void {
    this.todoService.getTodosFromApi().pipe(
      catchError((err) => {
        console.log("error printed through pipe", err, err.message);
        throw err;
      })
    ).subscribe((Todos) => {
      this.todoItems.set(Todos);
    })
  }

  updateTodoItem(todoItem: todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo => {
        if (todo.id === todoItem.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }))
    })
  }
}
