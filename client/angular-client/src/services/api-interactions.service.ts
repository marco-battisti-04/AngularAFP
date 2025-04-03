import { Injectable } from '@angular/core';
import { WebUtilsService } from './web-utils.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInteractionsService {

  constructor(private webUtils: WebUtilsService) { }

  async search(query: string) {

    let server_response = await this.webUtils.get(`/search/${query}`);
    console.log(server_response)
  }

  async getLibrary(query: string) {
    let response = {
      message: 'Failed to fetch library data',
      status: 400
    }
    try {
      if (query.trim() == '') {
        response = await this.webUtils.get<>(`/library/all`);
      } else {
        response = await this.webUtils.get<>(`/library/title/${query}`);
      }
    } catch (error) {
      // console.error('Error fetching library data:', error);
      response = { error: 'Failed to fetch library data' };
    }
    return response;
  }
}
