import { Component, OnInit } from '@angular/core';
import { HeaderItemComponent } from '../../utils/components/header-item/header-item.component';

@Component({
  selector: 'app-filmlibrarypage',
  standalone: true,
  imports: [
    HeaderItemComponent
  ],
  templateUrl: './filmlibrarypage.component.html',
  styleUrl: './filmlibrarypage.component.css'
})
export class FilmlibrarypageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
