import { Injectable } from '@angular/core';
import { todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todoItems : todo[] = [
    {
      title:"groceries",
      id:1,
      completed:false,
      userId:1
    },
    {
      title:"car wash",
      id:2,
      completed:true,
      userId:2
    },
    {
      title:"cricket",
      id:3,
      completed:true,
      userId:3
    },
  ];

  
}
