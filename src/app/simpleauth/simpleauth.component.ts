import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-simpleauth',
  templateUrl: './simpleauth.component.html',
  styleUrls: ['./simpleauth.component.css']
})
export class SimpleauthComponent implements OnInit {
  constructor(public auth: AngularFireAuth) {
  }
  login(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout(): void {
    this.auth.signOut();
  }

  ngOnInit(): void {
  }

}
