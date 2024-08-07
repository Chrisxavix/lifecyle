import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  constructor() {
    console.log("Price constructor");
  }

  ngOnInit(): void {
    console.log("Price ngOnInit");
    this.interval$ = interval(1000).subscribe(value => console.log(`Tick: ${value}`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Price changes ", {changes});
    console.log("Price ngOnChanges");
  }

  ngOnDestroy(): void {
    console.log("Price ngOnDestroy");
    this.interval$?.unsubscribe();
  }

}
