import { Component, OnInit } from '@angular/core';
import {User} from "../../@core/auth.service";
import {UserService} from "../../@core/data/users.service";

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users : User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(v=>{
      this.users = v;
    })
  }

}
