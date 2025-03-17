import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  readonly router = inject(Router);
  // recomended_list: boolean = false;
  recomended_list: any[] = [];


  search_text: string = '';
  form!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      search_text: new FormControl('')
    });
  }

  search() {
    this.router.navigate(['/search', this.search_text]);
  }
}
