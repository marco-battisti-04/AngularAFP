import { Injectable, Signal, signal } from '@angular/core';
import { WebUtilsService } from './web-utils.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInteractionsService {

  // listSignal = signal<any[]>([]);

  constructor(private webUtils: WebUtilsService) { }

  search(query: string) {
    return this.webUtils.get<any[]>(`api/film/title/${query}`);
  }

  getLibrary(query: string) {
    let endpoint = "/library/all"
    if (query.trim() != '') {
      endpoint= `/library/title/${query}`
    }

    return this.webUtils.get<any[]>(endpoint);
  }
}
