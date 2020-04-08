import { Component, OnInit } from '@angular/core';
import { News } from '../model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
   private newses:News[] =[
    {title:'HDFC goes High',description:"HDFC goes to 8%",publishedOn:'8 APR 2020'},
      {title:'HDFC goes low',description:"HDFC goes to 7%",publishedOn:'8 APR 2020'},
        {title:'HDFC goes high',description:"HDFC goes to 6%",publishedOn:'8 APR 2020'}

  ];

  constructor() {
  
   }

  

  ngOnInit() {
  }

}
