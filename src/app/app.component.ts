import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testalliot';
  lat = 51.678418;
  lng = 7.809007;

  constructor() {
    console.log(environment.mapsKey);
  }
}
