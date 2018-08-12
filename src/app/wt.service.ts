import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class WtService {
  apiKey = '348d845e69da35ba1ccd599dda9992f7';
  dailyUrl;
  url;
  weekUrl;
  units = 'metric';
    constructor( private http: Http ) {
      this.url = 'http://api.openweathermap.org/data/2.5/';
      this.weekUrl = 'forecast';
      this.dailyUrl = 'weather';
    }
    changeUnits(units) {
      this.units = units;
    }
    getDailyWeather(city) {
      return this.http.get(this.url + this.dailyUrl + '?q=' + city + '&units=' + this.units + '&APPID=' + this.apiKey);
    }

    getWeekWeather(city) {
      return this.http.get(this.url + this.weekUrl + '?q=' + city + '&units=' + this.units + '&APPID=' + this.apiKey);
    }
}
