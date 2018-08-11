import { Component, OnInit } from '@angular/core';
import { WtService} from '../wt.service';
import { CurrentWeather} from '../current-weather';
import { FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { WeekWeatherComponent} from '../week-weather/week-weather.component';
import { AlertsService } from 'angular-alert-module';
// import {WeekWeatherComponent} from '../week-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  myWeather: CurrentWeather;
  city: any;
  bindedCity: any;
  error: any;
  displayForcast = false;
  cityEntered = false;
  constructor( private wtService: WtService,
    private weekWeather: WeekWeatherComponent,
    private alerts: AlertsService
  ) {
  }

  ngOnInit() {
  }
  renderDailyWeather(response) {
    const res =  response.json();
    this.myWeather = new CurrentWeather(res.name,
                                        res.main.temp,
                                        res.weather[0].icon,
                                        res.main.humidity,
                                        res.main.pressure
                                      );
    this.bindedCity = res.name;
    if (!this.cityEntered) {
      this.cityEntered = !this.cityEntered;
    }
    this.displayForcast = false;
  }

  showForcast() {
    this.displayForcast = true;
  }
}
