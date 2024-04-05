import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { customerIncrement } from 'src/app/counter/state/counter.actions';
import { counterInterface } from 'src/app/counter/state/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent {
  num: number;

  constructor(private store: Store<AppState>) {

  }

  onBtnClick() {
    this.store.dispatch(customerIncrement({ num: this.num }))
  }
}
