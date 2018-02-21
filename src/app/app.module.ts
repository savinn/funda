import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule } from 'ngx-gallery';
import { AgmCoreModule } from '@agm/core';

import { TopMenuModule } from './top-menu/top-menu.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { DataService } from './main/data.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    TopMenuModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    NgxGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsSdWJqrRMfvPly-Ke9TMRccJraThYYiE'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
