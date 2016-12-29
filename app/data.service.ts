import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class DataService {
  private dataUrl = 'https://api.resrobot.se/v2/trip?key=db32d1a8-1c10-4f95-b3d1-2cb5e2176152&originId=740024928&destId=740021705&format=json';  // URL to web api

  constructor(private http: Http) { }


  fetchData(){
    return this.http.get(this.dataUrl).subscribe(
      (data) => console.log(data)
    )
  }

}
