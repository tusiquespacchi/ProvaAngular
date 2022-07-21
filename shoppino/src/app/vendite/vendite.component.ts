import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-vendite',
  templateUrl: './vendite.component.html',
  styleUrls: ['./vendite.component.css']
})
export class VenditeComponent implements OnInit {

  vendita: number = 20;
  constructor() { }

  ngOnInit(): void {
  }

}
