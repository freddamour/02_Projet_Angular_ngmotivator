import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes$: Observable<any[]>;
  quoteList: AngularFireList<any>;
  data;
  constructor(private afDb: AngularFireDatabase) {   }

  ngOnInit() {
this.quotes$ = this.afDb.list('quotes').valueChanges(); // ['a', 'b']
this.quotes$.subscribe( data => this.data = data);
console.log(this.data);

  }

}
