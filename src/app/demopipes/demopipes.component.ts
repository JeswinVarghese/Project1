import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrls: ['./demopipes.component.css']
})
export class DemopipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "banglore"
  // today = "03-02-2000"; 
  today = Date()  //returns todays date

  user = {
          id:100,
          name:"Steve",
          DOB:"21-07-2000",
          salary:25000
  }
}
