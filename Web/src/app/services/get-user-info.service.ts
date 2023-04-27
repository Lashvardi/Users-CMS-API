import { Injectable } from '@angular/core';
import { ServiceUrlBuilder } from 'src/ServiceUrlBuilder';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root',
})
export class GetUserInfoService {
  constructor(private http: HttpClient) {}

  GetAllInfo(): Observable<User[]> {
    return this.http.get<User[]>(ServiceUrlBuilder.buildUrl('user'));
  }

  getUserById(id: number): Observable<User> {
    const url = ServiceUrlBuilder.buildUrl(`user/${id}`);
    return this.http.get<User>(url);
  }

  addUser(user: User): Observable<User> {
    const url = ServiceUrlBuilder.buildUrl('user');
    return this.http.post<User>(url, user);
  }

  
}
