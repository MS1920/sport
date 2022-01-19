import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  bannerDetails: any;
  profileForm:FormGroup;
  userId: any;
  user: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.bannerDetails = { title: "Profile" };
    this.profileForm = this.formBuilder.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      password: [""]
    })
    this.userService.getProfile(this.userId).subscribe((data) => {
      this.user = data.result
    })
  }

}
