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
 title = 'Angular 6 Project!';
   //array of months.
   months = ["January", "February", "March", "April",
      "May", "June", "July", "August", "September",
      "October", "November", "December"];
   isavailable = false;
   myClickFunction(event) {
      this.isavailable = false;
   }
   changemonths(event) {
      alert("Changed month from the Dropdown");
      console.log(event);
   }
   todaydate = new Date();
   jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
   months_new = ["Jan", "Feb", "Mar", "April", "May", "Jun",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
records = []
   months = ["January", "February", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"];
   isavailable = true;

constructor(private myFirstService: RecordsService){


}

ngOnInit(){
 this.myFirstService.getData().subscribe(data =>{
     this.records = data.obj
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
