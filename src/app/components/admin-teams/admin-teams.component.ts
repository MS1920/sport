import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {
  teams: any = [];
  constructor(
    private teamService: TeamService,
    private router: Router
  ) { }

  ngOnInit() {
    this.teamService.sendReqToGetAllTeams().subscribe(
      (data) => {
        this.teams = data.result
      }
    )
  }

  goToDisplayTeam(id) {
    this.router.navigate([`/display-team/${id}`]);
  }

  goToEditTeam(id) {
    this.router.navigate([`/edit-team/${id}`]);
  }

  deleteTeam(id){
    this.teamService.sendReqToDeleteTeamById(id).subscribe((data) => {
      alert(data.result)
      this.teamService.sendReqToGetAllTeams().subscribe(
        (data) => {
          this.teams = data.result
        }
      )
    })
  }
}
