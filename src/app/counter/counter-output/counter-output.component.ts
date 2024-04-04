import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { stateInterface } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  // @Input() counter: any;
  // constructor() { }

  // ngOnInit(): void {
  // }
  counter: number;
  constructor(private store: Store<{ counter: stateInterface }>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
    })
  }
}
