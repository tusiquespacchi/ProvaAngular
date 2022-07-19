import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestione',
  templateUrl: './gestione.component.html',
  styleUrls: ['./gestione.component.css']
})
export class GestioneComponent implements OnInit {
  
  @Input() venditina: number = 5; 
  @Input() spesa: number = 1;
  @Input() mensile: number = 1;
  risultato: number = 0;

  
  onSubmit(): void {
    // Process checkout data here
    
    
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
