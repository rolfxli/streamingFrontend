import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // https://github.com/cornflourblue/angular-7-registration-login-example/blob/master/src/app/app.module.ts
  // https://malcoded.com/posts/angular-fundamentals-reactive-forms/
  // https://www.concretepage.com/angular-2/angular-2-formgroup-example
  // reference

  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private auth: AuthService) {
    this.loginForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  // used for reactive forms (currently template-driven)
  createFormGroup() {
    return new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    })
  }

  /* in ngOnInit()
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
  */

  // on login form submission, begin validation and login process
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    if ((username == "") || password == "") {
      return;
    }

    this.auth.authenticateUser(username, password);

    // debugger
    console.log(event);
  }
}
