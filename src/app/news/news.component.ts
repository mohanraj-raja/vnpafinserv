import { Component, OnInit } from '@angular/core';
import { NewsModel } from '../model/newsModel';
import {MatCardModule} from '@angular/material/card';
import {NewsServiceService} from '../api/news/news-service.service';
import {INewsinterface} from '../api/news/newsinterface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

   newsArray: Array<NewsModel> = [];
   private newses:NewsModel[] =[
    {title:'HDFC goes High',description:"Discovered in the Gobi Desert in southeastern Mongolia in the 1970s, incomplete but well-preserved specimens included the lower jaw, neck and tail vertebrae, the pelvis, the shoulder girdle, and limb bones. Parts of the specimens have since gone missing or become damaged. Named in 1979, Segnosaurus ('slow lizard') is estimated to have been about 6–7 m (20–23 ft) long and to have weighed about 1.3 metric tons (1.4 short tons). ",postedOn:'8 APR 2020'},
      {title:'HDFC goes low',description:"The affinities of Segnosaurus were originally obscure and it received its own theropod family, Segnosauridae, and later when related genera were identified, an infraorder, Segnosauria. Alternative classification schemes were proposed until more complete relatives were described in the 1990s, which confirmed them as theropods. The new fossils also showed Segnosauridae was a junior synonym of the earlier named family Therizinosauridae. Segnosaurus and its relatives are thought to have been slow-moving animals that, as indicated by their unusual features, were mainly herbivorous, whereas most other theropod groups were carnivorous. Therizinosaurs probably used their long forelimbs, long necks, and beaks when browsing, and large guts for processing food. Segnosaurus is known from the Bayan Shireh Formation, where it lived alongside the fellow therizinosaurs Erlikosaurus and Enigmosaurus; these related genera were probably niche partitioned.",postedOn:'8 APR 2020'},
        {title:'HDFC goes high',description:"HDFC goes to 6%",postedOn:'8 APR 2020'}

  ];

  constructor(private newsService: NewsServiceService) {
  
   }

  

  ngOnInit() {
    this.getNews();
  }

    getNews() {
    this.newsArray=[];
    this.newsService.getNews().subscribe(data=>
    {
    this.newsArray=data; console.log(this.newsArray);}
    );
   
  }

}
