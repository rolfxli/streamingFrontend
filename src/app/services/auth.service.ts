import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // post user data to server (API) with backend validation
  // (ideally retrieve boolean from server)
  authenticateUser(username: string, password: string) {
    return "Hello";
  }

  // logout and clear cookies on front end
  logout() {}
}
