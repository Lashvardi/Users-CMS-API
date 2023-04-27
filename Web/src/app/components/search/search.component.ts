import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { GetUserInfoService } from 'src/app/services/get-user-info.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchCardNumber: string | undefined;
  users: User[] = [];
  selectedUser: User | undefined;

  constructor(public userService: GetUserInfoService, private router: Router) {
    this.userService.GetAllInfo().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    });
  }
  
  searchUser() {
    const foundUser = this.users.find(user => user.cardNumber === this.searchCardNumber);
    if (foundUser) {
      this.selectedUser = foundUser;
      console.log(this.selectedUser)
    } else {
    }
  }
}
