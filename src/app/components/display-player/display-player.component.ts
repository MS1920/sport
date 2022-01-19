import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  playerId:string;
  player:any={};
  bannerDetails:any={};
  constructor(
    private playerService: PlayerService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.bannerDetails = {title:"Player Info"}
    this.playerId = this.router.snapshot.paramMap.get('id');
    this.playerService.sendReqToGetPlayerById(this.playerId).subscribe((data) => {
      this.player = data.result
    })
  }

}
