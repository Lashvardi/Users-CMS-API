import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { GetUserInfoService } from 'src/app/services/get-user-info.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: GetUserInfoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.userService.getUserById(id).subscribe((data) => {
      this.user = data;
    });
  }
}
