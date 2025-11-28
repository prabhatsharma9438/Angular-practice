import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodo {
  isCompleted = input(false);
  el = inject(ElementRef);
  constructor() { }

  stylesEffect = effect(
    () => {
      console.log("effect called");
      if(this.isCompleted()){
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = 'green';
      this.el.nativeElement.style.color = 'white';
    }else{
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = 'white';
      this.el.nativeElement.style.color = '#000';
    }
    }
  );

  
}
