import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { GetUserInfoService } from 'src/app/services/get-user-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  //create user to store data
  users: User[] = [];

  constructor(public userService: GetUserInfoService, private router: Router) {
    this.userService.GetAllInfo().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    });
  }

  goToUserDetails(id: number) {
    this.router.navigate(['/user', id]);
  }
}
