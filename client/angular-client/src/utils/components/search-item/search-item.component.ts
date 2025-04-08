import { Component, input, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-item',
  imports: [],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.css'
})
export class SearchItemComponent implements OnChanges, OnInit {

  @Input() inputItem: any;
  item: any;

  constructor() { }

  ngOnInit(): void {
    this.item = this.inputItem;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputItem']) {
      this.item = changes['inputItem'].currentValue;
    }
  }
}
