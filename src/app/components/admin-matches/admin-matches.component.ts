import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})
export class AdminMatchesComponent implements OnInit {
  matchesTab: any = [];
  constructor(
    private matchService: MatchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.matchService.sendReqToGetAllMatches().subscribe(
      (data) => {
        this.matchesTab = data.result
      }
    );
  }

  goToDisplayMatch(id){
    this.router.navigateByUrl(`/display-match/${id}`)
  }

  goToEditMatch(id){
    this.router.navigateByUrl(`/edit-match/${id}`)
  }

  deleteMatch(id){
    this.matchService.sendReqToDeleteMatchById(id).subscribe((data) => {
      alert(data.result)
      this.matchService.sendReqToGetAllMatches().subscribe((data) => {
        this.matchesTab = data.result
      })
    })
  }
}
