import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {
  bannerDetails: any;
  searchMatchesFrom: FormGroup;
  foundedMatches: any;
  constructor(
    private formBuilder: FormBuilder,
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.bannerDetails = { title: "Search Matches" };
    this.searchMatchesFrom = this.formBuilder.group({
      teamOne: [""]
    })
  }

  searchMatches() {
    this.matchService.sendReqToSearchMatches(this.searchMatchesFrom.value).subscribe((data) => {
      this.foundedMatches = data.result
    })
  }
}
