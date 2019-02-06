import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Coordinates, Weather } from './models/weather';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { WeatherDialogComponent } from './weather/weather-dialog.component';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  lat: number;
  lng: number;
  weatherInfo: Weather;
  loadingWeatherInfo = false;
  @ViewChild('wrapper') wrapper: ElementRef;

  constructor(
    private weatherService: WeatherService,
    public dialog: MatDialog,
    private renderer: Renderer2) {
    this.setCurrentPosition();
  }

  ngAfterViewInit() {
    this.renderer.setStyle(
      this.wrapper.nativeElement, 'height',
      `${window.innerHeight}px`
    );
  }

  setCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.onGetCurrentPosition.bind(this));
    }
  }

  onGetCurrentPosition(position: Position) {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  }

  async getWeatherInfo(coordinates: Coordinates): Promise<void> {
    try {
      this.loadingWeatherInfo = true;
      const {lat, lng} = coordinates.coords;
      const result = await this.weatherService.getWeatherInfo(lat, lng);
      this.onGetWeatherSuccess(result);
    } catch (error) {
      this.onGetWeatherError(error);
    }
  }

  onGetWeatherSuccess(response: Weather): void {
    this.loadingWeatherInfo = false;
    this.weatherInfo = response;
    this.openDialog(this.weatherInfo);
  }

  onGetWeatherError(error: any): void {
    this.loadingWeatherInfo = false;
    this.dialog.open(ErrorDialogComponent, {
      width: '250px',
      data: {
        error: 'An unexpected error happened, please try again later'
      }
    });
  }

  openDialog(weatherInfo: Weather): void {
    this.dialog.open(WeatherDialogComponent, {
      width: '400px',
      data: {
        temperature: weatherInfo.currently.temperature,
        summary: weatherInfo.currently.summary,
        timezone: weatherInfo.timezone,
        windSpeed: weatherInfo.currently.windSpeed,
        humidity: weatherInfo.currently.humidity
      }
    });
  }
}
