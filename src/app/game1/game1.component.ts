import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss']
})
export class Game1Component implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  page1: boolean = true;
  showcont:boolean = false;
  page1cnt: number = 0;
  locations1 = [
    { x: '30', y: '25' },
    { x: '35', y: '60' },
    { x: '45', y: '40' },
    { x: '55', y: '75' },
    { x: '45', y: '10' },
    { x: '60', y: '25' },
  ]

  locations2 = [
    { x: '10', y: '45' },
    { x: '80', y: '45' },
    { x: '45', y: '25' },
    { x: '35', y: '75' },
    { x: '55', y: '60' },
    { x: '55', y: '95' },
  ]

  ngOnInit(): void {


  }

  click(x: any) {
    var temp = '#btn' + x;
    $(temp).css('display', 'none');
    $("#rect" + x).css('display', 'block');

    this.page1cnt++;
    if(this.page1cnt == this.locations1.length)
    {
      this.showcont = true;
    }
  }

  toggle(){
    this.page1 = !this.page1;
    console.log(this.page1+" Page1");
  }

}
