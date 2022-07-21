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
campotre: number = 0;
campoquattro: number = 0;
campocinque: number = 0;
camposei: number = 0;
camposette: number = 0;
campootto: number = 0;
camponove: number = 0;
campodieci: number = 0;
campoundici: number = 0;
campododici: number = 0;


totalespese: number = 0;



selectField: FormControl = new FormControl();

form: FormGroup;


  constructor(public fb: FormBuilder) { 

    this.form = fb.group({
      'numerouno': ['', Validators.required],
      'numerodue': ['', Validators.required],
      'numerotre': ['', Validators.required],
      'numeroquattro': ['', Validators.required],
      'numerocinque': ['', Validators.required],
      'numerosei': ['', Validators.required],
      'numerosette': ['', Validators.required],
      'numerootto': ['', Validators.required],
      'numeronove': ['', Validators.required],
      'numerodieci': ['', Validators.required],
      'numeroundici': ['', Validators.required],
      'numerododici': ['', Validators.required]
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
        this.campotre=this.form.controls['numerotre'].value,
        this.campoquattro=this.form.controls['numeroquattro'].value,
        this.campocinque=this.form.controls['numerocinque'].value,
        this.camposei=this.form.controls['numerosei'].value,
        this.camposette=this.form.controls['numerosette'].value,
        this.campootto=this.form.controls['numerootto'].value,
        this.camponove=this.form.controls['numeronove'].value,
        this.campodieci=this.form.controls['numerodieci'].value,
        this.campoundici=this.form.controls['numeroundici'].value,
        this.campododici=this.form.controls['numerododici'].value,
        this.totalespese=this.campouno+this.campodue+this.campotre+this.campoquattro+this.campocinque+this.camposei+this.camposette+this.campootto+this.camponove+this.campodieci+this.campoundici+this.campododici,
        this.form.controls['numerouno'].value,
        this.form.controls['numerodue'].value,
        this.form.controls['numerotre'].value,
        this.form.controls['numeroquattro'].value,
        this.form.controls['numerocinque'].value,
        this.form.controls['numerosei'].value,
        this.form.controls['numerosette'].value,
        this.form.controls['numerootto'].value,
        this.form.controls['numeronove'].value,
        this.form.controls['numerodieci'].value,
        this.form.controls['numeroundici'].value,
        this.form.controls['numerododici'].value,
        
        
      );
  }
 
    }
    



