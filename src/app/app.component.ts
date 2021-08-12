import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  seconds = 0;
  counterSubscription!: Subscription;
  constructor() {}
  ngOnInit() {
    const counter = interval(1000);
    const counterSubscription = counter.subscribe(
      (value) => (this.seconds = value)
    );
  }
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
