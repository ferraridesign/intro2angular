import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

myvariable = "Mike"
bitwiseOR = 2 | 5 //10 101
i = 0
someVar = Math.random()
  constructor() { }

  doSomeHeavyTask(){
  	console.log(`Called ${this.i++} times`)
  }
//lifecycle hook
  ngOnInit() {
  	/*setInterval(()=>{
  		this.someVar = Math.random()
  	},50)*/
  }

}
