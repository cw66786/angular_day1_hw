import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_day1_hw';

 public  colors: string[] = ["Blue","Black","Red","Green"];
 titleColor: string = "";

 

 colorChange =(str: string)=> {
  this.titleColor = str;
 }

  


}
