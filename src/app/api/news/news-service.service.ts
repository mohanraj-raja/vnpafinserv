import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { NewsModel } from '../../model/newsModel';




@Injectable()
export class NewsServiceService {

  constructor(private http: HttpClient) {  }

   getNews(): Observable<NewsModel[]> {
     console.log("reached service");
    return this.http
      .get<NewsModel[]>('https://vnpafinservrestapi--mohanrajraja.repl.co/getNews');
      
  }

}