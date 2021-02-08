import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { LaunchDetailsComponent } from './components/launch-details/launch-details.component';
import { HttpClientModule } from '@angular/common/http';
import { LaunchService } from './services/launch.service'
import { HelperService } from './utility/helper';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    LaunchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LaunchService,HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
