import { Component, OnInit, Input } from '@angular/core';
import { WtService} from '../wt.service';
import {FormsModule, NgForm } from '@angular/forms';
import { WeekWeatherComponent} from '../week-weather/week-weather.component';
import { CurrentWeatherComponent} from '../current-weather/current-weather.component';
import { AlertsService } from 'angular-alert-module';
@Component({  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private wtService: WtService,
              private currentWeather: CurrentWeatherComponent,
              private weekWeather: WeekWeatherComponent,
              private alerts: AlertsService
            ) { }

  ngOnInit() {
    localStorage.errorCount = 'false';
  }
  onSubmit(form: NgForm) {
    const city = localStorage.city = form.value.city;
    this.wtService.getDailyWeather(city).subscribe(
      (res) => this.currentWeather.renderDailyWeather(res),
      error => this.handleError(error, () => {
        localStorage.errorCount = false;
      }),
    );
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
