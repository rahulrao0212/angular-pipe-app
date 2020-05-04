import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-app'; 
  name: string = 'pipe Example' ; 
  toDate: Date = new Date(); 
  msg: string = "Hi I am an app";
  num:number =  9542.14554;
  per: number= .74142;
  cur: number = 175;
}
