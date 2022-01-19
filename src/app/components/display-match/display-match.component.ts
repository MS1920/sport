import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  match: any = {};
  matchId: any;
  bannerDetails:any;
  constructor(
    private matchService: MatchService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.bannerDetails = {title:"Match Info"}
    this.matchId = this.router.snapshot.paramMap.get('id');
    this.matchService.sendReqToGetMatchById(this.matchId).subscribe((data) => {
      this.match = data.result
    })
  }

}
