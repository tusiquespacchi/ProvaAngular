import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

campouno: number = 0;
campodue: number = 0;
risultato: number = 0;

selectField: FormControl = new FormControl();

form: FormGroup;


  constructor(public fb: FormBuilder) { 

    this.form = fb.group({
      'numerouno': ['', Validators.required],
      'numerodue': ['', Validators.required],
      'date': ['']
    });
  }

  ngOnInit(): void {


  }
  send(): void{
      if(!this.form.valid){
        alert("COMPILA");
        return;
      }
      
      console.log(
        this.campouno=this.form.controls['numerouno'].value,
        this.campodue=this.form.controls['numerodue'].value,
        this.risultato=this.campouno-this.campodue,
        this.form.controls['numerouno'].value,
        this.form.controls['numerodue'].value,
        this.form.controls['date'].value,
        
        
      );
  }
 
    }
    



