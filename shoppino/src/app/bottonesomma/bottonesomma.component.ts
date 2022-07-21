import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottonesomma',
  templateUrl: './bottonesomma.component.html',
  styleUrls: ['./bottonesomma.component.css']
})
export class BottonesommaComponent implements OnInit {

  guadagno: number = 10;
  spesa: number = 5; 
  risultato: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calcola(n1:number,n2:number):number{
    this.risultato=n1+n2;
    return this.risultato;

  }

}
