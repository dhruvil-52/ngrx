import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { decrement, increment, reset } from 'src/app/counter/state/counter.actions';
import { counterInterface } from 'src/app/counter/state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent implements OnInit {

  // @Output() increment = new EventEmitter<any>();
  // @Output() decrement = new EventEmitter<any>();
  // @Output() reset = new EventEmitter<any>();

  // ngOnInit(): void { }

  // onIncrement() {
  //   this.increment.emit()
  // }

  // onDecrement() {
  //   this.decrement.emit()
  // }

  // onReset() {
  //   this.reset.emit()
  // }
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void { }

  onIncrement() {
    this.store.dispatch(increment())
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }

  onReset() {
    this.store.dispatch(reset())
  }
}
