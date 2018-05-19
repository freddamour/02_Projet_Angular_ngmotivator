import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes$: Observable<any[]>;
  data;
  constructor(private afDb: AngularFirestore) {   }

  ngOnInit() {
this.quotes$ = this.afDb.collection('quotes').valueChanges(); // ['a', 'b']
this.quotes$.subscribe( data => this.data = data);
console.log(this.data);

  }

}
