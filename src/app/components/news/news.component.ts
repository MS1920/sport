import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsTab:any=[];
  constructor() { }

  ngOnInit() {
    this.newsTab=[
      {id:1, title:"Tun vs Alg", description:"Final Cup 2021", image:"", avatar:"", date:"18/12/2021"},
      {id:2, title:"Tun vs Egypt", description:"Semi Final Cup 2021", image:"", avatar:"", date:"18/12/2021"},
      {id:3, title:"Tun vs Alg", description:"Final Cup 2021", image:"", avatar:"", date:"18/12/2021"},
      {id:4, title:"Tun vs Alg", description:"Final Cup 2021", image:"", avatar:"", date:"18/12/2021"},
      {id:5, title:"Tun vs Alg", description:"Final Cup 2021", image:"", avatar:"", date:"18/12/2021"}
    ]
  }

}
