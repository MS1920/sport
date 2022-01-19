import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bannerDetails: any;
  addLoginForm: FormGroup;
  user: any = {};
  error:string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.bannerDetails = { title: "Log In" };
    this.addLoginForm = this.formBuilder.group({
      email: [""],
      password: [""]
    })
  }

  login() {
    this.userService.login(this.user).subscribe((data) => {
      if(data.res != "User true"){
        this.error = "Pleaser verify your email or password"
      }else{
        if (data.user.role == "admin") {
          this.router.navigate(["admin"])
        } else {
          this.router.navigate([`profile/${data.user.id}`])
        }
      }
    });
  }
}
