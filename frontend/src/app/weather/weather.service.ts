import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Weather } from '../models/weather';

const apiUrl = environment.apiUrl;

@Injectable()
export class WeatherService {
  constructor(
    private http: HttpClient) {}

  getWeatherInfo(lat: number, long: number): Promise<Weather> {
    const url = `${apiUrl}/weather`;

    return this.http.post<Weather>(url, {latitude: lat, longitude: long}).toPromise();
  }
}
