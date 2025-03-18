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
  image_link: string = "/assets/images/library_bg.jpg";

  constructor () { }


  ngOnInit(): void {
     this.item = this.item.toUpperCase()
      console.log(this.item);
  }
}
