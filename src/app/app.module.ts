import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WtService} from './wt.service';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeekWeatherComponent } from './week-weather/week-weather.component';
import { FormsModule } from '@angular/forms';
import { OverlayComponent } from './overlay/overlay.component';
import { SearchComponent } from './search/search.component';
import { AlertsModule } from 'angular-alert-module';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    WeekWeatherComponent,
    OverlayComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AlertsModule.forRoot()
  ],
  providers: [WtService, WeekWeatherComponent, CurrentWeatherComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
