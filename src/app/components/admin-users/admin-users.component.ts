import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users: any = [];
  constructor(
    private userService: UserService,
    private router:Router
  ) { }

  ngOnInit() {
    this.userService.displayAllUsers().subscribe((data) => {
      this.users = data.result
    })
  }

  goToDisplayUser(id){
    this.router.navigate([`display-user/display/${id}`])
  }
  goToEditUser(id){
    this.router.navigate([`edit-user/edit/${id}`])
  }
  deleteUser(id){
    this.userService.deleteUser(id).subscribe((data) => {
      this.userService.displayAllUsers().subscribe((data) => {
        this.users = data.result
      })
    })
  }
}
