import { Component, input, output } from '@angular/core';
import { todo } from '../../model/todo';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodo , UpperCasePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem {
  todo = input.required<todo>();

  todoToggled = output<todo>();

  todoClicked(){
    this.todoToggled.emit( this.todo() );
  }
}
