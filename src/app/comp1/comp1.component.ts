import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Agile component";
  btnclick(){
    //alert("hello from "+this.title)
    const service = new myservice();
    service.onclickbtn(this.title)
  }
}
