import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.scss']
})
export class RequestAccessComponent implements OnInit {

  constructor(private route: Router, private linkedinservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  async LinkedinSignup() {
    const promise = this.linkedinservice.LinkedinSignInApi();
    try {
      await promise;
    } catch (e) {
      return;
    }

    this.route.navigate(['/sign-up']);
  }

}
