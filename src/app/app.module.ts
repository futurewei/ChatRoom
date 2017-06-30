import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AboutComponent} from './About/about.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {NavbarComponent} from './Navbar/navbar.component';
import {HomeComponent} from './Home/home.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCyGkoIBFEG5abEOfOfFHNtzLGW5pi_MUk",
    authDomain: "chatroom-bb540.firebaseapp.com",
    databaseURL: "https://chatroom-bb540.firebaseio.com",
    projectId: "chatroom-bb540",
    storageBucket: "chatroom-bb540.appspot.com",
    messagingSenderId: "870270461311"
}

//now you need to import AngularFire module
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
