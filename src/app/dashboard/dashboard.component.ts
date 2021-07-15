import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
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
  moods = ["joyful, happy, relaxed, silly, content, great",
    "productive, active, energetic, motivated",
    "average, normal, uneventful, good",
    "sick, tired, lazy, dull, unmotivated, bored",
    "sad, lonely, numb, depressed, insecure",
    "angry, frustrated, anxious, grumpy"]
  user: any;
  idmood: boolean = true;
  isstory: boolean = true;
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  usermoods: any;
  temp = [];

  storyform = new FormGroup({
    content: new FormControl(' ')
  })
  ngOnInit(): void {
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;
      this.getMoods();
    })
    
    for (let i = 0; i < 15; i++) this.daysofmonths.push(i);
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

  getMoods() {
    this.db.collection("Users").doc(this.user.uid).collection("Moods").snapshotChanges().subscribe(res => {
      this.usermoods = res;
      console.log(this.usermoods[0].payload.doc.data())
      this.temp = []
      for(let i = 0; i < (15 - res.length); i++) this.temp.push(i);
    });
  }

  addstory() {
    var date = new Date()
    this.db.collection("Users").doc(this.user.uid).collection("Stories").doc(date.getDay().toString() + " " + date.getDate().toString() + " " + date.getMonth().toString() + " " + date.getFullYear().toString()).collection("Story").add({ "story": "story", "Time": "Time" });
  }

  addtostory() {
    var date = new Date()
    this.db.collection("Users").doc(this.user.uid).collection("Stories").doc(date.getDay().toString() + " " + date.getDate().toString() + " " + date.getMonth().toString() + " " + date.getFullYear().toString()).collection("Story").add({ "story": "story", "Time": "Time" });
  }

  addmood(mood) {
    var date = new Date()
    this.db.collection("Users").doc(this.user.uid).collection("Moods").doc(date.getDay().toString() + " " + date.getDate().toString() + " " + date.getMonth().toString() + " " + date.getFullYear().toString()).set({ "mood": mood });
  }

}
