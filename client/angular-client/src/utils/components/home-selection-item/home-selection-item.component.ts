import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-selection-item',
  imports: [

  ],
  standalone: true,
  templateUrl: './home-selection-item.component.html',
  styleUrl: './home-selection-item.component.css'
})
export class HomeSelectionItemComponent implements OnInit {

  readonly router = inject(Router);

  @Input() item: any;
  image_link: string = "/assets/images/library_bg.jpg";

  constructor () { }


  ngOnInit(): void {
    this.item.title = this.item.title.toUpperCase()
    console.log(this.item);
  }

  redirect() {
    this.router.navigate([this.item.url]);
  }
}
