import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  apiKey = '';

  constructor() {}

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    try {
      this.newMap = await GoogleMap.create({
        id: 'my-cool-map',
        element: this.mapRef.nativeElement,
        apiKey: 'API KEY HERE',
        config: {
          center: {
            lat: 14.553859198304545,
            lng: 121.04492312876066,
          },
          zoom: 8,
        },
      });
    } catch(e) {
      console.log(e);
    }
  }

}
