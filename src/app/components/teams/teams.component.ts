import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  bannerDetails: any;
  teams: any = [];
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.bannerDetails = { title: "All Teams" }
    this.teamService.sendReqToGetAllTeams().subscribe((data) => {
      this.teams = data.result
    })
  }

}
