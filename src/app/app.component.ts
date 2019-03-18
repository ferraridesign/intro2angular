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
  this.myVariable = ""
  constructor(){
    setInterval(() => { 
      this.myVariable = Math.random().toString()
  },500)
  }
  
}
