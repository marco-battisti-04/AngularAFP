import { Injectable, Signal, signal } from '@angular/core';
import { WebUtilsService } from './web-utils.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInteractionsService {

  constructor(private webUtils: WebUtilsService) { }

  search(query: string) {
    return this.webUtils.get<any[]>(`/api/film/title/${query}`);
  }

  getLibrary(query: string) {
    let endpoint = "/library/all"
    if (query.trim() != '') {
      endpoint= `/library/title/${query}`
    }

    return this.webUtils.get<any[]>(endpoint);
  }

  addToLibrary(item: any) {
    return this.webUtils.post('/library/add', { film: item });
  }

  removeFromLibrary(item: any) {
    return this.webUtils.post('/library/remove', { film: item });
  }

  getLibraryItem(id: number) {
    return this.webUtils.get<any>(`/library/get/${id}`);
  }

  getGenres(genreIds: number[]) {
    return this.webUtils.get<any[]>(`/api/film/genres/${genreIds.join(',')}`);
  }

  getComments(id: number) {
    return this.webUtils.get<any[]>(`/library/comments/film/${id}`);
  }
  addComment(comment: any) {
    return this.webUtils.post(`/library/comment/add`, { comment: comment });
  }
}
