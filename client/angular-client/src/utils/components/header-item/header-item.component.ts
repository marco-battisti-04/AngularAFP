import { Component, inject, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SearchBarItemComponent } from '../search-bar-item/search-bar-item.component';

@Component({
  selector: 'app-header-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SearchBarItemComponent
  ],
  templateUrl: './header-item.component.html',
  styleUrl: './header-item.component.css'
})
export class HeaderItemComponent implements OnInit{

  @Input() placeholder: string = '';
  @Input() link: string = '';
  @Input() content: string = '';
  @Input() enableNull: boolean = false;


  readonly router = inject(Router);
  search_text: string = '';
  form!: FormGroup;

  constructor () {}

  ngOnInit(): void {
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
