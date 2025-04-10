import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiInteractionsService } from '../../services/api-interactions.service';
import { environment } from '../../environments/environment';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SearchBarItemComponent } from '../../utils/components/search-bar-item/search-bar-item.component';
import { HeaderItemComponent } from '../../utils/components/header-item/header-item.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detailpage',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    HeaderItemComponent
  ],
  templateUrl: './detailpage.component.html',
  styleUrl: './detailpage.component.css'
})
export class DetailpageComponent implements OnInit {

  readonly apiService = inject(ApiInteractionsService);
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);

  enableSearch: boolean = false;

  image_link: string = '/assets/images/no-poster.jpg';
  background_url: string = '/assets/images/no-background.jpg';

  popup_visible: boolean = false;

  title = 'Dettaglio per:';

  image_url = environment.image_url;
  item =signal<any>({});
  comments_list = signal<any>([]);


  pipedDate = new Date();
  form!: FormGroup;

  constructor() {}

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl(''),
      rating: new FormControl(''),
      description: new FormControl('')
    });


    this.route.params.subscribe(params => {
      let id = params['id'] || '';

      this.apiService.getLibraryItem(id).subscribe(response => {
        if (response.id != -1) {
          this.item.set(response);
          this.title = `${this.title} ${this.item().title}`;
          this.background_url = `${this.image_url}${this.item().backdrop_path}`;
          this.pipedDate = new Date(this.item().release_date);

          this.apiService.getComments(id).subscribe(comments => {
            this.comments_list.set(comments);
          });
        } else {
          this.router.navigate(['/library']);
        }
      });
    });
  }

  addComment() {
    const commentData = this.form.value;
    commentData.film_id = this.item().id;
    this.apiService.addComment(commentData).subscribe(response => {
      window.location.reload();
    });
  }

  togglePopup() {
    this.popup_visible = !this.popup_visible;
  }
}
