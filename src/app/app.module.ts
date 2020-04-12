import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule ],
  declarations: [ AppComponent, HelloComponent, NewsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
