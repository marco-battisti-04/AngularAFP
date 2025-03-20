import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-header-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './header-item.component.html',
  styleUrl: './header-item.component.css'
})
export class HeaderItemComponent implements OnInit{

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
