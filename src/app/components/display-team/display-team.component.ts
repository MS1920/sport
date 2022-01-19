import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-display-team',
  templateUrl: './display-team.component.html',
  styleUrls: ['./display-team.component.css']
})
export class DisplayTeamComponent implements OnInit {
  teamId: any;
  team: any = {};
  bannerDetails:any={};
  constructor(
    private teamService: TeamService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.bannerDetails = {title:"Team Info"}
    this.teamId = this.router.snapshot.paramMap.get('id');
    this.teamService.sendReqToGetTeamById(this.teamId).subscribe((data) => {
      this.team = data.result
    })
  }

}
