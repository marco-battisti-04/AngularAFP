import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-selection-item',
  imports: [

  ],
  standalone: true,
  templateUrl: './home-selection-item.component.html',
  styleUrl: './home-selection-item.component.css'
})
export class HomeSelectionItemComponent implements OnInit {

  @Input() item: any;

  constructor () { }

  ngOnInit(): void {
      console.log(this.item);
  }
}
