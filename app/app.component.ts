import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FormsModule }   from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ DataService ]
})
export class AppComponent implements OnInit {
  departures:any[] = [];
  arrivals:any[] = [];
  customTrip:any[] = [];
  locations:any[] = [];
  destination = {};
  gullmars = '740021705';

  constructor(private dataService: DataService) {}

  ngOnInit() {
      this.dataService.getTripData(this.gullmars).subscribe(
        (data) => {
          for (let trip of data.Trip) {
            this.departures.push(trip.LegList.Leg[0].Origin);
            this.arrivals.push(trip.LegList.Leg[0].Destination);
          }
        });
  }

  search(term:string){
    this.dataService.searchLocation(term).subscribe(
      locations => this.locations = locations.StopLocation);
      if(this.locations){this.destination = this.locations[0];}
  }

  calcTrip(des:string){
    this.dataService.getTripData(des).subscribe(
      data => this.customTrip = data.Trip[0].LegList.Leg);
  }

}
