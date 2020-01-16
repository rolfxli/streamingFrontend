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
  redirectionURL: string;

  username = "";
  password = "";

  constructor(private auth: AuthService, 
              private formBuilder: FormBuilder,
              private router: Router) {
    // this.loginForm = this.createFormGroup();
  }

  ngOnInit() {
    // initialize the form on component initialization
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // alternative initialization of login form (deprecated)
  createFormGroup() {
    return new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    })
  }

  // on login form submission, begin validation and login process
  loginUser() {
    this.submitted = true;
    // retrieve user login values
    this.username = this.loginForm.controls.username.value;
    this.password = this.loginForm.controls.password.value;

    // validate against an empty submission
    if ((this.username == "") || this.password == "") {
      return;
    }

    // authentication bypass for testing
    // this.router.navigate(["/home"]);

    // trigger authentication services
    this.auth.authenticateUser(this.username, this.password) // .pipe(first())?
      .subscribe(
        data => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          // throw a message on screen?
          this.loading = false;
        }
      )

    // debugger
    console.log(this.username + ' ' + this.password);
  }
}
