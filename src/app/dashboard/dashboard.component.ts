import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private as: AuthService, private router: Router, private db: AngularFirestore) { }

  daysofmonths = []
  moods = ["Angry", "Anxious", "Happy", "Peaceful", "Neutral"]
  user: any;
  idmood: boolean = true;
  isstory: boolean = true;
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  ngOnInit(): void {
    this.as.getUserState().subscribe(res => {
      if(!res) this.router.navigate(['/signin'])
      this.user = res;
    })
    for(let i = 0; i < 30; i++) this.daysofmonths.push(i);
    var date = new Date()
    console.log(date.getDay().toString() + " " + date.getDate().toString() + " " + date.getMonth().toString() + " " + date.getFullYear().toString(), date.getHours(), date.getMinutes(), date.getFullYear())
  }

  // checkmood(){
  //   this.db.collection("Users").doc(this.user.uid).collection("Moods").snapshotChanges().subscribe(res => {
  //     // if(res[0]);
  //   });
  // }

  // checkstory(){

  // }

  addstory(){
    var date = new Date()
    this.db.collection("Users").doc(this.user.uid).collection("Stories").doc(date.getDay().toString() + " " + date.getDate().toString() + " " + date.getMonth().toString() + " " + date.getFullYear().toString()).collection("Story").add({"story": "story", "Time": "Time"});
  }

  addtostory(){
    var date = new Date()
    this.db.collection("Users").doc(this.user.uid).collection("Stories").doc(date.getDay().toString() + " " + date.getDate().toString() + " " + date.getMonth().toString() + " " + date.getFullYear().toString()).collection("Story").add({"story": "story", "Time": "Time"});
  }

  addmood(mood){
    var date = new Date()
    this.db.collection("Users").doc(this.user.uid).collection("Moods").doc(date.getDay().toString() + " " + date.getDate().toString() + " " + date.getMonth().toString() + " " + date.getFullYear().toString()).set({"mood": mood});
  }

}
