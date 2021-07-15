import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filldb',
  templateUrl: './filldb.component.html',
  styleUrls: ['./filldb.component.scss']
})
export class FilldbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    Image: new FormControl(''),
    Message: new FormControl(''),
    Number: new FormControl(''),
  })

}
