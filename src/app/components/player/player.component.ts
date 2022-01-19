import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playerDetails:any;
  constructor() { }

  ngOnInit() {
  }

  note(n){
    var noteColor;
    if(n>=0 && n<=2){
      noteColor="red";
    }else if(n>2 && n<=5){
      noteColor="orange";
    }else if(n>5 && n <9){
      noteColor="yellow";
    }else if(n>=9 && n<=10){
      noteColor="green";
    }
    return noteColor;
  }
}
