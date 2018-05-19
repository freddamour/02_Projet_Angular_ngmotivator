
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule  } from 'angularfire2';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

/* const CONFIG = {
  apiKey: 'AIzaSyAKsSljzCkYVwovgnNfki1w2HGgECtOTp4',
  authDomain: 'motivator-a6377.firebaseapp.com',
  databaseURL: 'https://motivator-a6377.firebaseio.com',
  projectId: 'motivator-a6377',
  storageBucket: 'motivator-a6377.appspot.com',
  messagingSenderId: '1041851213923'
}; */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
