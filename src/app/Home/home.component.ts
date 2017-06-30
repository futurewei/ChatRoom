import { Component, OnInit } from '@angular/core';
import {FirebaseService} from 'services/firebase.service';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FirebaseService]
})
export class HomeComponent{
  posts: any;
  msgVal:string;
  public isLoggedIn: boolean;
  currentName: string;

  constructor(private _firebaseService: FirebaseService, private router: Router){
        this._firebaseService.name.subscribe(
        (auth) => {
          if (auth == null) {
            console.log("Not logged in");
            this.isLoggedIn = false;
        }else{
            console.log("logged in");
            console.log(auth);
            this.isLoggedIn = true;
            this.currentName = auth.displayName;
         } });


        this._firebaseService.items.subscribe(
        (auth) => {
          if (auth == null) {
            console.log("Nothing");
        }else{
            console.log("yay");
            console.log(auth.message);   
            this.posts = auth;
         } });
  }

   login() {
    this._firebaseService.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((data) => {
      this.router.navigate(['']);
    });
  }

  logout(){
    this._firebaseService.logout();
  }

  sendMessage(str: string)
  {
      this._firebaseService.sendMessages(str); 
      this.msgVal = "";
  }
}