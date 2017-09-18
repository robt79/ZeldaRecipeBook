import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = ' recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCQE60ByeGDFZkpQC7yIfTVagbYE5gJKuw",
      authDomain: "ng-recipe-book-dd5ff.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
