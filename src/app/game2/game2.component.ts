import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
// import { Howl, Howler } from 'Howler';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app'
import * as $ from 'jquery';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.scss']
})
export class Game2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
