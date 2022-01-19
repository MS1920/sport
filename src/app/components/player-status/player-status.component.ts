import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  bannerDetails: any;
  calculateIMCForm: FormGroup;
  playerDetails: any = {};
  result: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.bannerDetails = { title: "Player IMC" };
    this.calculateIMCForm = this.formBuilder.group({
      height: [""],
      weight: [""]
    })
  }

  calculateIMC() {
    this.playerService.sendReqToCalculateIMC(this.playerDetails).subscribe((data) => {
      this.result = data;
    })
  }

}
