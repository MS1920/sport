import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {
  players: any = [];
  items = [];
  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.playerService.sendReqToGetAllPlayers().subscribe(
      (data) => {
        // this.players = data.result
        this.items = data.result
      }
    );
  }

  onChangePage(players: Array<any>) {
    // update current page of items
    this.players = players;
  }

  goToDisplayPlayer(id) {
    this.router.navigate([`/display-player/${id}`]);
  }

  goToEditPlayer(id) {
    this.router.navigate([`/edit-player/${id}`]);
  }

  deletePlayer(id) {
    this.playerService.sendReqToDeletePlayerById(id).subscribe((data) => {
      alert(data.result)
      this.playerService.sendReqToGetAllPlayers().subscribe(
        (data) => {
          this.players = data.result
        })
    })
  }
}
