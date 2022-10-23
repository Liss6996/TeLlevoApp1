import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleMap, Marker} from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Geolocation, PositionOptions } from '@capacitor/geolocation';

declare let google;

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  @ViewChild('map')mapRef: ElementRef;
  map: GoogleMap;

  nombreUsuario: string;

  location: any={};
  keys: string[]=[];
  lat: any;
  lng: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ionOnInit() {
    Geolocation.requestPermissions();
  }

  ngOnInit() {
    this.nombreUsuario = this.activatedRoute.snapshot.paramMap.get('conductor');
  }

  async getPosition()
  {
    const options: PositionOptions = {
      enableHighAccuracy:true
    };
    Geolocation.getCurrentPosition(options).then((res)=> {
        this.lat = res.coords.latitude;
        this.lng = res.coords.longitude;
    },(err)=>{
      alert(JSON.stringify(err));
    });
    console.log(this.lat);
    console.log(this.lng);
    this.addMarkers();

  };

  ionViewDidEnter(){
    this.createMap();

  }
  async createMap(){
    this.map = await GoogleMap.create({
      id:'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      config: {
        center:{
          lat: -33.45694,
          lng: -70.64827,
        },
        zoom: 12,
      }
    });
    this.addMarkers();

  }
  async addMarkers(){
    const markers: Marker [] = [
      {
        coordinate: {
          lat: this.lat,
          lng: this.lng,
        },
        title: 'localhost',
        snippet: 'Best place on earth'
      },
    ];

    const result = await this.map.addMarkers(markers);
    console.log(result);

    this.map.setOnMarkerClickListener(async (marker) => {
      console.log(marker);
    });
  }


}
