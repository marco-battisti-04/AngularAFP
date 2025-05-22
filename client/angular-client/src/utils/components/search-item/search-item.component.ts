import { DatePipe } from '@angular/common';
import { Component, inject, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ApiInteractionsService } from '../../../services/api-interactions.service';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  imports: [
    DatePipe,
    ButtonModule,
  ],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.css'
})
export class SearchItemComponent implements OnChanges, OnInit {

  readonly apiService = inject(ApiInteractionsService); // Injecting the ApiInteractionsService to interact with the API
  readonly router = inject(Router); // Injecting the Router service to navigate between routes

  @Input() inputItem: any; // Input property to receive the item data
  @Input() search: boolean = false; // Input property to check if the item is from search results 
  item: any; // Variable to hold the item data

  image_link = `/assets/images/no-poster.jpg`; // Default image link
  background_link = `/assets/images/no-background.jpg`; // Default background link
  genres_list = signal<string[]>([]); // FIXME: implement this - Signal to hold the genres list

  image_url = environment.image_url; // Base URL for images
  pipedDate = new Date(); // Variable to hold the formatted date

  constructor() { }

  ngOnInit(): void {

    this.item = this.inputItem;

    // set all the datas
    this.background_link = `${this.image_url}${this.item.backdrop_path}`;
    this.image_link = `${this.image_url}${this.item.poster_path}`;
    this.item.title = this.item.title.toUpperCase();
    this.pipedDate = new Date(this.item.release_date);

    // TODO: implement getGenres
    // this.apiService.getGenres(this.item.genres_ids).subscribe((response: any) => {
    //   this.genres_list.set(response.genres.map((genre: any) => genre.name));
    // });
  }

  /**
   * Looks for changes in the inputItem property
   * and updates the item data accordingly.
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputItem']) {
      this.item = changes['inputItem'].currentValue;

      this.background_link = `${this.image_url}${this.item.backdrop_path}`;
      this.image_link = `${this.image_url}${this.item.poster_path}`;
      this.item.title = this.item.title.toUpperCase();
      this.pipedDate = new Date(this.item.release_date);
    }
  }

  detail() {
    let endpoint = "/library/details"
    if ( this.search ) {
      return;
      // endpoint = "/search/details"
    }
    this.router.navigate([endpoint, this.item.id]);
  }

  /**
   * Adds the item to the library.
   */
  addToLibrary() {
    this.apiService.addToLibrary(this.item).subscribe((response) => {
      this.router.navigate(['/library']);
    });
  }

  /**
   * Removes the item from the library.
   */
  removeFromLibrary() {
    this.apiService.removeFromLibrary(this.item).subscribe((response) => {
      // this.router.navigate(['/library']);
      window.location.reload(); // FIXME: reimplemement this
    });
  }
}
