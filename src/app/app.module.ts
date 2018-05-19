
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// https://www.youtube.com/watch?v=E5p8cSOdSLQ&list=PLMYF6NkLrdN-a4ltqjnRZuW3FE1mAX4ez&index=18
import { environment } from '../environments/environment';
import { AngularFireModule  } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
