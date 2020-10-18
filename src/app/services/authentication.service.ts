import { Injectable } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { SignUpModel } from '../models/sign-up-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

 async LinkedinSignInApi() {
    // api call to linkedin api code is comment to aviod errors as the there is no actual url
   
     let data
    // try {
    //   data = await this.http.get(`linkedin url`).toPromise();
    // } catch (e) {
    //   throw e;
    // }
    return data;
  
  }

  async SignUp(signup: SignUpModel) {
    // api call to signup api code is comment to aviod errors as the there is no actual url
    
    let data;
  //   try {
  //     data = await this.http.post(`sign up url`, signup).toPromise();
  //   } catch (e) {
  //     throw e;
  //   }

   return data;
  // }
}
}