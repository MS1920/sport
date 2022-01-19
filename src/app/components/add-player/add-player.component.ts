import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  bannerDetails: any;
  addPlayerForm: FormGroup;
  player: any = {};
  playerId: string;
  imagePreview: any;
  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.bannerDetails = { title: "Add Player" };
    this.playerId = this.activeRouter.snapshot.paramMap.get('id');
    this.addPlayerForm = this.formBuilder.group({
      name: [""],
      number: [""],
      poste: [""],
      age: [""],
      note: [""],
      avatar: [""]
    })
    if (this.playerId != null) {
      this.bannerDetails = { title: "Edit Player" };
      this.playerService.sendReqToGetPlayerById(this.playerId).subscribe((data) => {
        this.player = data.result;
      })
    }
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addPlayerForm.patchValue({ avatar: file });
    this.addPlayerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

  addOrEditPlayer() {
    if (this.playerId != null) {
      this.playerService.sendReqToEditPlayer(this.player, this.addPlayerForm.value.avatar).subscribe((data) => {
        this.router.navigate(['admin'])
        alert(data.result)
      });
    } else {
      this.playerService.sendReqToAddPlayer(this.player, this.addPlayerForm.value.avatar).subscribe((data) => {
        alert(data.result);
        this.router.navigate(['admin'])
      });
    }
  }

}


