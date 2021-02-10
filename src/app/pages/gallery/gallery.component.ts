import { Component, OnInit } from '@angular/core';
import { FlickerResponse } from '../../models/flicker-response';
import { FlickrService } from '../../flickr.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  flickerResponse:any;
  constructor(private flickrService:FlickrService) { }
  ngOnInit(): void {
    this.flickrService.getPhotos().subscribe( response => {
      this.flickerResponse = response;
      console.log(this.flickerResponse)
    }, error => {
      console.log(error);
    });
  }


  

}
