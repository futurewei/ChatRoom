import { Component, OnInit } from '@angular/core';
import {FirebaseService} from 'services/firebase.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [FirebaseService]
})
export class AppComponent{
  posts: any;

  constructor(private _firebaseService: FirebaseService){

  }


  login(){
    this._firebaseService.login();
  }

  logout(){
    this._firebaseService.logout();
  }

  sendMessage(str: string)
  {
      this._firebaseService.sendMessages(str); 
  }



}
