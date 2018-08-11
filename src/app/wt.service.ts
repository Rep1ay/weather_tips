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
    constructor( private http: Http ) {
      this.url = 'http://api.openweathermap.org/data/2.5/';
      this.weekUrl = 'forecast';
      this.dailyUrl = 'weather';
    }
    getDailyWeather(city) {
      return this.http.get(this.url + this.dailyUrl + '?q=' + city + '&units=metric' + '&APPID=' + this.apiKey);
    }

    getWeekWeather(city) {
      return this.http.get(this.url + this.weekUrl + '?q=' + city + '&units=metric' + '&APPID=' + this.apiKey);
    }
}
