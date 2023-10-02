import { Directive, HostListener } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { Router } from "@angular/router";

@Directive({
  selector: "[appGoogleSignin]",
})
export class GoogleSigninDirective {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  @HostListener("click")
  onclick() {
    this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.router.navigate(["/"]);
      })
      .catch((error) => {
        console.error("Google sigin failed: ", error);
      });
  }
}
