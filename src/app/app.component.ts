import { Component } from '@angular/core';
import {HelloComponent} from './hello/hello.component'
import {RecordsService} from './records.service';

interface myData {
  obj: Object
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

records = {}

constructor(private myFirstService: RecordsService){


}

ngOnInit(){
	this.records = this.myFirstService.getData().subscribe(data =>{
      console.log("We got ", data.obj)
    })
}


 /* title = 'intro2angular';
    text = 'intro2angular';

  myVariable = 'app'
  myDisabledValue = false

  constructor(){
    this.myDisabledValue = false
  this.myVariable = ""
    setInterval(() => { 
      this.myVariable = Math.random().toString()
      this.myDisabledValue = Math.random() > 0.5
   },500)
  }*/
  
}
