import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private tripDataUrl = 'https://api.resrobot.se/v2/trip?key=db32d1a8-1c10-4f95-b3d1-2cb5e2176152&format=json&originId=740024928&destId=';
  private locationDataUrl = 'https://api.resrobot.se/v2/location.name?key=db32d1a8-1c10-4f95-b3d1-2cb5e2176152&format=json&input=';

  constructor(private http: Http) { }

  getTripData(destId: string){
    return this.http.get(this.tripDataUrl + destId).map(
      (res) => res.json()
    );
  }

  searchLocation(term: string){
    return this.http.get(this.locationDataUrl + term).map(
      (res) => res.json()
    );
  }

}
