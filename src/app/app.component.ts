import { Component } from '@angular/core';
import {HelloComponent} from './hello/hello.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro2angular';
  myVariable = 'app'
  myDisabledValue = false
  constructor(){
    this.myDisabledValue = false
  this.myVariable = ""
    setInterval(() => { 
      this.myVariable = Math.random().toString()
      this.myDisabledValue = Math.random() > 0.5
   },500)
  }
  
}
