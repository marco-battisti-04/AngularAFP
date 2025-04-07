import { Injectable, Signal, signal } from '@angular/core';
import { WebUtilsService } from './web-utils.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInteractionsService {

  listSignal = signal<any[]>([]);

  constructor(private webUtils: WebUtilsService) { }

  search(query: string) {

  }

  getLibrary(query: string) {
    let endpoint = "/library/all"

    try {
      if (query.trim() != '') {
        endpoint= `/library/title/${query}`
      }

      this.webUtils.get<any[]>(endpoint).subscribe(response => {
        this.listSignal.set(response);

        console.log(this.listSignal());
      })

    } catch (error) {
      // console.error('Error fetching library data:', error);
    }
  }

  clearSignal() {
  }
}
