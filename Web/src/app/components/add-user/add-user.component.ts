import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { GetUserInfoService } from 'src/app/services/get-user-info.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  Users: User[] = [];
  newUser: User = {
    id: 0,
    name: '',
    lastName: '',
    userImage: '',
    cardNumber: '',
    cardPin: '',
    cardCvv: '',
    cardExpirationDate: new Date(),
  };
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: GetUserInfoService
  ) {}

  GetUser() {
    this.userService.GetAllInfo().subscribe((data: User[]) => {
      this.Users = data;
    });
  }

  AddUser() {
    this.userService.addUser(this.newUser).subscribe((data: User) => {
      this.Users.push(this.newUser);

      this.newUser = {
        id: 0,
        name: '',
        lastName: '',
        userImage: '',
        cardNumber: '',
        cardPin: '',
        cardCvv: '',
        cardExpirationDate: new Date(),
      };
    });
    location.reload();
  }
}
