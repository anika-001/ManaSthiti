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

  user: any;
  idmood: any;
  ngOnInit(): void {
    this.as.getUserState().subscribe(res => {
      if(!res) this.router.navigate(['/signin'])
      this.user = res;
    })
    // console.log(new Date(), new Date("Thu Jul 15 2021 15:32:49 GMT+0530 (India Standard Time)").get(), new Date().getDate())
  }

  checkmood(){
    this.db.collection("Users").doc(this.user.uid).collection("Moods").snapshotChanges().subscribe(res => {
      // if(res[0]);
    });
  }


  addstory(){
    var date = new Date()
    this.db.collection("Users").doc(this.user.uid).collection("Stories").doc(date.toString()).set({"story": "story", "Date": "Date"});
  }

  addtostory(){

  }

  addmood(mood){
    var date = new Date()
    this.db.collection("Users").doc(this.user.uid).collection("Moods").doc(date.toString()).set({"mood": mood});
  }

}
