import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  bannerDetails: any;
  editMatchForm: FormGroup;
  match: any = {};
  matchId: any;
  constructor(
    private formBuilder: FormBuilder,
    private matchService: MatchService,
    private activeRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.bannerDetails = { title: "Edit-Match" };
    this.matchId = this.activeRouter.snapshot.paramMap.get('id');
    this.matchService.sendReqToGetMatchById(this.matchId).subscribe((data) => {
      this.match = data.result
    })
    this.editMatchForm = this.formBuilder.group({
      teamOne: [""],
      scoreOne: [""],
      scoreTwo: [""],
      teamTwo: [""]
    })
  }
  saveEditMatch() {
    this.matchService.sendReqToEditMatch(this.match).subscribe((data) => {
      this.router.navigate(['admin']);
    });
  }
}
