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

  readonly apiService = inject(ApiInteractionsService);
  readonly router = inject(Router);

  @Input() inputItem: any;
  @Input() search: boolean = false;
  item: any;

  image_link = `/assets/images/no-poster.jpg`;
  background_link = `/assets/images/no-background.jpg`;
  genres_list = signal<string[]>([]);

  image_url = environment.image_url;
  pipedDate = new Date();

  constructor() { }

  ngOnInit(): void {
    this.item = this.inputItem;

    this.background_link = `${this.image_url}${this.item.backdrop_path}`;
    this.image_link = `${this.image_url}${this.item.poster_path}`;
    this.item.title = this.item.title.toUpperCase();
    this.pipedDate = new Date(this.item.release_date);

    // TODO: implement getGenres
    // this.apiService.getGenres(this.item.genres_ids).subscribe((response: any) => {
    //   this.genres_list.set(response.genres.map((genre: any) => genre.name));
    // });
  }

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


  addToLibrary() {
    console.log(this.item);
    this.apiService.addToLibrary(this.item).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/library']);
    });
  }

  removeFromLibrary() {
    console.log(this.item);
    this.apiService.removeFromLibrary(this.item).subscribe((response) => {
      console.log(response);
      // this.router.navigate(['/library']);

      window.location.reload();
    });
  }

}
