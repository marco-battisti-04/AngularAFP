import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search-bar-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './search-bar-item.component.html',
  styleUrl: './search-bar-item.component.css'
})
export class SearchBarItemComponent {

  @Input() placeholder: string = 'Cerca un film ...';
  @Input() link: string = '';
  @Input() content: string = '';
  @Input() enableNull: boolean = false;


  readonly router = inject(Router);
  search_text: string = '';
  form!: FormGroup;

  constructor () {}

  ngOnInit(): void {

    this.search_text = this.content;

    this.form = new FormGroup({
      search_text: new FormControl('')
    });
  }

  search() {
    let value = this.search_text.trim();

    if (value != '') {
      this.router.navigate([this.link, this.search_text]);
    } else if (this.enableNull == true){
      this.router.navigate([this.link]);
    }
  }
}
