import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  m:any;
  bannerDetails:any;
  constructor() { }

  ngOnInit() {
    this.m={id:1, teamOne: "Club Africain", teamTwo: "EST", scoreOne:"5", scoreTwo:"1", date:"18/12/2021"};
      this.bannerDetails={title : "World Cup Event", p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, molestias repudiandae pariatur.", a1:"BOOK TICKET", a2:"FIND MATCH", date:"date-countdown", button:"btn btn-primary py-3 px-4 mr-3"}
  }

}
