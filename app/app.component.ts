import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'my-app',
  template: `
  <div>
    <h1>Hello {{ greeting }}</h1>
  </div>
  `,
  providers: [ DataService ]
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData();
  }

  greeting = 'World!';

}
