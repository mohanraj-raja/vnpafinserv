import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
   private newses:Movie[] =[
    {title:'HDFC goes High',description:"HDFC goes to 8%"},
      {title:'HDFC goes low',description:"HDFC goes to 7%"},
        {title:'HDFC goes high',description:"HDFC goes to 6%"}

  ];

  constructor() {
  
   }

  

  ngOnInit() {
  }

}
class Movie {  
    title : string;  
   description:string; 
}  