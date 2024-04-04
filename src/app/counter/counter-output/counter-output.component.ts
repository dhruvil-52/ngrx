import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

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
  constructor(private store: Store<{ state: any }>) { }

  ngOnInit(): void {
    this.store.select('state').subscribe((data) => {
      this.counter = data.counter;
    })
  }
}
