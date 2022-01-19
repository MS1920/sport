import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-team',
  templateUrl: './match-team.component.html',
  styleUrls: ['./match-team.component.css']
})
export class MatchTeamComponent implements OnInit {
  ranking:any=[];
  aux:any=[];
  constructor() { }

  ngOnInit() {
    this.ranking=[
      {position:"", team:"Football League", win:"1",draw:"3",loss:"4",points:23,qualification:""},
      {position:"", team:"Soccer", win:"3",draw:"2",loss:"3",points:51,qualification:""},
      {position:"", team:"Juvendo", win:"6",draw:"3",loss:"1",points:39,qualification:""},
      {position:"", team:"French Football League", win:"7",draw:"2",loss:"1",points:30,qualification:""},
      {position:"", team:"Legia Abante", win:"3",draw:"4",loss:"5",points:27,qualification:""},
      {position:"", team:"Gliwice League", win:"4",draw:"2",loss:"1",points:21,qualification:""},
      {position:"", team:"Cornika", win:"7",draw:"7",loss:"3",points:25,qualification:""},
      {position:"", team:"Gravity Smash", win:"7",draw:"7",loss:"7",points:57,qualification:""},
      {position:"", team:"Smash", win:"7",draw:"3",loss:"7",points:17,qualification:""}
    ]
    for (let i = 0; i < this.ranking.length; i++) {
      for (let j = 0; j < this.ranking.length; j++) {
        if(this.ranking[i].points>this.ranking[j].points){
          this.aux=this.ranking[i];
          this.ranking[i]=this.ranking[j];
          this.ranking[j]=this.aux;
        }
        this.ranking[j].position=j+1;
      }
    }
  }
  rankingDetails(position, points){
    let result;
    if(position == 1 || position == 2){
      result=["green", "CL"];
    }else if((position == 3 || position == 4) && points>=30){
      result=["orange", "EL"];
    }else if(position == 8 || position == 9){
      result=["red"];
    }else{
      result=["white"];
    }
    return result;
  }
}
