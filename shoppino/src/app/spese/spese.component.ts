import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spese',
  templateUrl: './spese.component.html',
  styleUrls: ['./spese.component.css']
})
export class SpeseComponent implements OnInit {

  spesauno : number  = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
