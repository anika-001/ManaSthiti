import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  games: any;
  comics: any;
  ngOnInit(): void {
    this.games = [
      {
        "name": "Anatomy of Panic Attack",
        // "image":
        "link": "/game1",
      },
      {
        "name": "Jeopardy",
        // "image":
        "link": "/jeopardy",
      },
    ]

    this.comics = [
      {
        "name": "Kill me Heal me",
        // "image":
        "link": "/comic",
      },
    ]
  }

}
