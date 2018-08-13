import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { WtService} from '../wt.service';
import { CurrentWeather} from '../current-weather';
import { WeekWeatherComponent} from '../week-weather/week-weather.component';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.less']
})
export class CurrentWeatherComponent implements OnInit {
  @Output() setUnits = new EventEmitter <string>();
  // @ViewChild('search')  private search: SearchComponent;
  myWeather: CurrentWeather;
  city: any;
  bindedCity: any;
  error: any;
  units;
  displayForcast = false;
  cityEntered = false;
  displayForcastBtn = true;
  unitSymbol = String.fromCharCode(8451);
  showRadio = true;
  constructor( private wtService: WtService ) {
  }

    ngOnInit() {
    }
    renderDailyWeather(response, units, showRadio) {
      this.showRadio = showRadio;
      this.units = units;
      this.unitSymbol = units === 'metric' ?  String.fromCharCode(8451) : String.fromCharCode(8457);
      this.displayForcastBtn = true;
      this.displayForcast = false;
      if (!this.cityEntered) {
        this.cityEntered = !this.cityEntered;
      }
      const res =  response.json();
      this.myWeather = new CurrentWeather(res.name,
                                          res.main.temp,
                                          units,
                                          res.weather[0].icon,
                                          res.main.humidity,
                                          res.main.pressure
                                        );
      this.bindedCity = res.name;
    }
}
