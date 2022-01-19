import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  bannerDetails: any;
  addMatchForm: FormGroup;
  match: any = {};
  teams: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private matchService: MatchService,
    private teamService: TeamService,
    private router: Router
  ) { }

  ngOnInit() {
    this.bannerDetails = { title: "Add Match" };
    this.addMatchForm = this.formBuilder.group({
      teamOne: this.teams,
      scoreOne: [""],
      scoreTwo: [""],
      teamTwo: [""]
    })
    this.teamService.sendReqToGetAllTeams().subscribe((data) => {
      this.teams = data.result
    })
  }

  addMatch() {
    this.matchService.sendReqToAddMatch(this.match).subscribe((data) => {
      alert(data.result);
      this.router.navigate(['admin']);
    });
  }

}
