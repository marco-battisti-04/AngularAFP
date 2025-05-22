import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HomeSelectionItemComponent } from '../../utils/components/home-selection-item/home-selection-item.component';
import { HeaderItemComponent } from '../../utils/components/header-item/header-item.component';
import { SearchBarItemComponent } from '../../utils/components/search-bar-item/search-bar-item.component';

@Component({
  selector: 'app-homepage',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HomeSelectionItemComponent,
    SearchBarItemComponent,
    ButtonModule,
    InputTextModule
  ],
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  // Header items
  hero_text: string = 'IL TUO CATALOGO PERSONALE'; // Title of the page
  header_placeholder: string = "Cerca un film ..."; // Placeholder for the search bar
  header_link: string = "/search"; // Link for the search bar

  // rows list for the buttons
  first_row_list: any[] = [
    {
      "title": "consigliati",
      "url": "/recommended"
    },
    {
      "title": "libreria",
      "url": "/library"
    },
    {
      "title": "preferiti",
      "url": "/favourites"
    }
  ]

  second_row_list: any[] = [
    {
      "title": "da vedere",
      "url": "/watchlist"
    },
    {
      "title": "impostazioni",
      "url": "/settings"
    }
  ]

  constructor() { }
  ngOnInit() { }
}
