import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
    name: Observable<firebase.User>;
    items: FirebaseListObservable<any>;
    constructor(public af: AngularFireAuth, db: AngularFireDatabase){
        this.name = af.authState;
        this.items = db.list('/messages', {
      query: {
        limitToLast: 5
      }
    });}

    login(){
        this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    }

    logout() {
        this.af.auth.signOut();
        this.name = null;
    }

    sendMessages(str:string){
         this.items.push({message: str, name: firebase.auth().currentUser.displayName});
    }    
}