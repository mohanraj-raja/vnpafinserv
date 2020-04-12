import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import {INewsinterface} from './newsinterface';




@Injectable()
export class NewsServiceService {

  constructor(public http: HttpClient) {  }

   getNews(): Observable<INewsinterface> {
    return this.http
      .get("https://vnpafinservrestapi--mohanrajraja.repl.co/getNews", { params: {} })
      .pipe(
        map(response => {
          return response as INewsinterface;
        })
      );
  }

}