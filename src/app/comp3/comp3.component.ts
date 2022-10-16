import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Innovative component"
  btnclick(){
    const service = new myservice()
    service.onclickbtn(this.title)
  }
}
