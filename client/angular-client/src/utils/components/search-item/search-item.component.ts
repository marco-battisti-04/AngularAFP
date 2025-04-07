import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-item',
  imports: [],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.css'
})
export class SearchItemComponent {

  @Input() item: any;

  constructor() {
    console.log(this.item);
  }
}
