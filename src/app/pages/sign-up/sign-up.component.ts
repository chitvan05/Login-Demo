import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpModel } from 'src/app/models/sign-up-model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signup: SignUpModel = new SignUpModel();
  constructor(private route: Router, private authentication: AuthenticationService) {
  }

  ngOnInit(): void {
    // assigning value to username and email input fields as readonly manually as the api call is not made
    this.signup.username = "john doe"
    this.signup.email = "john@requantive.com"
  }

  async doSignUp() {
    const promise = this.authentication.SignUp(this.signup);

    try {
      await promise;
    } catch (e) {
      return;
    }

    this.route.navigate(['/thank-you']);

  }
}