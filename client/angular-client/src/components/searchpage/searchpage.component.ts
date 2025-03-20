import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderItemComponent } from '../../utils/components/header-item/header-item.component';

@Component({
  selector: 'app-searchpage',
  standalone: true,
  imports: [
    HeaderItemComponent
  ],
  templateUrl: './searchpage.component.html',
  styleUrl: './searchpage.component.css'
})
export class SearchpageComponent implements OnInit {

  query:string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query = params['query'];
    });

    console.log(this.query)
  }
}
