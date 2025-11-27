import { Component, signal } from '@angular/core';
import { Greetings } from '../components/greetings/greetings';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greetings , Counter],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  keyUpHandler(event : KeyboardEvent){
    console.log(event.key);
    console.log(event.target);
  }

 message = signal("Hello From Home");
}
