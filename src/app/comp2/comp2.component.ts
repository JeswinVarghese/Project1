import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    title="IoT component"
    btnclick(){
        const service = new myservice()
        service.onclickbtn(this.title)
    }

}
