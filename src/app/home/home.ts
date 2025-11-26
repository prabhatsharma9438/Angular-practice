import { Component, signal } from '@angular/core';
import { Greetings } from '../components/greetings/greetings';

@Component({
  selector: 'app-home',
  imports: [Greetings],
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
