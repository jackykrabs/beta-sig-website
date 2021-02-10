import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlickerResponse } from './models/flicker-response';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  flickerUrl = 'https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=50104f9c9a0b1d66558f58cd15870f0f&photoset_id=72157718231001018&user_id=192087575%40N03&extras=url_o,date_taken&format=json&nojsoncallback=1';
  constructor(private http: HttpClient) { }
  getPhotos(): Observable<any> {
    return this.http.get<any>(this.flickerUrl);
  }
}
