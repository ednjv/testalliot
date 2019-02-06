export interface Weather {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: Currently;
  hourly: Hourly;
  daily: Daily;
  flags: Flags;
  offset: number;
}

export interface Currently {
  time: number;
  summary: Summary;
  icon: Icon;
  precipIntensity: number;
  precipProbability: number;
  temperature: number;
  apparentTemperature: number;
  dewPoint: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windGust: number;
  windBearing: number;
  cloudCover: number;
  uvIndex: number;
  visibility: number;
  ozone: number;
  precipType?: PrecipType;
}

export enum Icon {
  Cloudy = 'cloudy',
  Fog = 'fog',
  PartlyCloudyDay = 'partly-cloudy-day',
  PartlyCloudyNight = 'partly-cloudy-night',
}

export enum PrecipType {
  Rain = 'rain'
}

export enum Summary {
  Foggy = 'Foggy',
  MostlyCloudy = 'Mostly Cloudy',
  Overcast = 'Overcast',
  PartlyCloudy = 'Partly Cloudy'
}

export interface Daily {
  summary: string;
  icon: PrecipType;
  data: Datum[];
}

export interface Datum {
  time: number;
  summary: string;
  icon: string;
  sunriseTime: number;
  sunsetTime: number;
  moonPhase: number;
  precipIntensity: number;
  precipIntensityMax: number;
  precipIntensityMaxTime: number;
  precipProbability: number;
  precipType?: PrecipType;
  temperatureHigh: number;
  temperatureHighTime: number;
  temperatureLow: number;
  temperatureLowTime: number;
  apparentTemperatureHigh: number;
  apparentTemperatureHighTime: number;
  apparentTemperatureLow: number;
  apparentTemperatureLowTime: number;
  dewPoint: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windGust: number;
  windGustTime: number;
  windBearing: number;
  cloudCover: number;
  uvIndex: number;
  uvIndexTime: number;
  visibility: number;
  ozone: number;
  temperatureMin: number;
  temperatureMinTime: number;
  temperatureMax: number;
  temperatureMaxTime: number;
  apparentTemperatureMin: number;
  apparentTemperatureMinTime: number;
  apparentTemperatureMax: number;
  apparentTemperatureMaxTime: number;
}

export interface Flags {
  sources: string[];
  'meteoalarm-license': string;
  'nearest-station': number;
  units: string;
}

export interface Hourly {
  summary: string;
  icon: Icon;
  data: Currently[];
}

export interface Coordinates {
  coords: LatLong;
}

export interface LatLong {
  lat: number;
  lng: number;
}

export interface WeatherDialogData {
  temperature: number;
  summary: string;
  timezone: string;
}
