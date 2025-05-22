import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderItemComponent } from '../../utils/components/header-item/header-item.component';
import { ApiInteractionsService } from '../../services/api-interactions.service';
import { SearchItemComponent } from '../../utils/components/search-item/search-item.component';

@Component({
  selector: 'app-searchpage',
  standalone: true,
  imports: [
    HeaderItemComponent,
    SearchItemComponent
  ],
  templateUrl: './searchpage.component.html',
  styleUrl: './searchpage.component.css'
})
export class SearchpageComponent implements OnInit {

  readonly route = inject(ActivatedRoute); // Injecting the ActivatedRoute service to access route parameters
  readonly apiService = inject(ApiInteractionsService); // Injecting the ApiInteractionsService to interact with the API

  search_placeholder: string = 'Cerca un film ...'; // Placeholder for the search bar
  search_link: string = '/search'; // Link for the search bar
  search_content: string = ''; // Search content

  films_items = signal<any[]>([]); // Films list

  constructor( ) { }

  ngOnInit(): void {
    this.loadPage(); // calls the page loading
  }

  /**
   * Loads the page with the search results
   * based on the query parameter.
   */
  loadPage(): void {
    this.route.params.subscribe(params => {
      let query = params['query'] || '';
      this.search_content = query;

      this.apiService.search(query).subscribe(response => {
        this.films_items.set(response);
      })
    });
  }
}
