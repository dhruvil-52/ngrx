import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getcounter } from 'src/app/state/counter.selector';
import { stateInterface } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit
// , OnDestroy
{
  // @Input() counter: any;
  // constructor() { }

  // ngOnInit(): void {
  // }
  counter: number;
  counterSubscription: Subscription;
  constructor(private store: Store<{ counter: stateInterface }>) { }

  // counter$: Observable<stateInterface>;
  // ngOnInit(): void {
  //   this.counter$ = this.store.select('counter')
  // }

  // ngOnInit(): void {
  //   this.counterSubscription = this.store.select(getcounter).subscribe((data) => {
  //     this.counter = data;
  //   })
  // }

  // ngOnDestroy(): void {
  //   if (this.counterSubscription) {
  //     this.counterSubscription.unsubscribe();
  //   }
  // }

  counter$: Observable<number>;
  ngOnInit(): void {
    this.counter$ = this.store.select(getcounter)
  }
}
