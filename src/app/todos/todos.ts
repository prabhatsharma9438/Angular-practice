import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todosService';
import { todo } from '../model/todo';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<todo>>([]);

  ngOnInit(): void {
    this.todoService.getTodosFromApi().pipe(
      catchError( (err) => {
        console.log("error printed through pipe", err, err.message);
        throw err;
      } )
    ).subscribe( (Todos) => {
      this.todoItems.set(Todos);
    } )
  }
}
