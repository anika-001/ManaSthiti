import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  activities:any;
  ngOnInit(): void {
    this.activities = [
      {
          "name": "Anatomy of Panic Attack",
          // "image":
          "link":"/game1",
      },
      {
          "name": "Jeopardy",
          // "image":
          "link":"/jeopardy",
      },
      {
          "name": "Comics",
          // "image":
          "link":"/comic",
      },
  ]
  }

}
