import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderItemComponent } from '../../utils/components/header-item/header-item.component';
import { ApiInteractionsService } from '../../services/api-interactions.service';

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

  readonly route = inject(ActivatedRoute);
  readonly apiService = inject(ApiInteractionsService);

  search_placeholder: string = 'Cerca un film ...';
  search_link: string = '/search';
  search_content: string = '';

  films_items = signal<any[]>([]);

  constructor( ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let query = params['query'] || '';
      this.search_content = query;

      this.apiService.search(query).subscribe(response => {
        this.films_items.set(response);
        console.log(this.films_items());
      })
    });
  }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     let query = params['query'] || '';
  
  //     this.apiService.getLibrary(query).subscribe(response => {
  //       this.library_items.set(response);
  //       console.log(this.library_items())
  //     });
  //   });
  // }
}
