import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customerIncrement } from 'src/app/state/counter.actions';
import { stateInterface } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent {
  num: number;

  constructor(private store: Store<{ counter: stateInterface }>) {

  }

  onBtnClick() {
    this.store.dispatch(customerIncrement({ num: this.num }))
  }
}
