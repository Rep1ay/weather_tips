import { Component, OnInit, Input } from '@angular/core';
import {WtService} from '../wt.service';
import { WeekWeather} from '../week-weather';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.less']
})

export class WeekWeatherComponent implements OnInit {
  @Input() units: string;
  unitSymbols;
  city: string;
  WeekWeather: WeekWeather[] = [];
  constructor(public wtService: WtService) { }

  ngOnInit() {
    this.wtService.getWeekWeather(localStorage.city, this.units).subscribe((res) => {
      try {
        const response = res.json();
        this.unitSymbols = this.units === 'metric' ?  String.fromCharCode(8451) : String.fromCharCode(8457);
        this.renderWeekWeather(response);
      } catch (error) {
        console.error(error);
      }
    });
  }

  renderWeekWeather(res) {
    for (let i = 0 ; i < res.list.length; i += 8) {
      const temp =  new WeekWeather(res.list[i].dt_txt,
                                    res.list[i].main.temp,
                                    res.list[i].main.pressure,
                                    res.list[i].main.humidity,
                                    res.list[i].weather[0].icon,
                                    );
      this.WeekWeather.push(temp);
    }
  }
  handleError(error) {
    const errorMessage = error.json().message;
    console.error(errorMessage);
  }
}
