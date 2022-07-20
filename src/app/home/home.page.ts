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

  apiKey = 'APIKEYHERE';

  markers: Marker[] = [
    {
      coordinate: {lat: 10.671197598143978, lng: 122.38482110370441},
      iconUrl: '../../assets/icon/icon-marker2.svg',
    },
    {
      coordinate: {lat: 14.553859198304545, lng: 121.04492312876066},
      iconUrl: '../../assets/icon/icon-marker2.svg',
    }
  ];

  constructor() {}

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    try {
      this.newMap = await GoogleMap.create({
        id: 'map',
        element: this.mapRef.nativeElement,
        apiKey: this.apiKey,
        config: {
          center: {
            lat: 14.553859198304545,
            lng: 121.04492312876066,
          },
          zoom: 8,
        },
      });

      await this.newMap.addMarkers(this.markers);
    } catch(e) {
      console.log(e);
    }
  }

}
