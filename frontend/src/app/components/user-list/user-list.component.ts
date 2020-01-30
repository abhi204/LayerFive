import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getList()
    .subscribe( data => {
      this.userlist = data;
      console.log('data: ', data);
    });
  }

}
