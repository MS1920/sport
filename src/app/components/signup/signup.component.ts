import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/mustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  bannerDetails: any;
  addSignUpForm: FormGroup;
  userId: any;
  user: any = {};
  editPage: any;
  displayPage: any;
  password: any = "password";
  url: string;
  emailExistMsg: string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.url = this.router.url;
    this.editPage = this.activatedRoute.snapshot.paramMap.get('edit');
    this.displayPage = this.activatedRoute.snapshot.paramMap.get('display');
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.bannerDetails = { title: "Sign Up" };
    this.addSignUpForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(17)]],
      confirmPassword: ["", [Validators.required]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9_-]{8,8}$")]]
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
    if (this.userId) {
      this.password = "text"
      if (this.editPage) {
        this.bannerDetails = { title: "Edit User" };
      } else {
        this.bannerDetails = { title: "User Info" };
      }
      this.userService.getProfile(this.userId).subscribe((data) => {
        this.user = data.result
      })
    }
  }

  signUp() {
    let role = (this.url == "/signup") ? "user" : "admin";
    this.addSignUpForm.value.role = role;
    console.log(this.addSignUpForm.value);
    this.userService.signup(this.addSignUpForm.value).subscribe((data) => {
      if (data.result == "0") {
        this.emailExistMsg = "Email already exist";
      } else {
        if (data.result.role == "admin") {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['']);
        }
      }
    });
  }

  editUser(){
    this.userService.editProfile(this.user).subscribe((data) => {
      alert(data.result)
      this.router.navigate(["admin"])
    })
  }
}
