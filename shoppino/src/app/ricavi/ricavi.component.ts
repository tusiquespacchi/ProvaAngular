import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ricavi',
  templateUrl: './ricavi.component.html',
  styleUrls: ['./ricavi.component.css']
})
export class RicaviComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.loadUser()
      
  }
 loadUser(): void{
  this.http.get('https://jsonplaceholder.typicode.com/posts?request=episodes&username=Nothing00').subscribe(res => {
    console.log(res);
  });
}


}
