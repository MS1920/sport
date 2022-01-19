import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-vs',
  templateUrl: './teams-vs.component.html',
  styleUrls: ['./teams-vs.component.css']
})
export class TeamsVsComponent implements OnInit {
  @Input() match:any;
  constructor() { }

  ngOnInit() {
  }

  score(a,b){
    let result;
    if(a==b){
      result=["draw", "darkblue", "draw"];
    }else if(a>b){
      result=["win", "teal", "win"];
    }else{
      result=["loss", "gray", "loss"];
    }
    return result;
  }
}
