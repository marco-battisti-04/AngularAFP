import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { HeaderItemComponent } from '../../utils/components/header-item/header-item.component';
import { ActivatedRoute } from '@angular/router';
import { SearchItemComponent } from '../../utils/components/search-item/search-item.component';
import { ApiInteractionsService } from '../../services/api-interactions.service';

@Component({
  selector: 'app-filmlibrarypage',
  standalone: true,
  imports: [
    HeaderItemComponent,
    SearchItemComponent,
  ],
  templateUrl: './filmlibrarypage.component.html',
  styleUrl: './filmlibrarypage.component.css'
})
export class FilmlibrarypageComponent implements OnInit {

  readonly route = inject(ActivatedRoute); // Injecting the ActivatedRoute service to access route parameters
  readonly apiService = inject(ApiInteractionsService); // Injecting the ApiInteractionsService to interact with the API

  search_placeholder: string = 'Cerca nella libreria ...'; // Placeholder for the search bar
  search_link: string = '/library'; // Link for the search bar
  search_content: string = ''; // Search content

  library_items = signal<any[]>([]); // Library items list

  constructor() { }

  ngOnInit(): void {
    this.loadPage(); // Load the page when the component is initialized
  }

  /**
   * Load the page with the library items
   */
  loadPage() {
    this.route.params.subscribe(params => {
      let query = params['query'] || '';
      this.search_content = query;

      this.apiService.getLibrary(query).subscribe(response => {
        this.library_items.set(response);
      });
    });

  }
}
