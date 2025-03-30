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
}
