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

  readonly route = inject(ActivatedRoute);
  readonly apiService = inject(ApiInteractionsService);

  search_placeholder: string = 'Cerca nella libreria ...';
  search_link: string = '/library';
  search_content: string = '';

  library_items = signal<any[]>([]);

  constructor() {
  }

  ngOnInit(): void {
    this.loadpage();
  }

  loadpage() {
    this.route.params.subscribe(params => {
      let query = params['query'] || '';
      this.search_content = query;

      this.apiService.getLibrary(query).subscribe(response => {
        this.library_items.set(response);
        console.log(this.library_items())
      });
    });

  }
}
