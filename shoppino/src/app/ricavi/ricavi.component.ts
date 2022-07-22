import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';



@Component({
  selector: 'app-ricavi',
  templateUrl: './ricavi.component.html',
  styleUrls: ['./ricavi.component.css']
})
export class RicaviComponent implements OnInit {

users: Employee[] = new Array();
  

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.loadUser();
    
      
  }
 loadUser(): void{
  this.http.get<Employee[]>('https://jsonplaceholder.typicode.com/posts?id=1').subscribe(res => {
    console.log(res);
    this.users = res;
    
  });

  
}


}

