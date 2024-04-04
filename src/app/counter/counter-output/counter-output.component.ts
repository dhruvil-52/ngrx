import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { stateInterface } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  // @Input() counter: any;
  // constructor() { }

  // ngOnInit(): void {
  // }
  counter: number;
  counterSubscription: Subscription;
  constructor(private store: Store<{ counter: stateInterface }>) { }

  ngOnInit(): void {
    this.counterSubscription = this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
    })
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
