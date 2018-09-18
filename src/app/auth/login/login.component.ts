import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { getDeepFromObject } from '@nebular/auth/helpers';
import { NB_AUTH_OPTIONS, NbAuthSocialLink } from '@nebular/auth';
import {AuthService} from "../../@core/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  redirectDelay: number = 0;

  errors: string[] = [];
  messages: string[] = [];
  user: any = { rememberMe: true };

  showMessages: any = {};
  submitted: boolean = false;
  socialLinks: NbAuthSocialLink[] = [];

  validation = {};

  constructor(protected auth: AuthService, @Inject(NB_AUTH_OPTIONS) protected config = {}, protected router: Router) {
   this.socialLinks = [
     {
       name: 'google',
       title: 'Google'

  }
   ]
  }

  loginEmail() {
    this.errors = this.messages = [];
    this.submitted = true;

    // this.auth.signInWithEmail(this.user.email, this.user.password)
    //   .then((res) => {
    //     this.submitted = false;
    //     this.messages = [res];
    //
    //     this.redirectToDashboard()
    //   })
    //   .catch((err) => {
    //     this.submitted = false;
    //     this.errors = [err];
    //   });
  }

  loginSocial(name) {
    if (name === "google") {
      this.loginGoogle();
    } else if (name === "facebook") {
      this.loginFb();
    } else{
      console.warn("No login for " + name);
    }
  }

  loginGoogle() {
    this.auth.googleLogin()
      .then((success) => {
        this.redirectToDashboard()
      })
      .catch((err) => {
        this.errors = [err];
      });
  }

  loginFb() {
    // this.auth.signInWithFacebook()
    //   .then((success) => {
    //     this.redirectToDashboard()
    //   })
    //   .catch((err) => {
    //     this.errors = [err];
    //   });
  }

  redirectToDashboard(){
    setTimeout(() => {
      this.router.navigate(['/pages/dashboard']);
    }, this.redirectDelay);
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }
}
