import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchesTab:any=[];
  bannerDetails:any;
  constructor(private matchService:MatchService) { }

  ngOnInit() {
    this.bannerDetails={title : "Matches"}
    this.matchService.sendReqToGetAllMatches().subscribe(
      (data) => {
        this.matchesTab = data.result
      }
    );
  }

}
