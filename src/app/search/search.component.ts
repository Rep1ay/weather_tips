import { Component, OnInit, Input } from '@angular/core';
import { WtService} from '../wt.service';
import {FormsModule, NgForm } from '@angular/forms';
import { CurrentWeatherComponent} from '../current-weather/current-weather.component';
import { AlertsService } from 'angular-alert-module';
@Component({  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() showRadio: boolean;
  units = 'metric';
  constructor(private wtService: WtService,
              private currentWeather: CurrentWeatherComponent,
              private alerts: AlertsService
            ) { }

  ngOnInit() {
    localStorage.errorCount = 'false';
  }

  onSubmit(form, units = 'metric') {
    let city;
    if (!form.value)  {
      city = localStorage.city = form;
    } else if (form === '') {
      city = localStorage.city;
    } else {
      city = localStorage.city = form.value.city;
    }
    this.callDailyService(city, units);
  }

  callDailyService(city, units) {
    this.wtService.getDailyWeather(city, units).subscribe(
      (res) => this.currentWeather.renderDailyWeather(res, units, () => {
        return true;
      }),
      error => this.handleError(error, () => {
        localStorage.errorCount = false;
      }),
    );
  }

  changeUnits(units) {
    this.units = units;
    const city = localStorage.city;
    this.onSubmit(city, units);
  }

  handleError(error, allow) {
    if (localStorage.errorCount === 'false') {
      localStorage.errorCount = true;
      const errorMessage = error.json().message;
      this.alerts.setMessage(errorMessage, 'warn');
      setTimeout(() => {
        allow.call();
      }, 3000);
    }
  }
}
