import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent implements OnInit {

  @Output() increment = new EventEmitter<any>();
  @Output() decrement = new EventEmitter<any>();
  @Output() reset = new EventEmitter<any>();

  ngOnInit(): void { }

  onIncrement() {
    this.increment.emit()
  }

  onDecrement() {
    this.decrement.emit()
  }

  onReset() {
    this.reset.emit()
  }
}
