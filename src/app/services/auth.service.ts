import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;
  //private currentUser: User;

  constructor(private http: HttpClient) { }

  // post user data to server (API) with backend validation
  authenticateUser(username: string, password: string) {
    return this.currentUser;
  }

  // logout and clear cookies on front end
  logout() {}
}
