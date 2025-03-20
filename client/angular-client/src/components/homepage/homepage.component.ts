import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HomeSelectionItemComponent } from '../../utils/components/home-selection-item/home-selection-item.component';

@Component({
  selector: 'app-homepage',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HomeSelectionItemComponent,
    ButtonModule,
    InputTextModule
  ],
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  readonly router = inject(Router);
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
  // first_row_list: any[] = ["consigliati","libreria","preferiti"];
  // second_row_list: any[] =["da vedere", "impostazioni"];

  hero_text: string = 'IL TUO CATALOGO PERSONALE';

  search_text: string = '';
  form!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      search_text: new FormControl('')
    });
  }

  search() {
    let value = this.search_text.trim();

    if (value != '') {
      this.router.navigate(['/search', this.search_text]);
    }
  }
}
