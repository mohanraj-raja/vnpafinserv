import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewsComponent } from './news/news.component';
import { NewsServiceService } from './api/news/news-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule ],
  declarations: [ AppComponent, HelloComponent, NewsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NewsServiceService]
})
export class AppModule { }
