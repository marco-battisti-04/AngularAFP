import { Component, inject, OnInit } from '@angular/core';
import { HeaderItemComponent } from '../../utils/components/header-item/header-item.component';
import { ActivatedRoute } from '@angular/router';
import { SearchItemComponent } from '../../utils/components/search-item/search-item.component';
import { ApiInteractionsService } from '../../services/api-interactions.service';

@Component({
  selector: 'app-filmlibrarypage',
  standalone: true,
  imports: [
    HeaderItemComponent,
    SearchItemComponent
  ],
  templateUrl: './filmlibrarypage.component.html',
  styleUrl: './filmlibrarypage.component.css'
})
export class FilmlibrarypageComponent implements OnInit {

  readonly route = inject(ActivatedRoute);
  readonly apiService = inject(ApiInteractionsService);

  search_placeholder: string = 'Cerca nella libreria ...';
  search_link: string = '/library';
  search_content: string = '';

  library_items: any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  constructor() { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let query = params['query'] || '';
      this.search_content = query;

      console.log("query:" + query)
      this.getLibrary(query);
    });
  }

  getLibrary(query: string) {
    query = query.trim();
    if (query != "") {
      this.apiService.getLibrary(query);
      // not empty
    } else {
      // empty
    }
  }
}
