import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` 
  <h3>Counter: {{ counter }}</h3>
  <div>
    <button (click)="increment(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increment(-1)">-1</button>
  </div> 
`
})
export class CounterComponent {
  counter = 0;

  increment(value: number){
    this.counter += value;
  }

  reset(){
    this.counter = 0;
  }
}
