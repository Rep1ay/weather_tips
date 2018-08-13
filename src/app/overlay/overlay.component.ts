import { Component, OnInit, Input } from '@angular/core';
import { WtService} from '../wt.service';
import {FormsModule, NgForm } from '@angular/forms';
import { CurrentWeather} from '../current-weather';
import { WeekWeatherComponent} from '../week-weather/week-weather.component';
import { CurrentWeatherComponent} from '../current-weather/current-weather.component';
@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
