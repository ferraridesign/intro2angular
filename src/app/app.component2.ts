import { Component } from '@angular/core';
/*
function log(target, name, descriptor){
	//console.log(target, name, descriptor)
	//store the original function in variable
	const original = descriptor.value
	//do some manipulations with descriptor.valie
descriptor.value= function(...args){
	console.log("arguments", args, " were passed in this function")
	const result = original.apply(this, args)
console.log("This result of function ", result)

return result
}	
//return descriptor
	return descriptor
}
*/
function log(className){
	console.log(className)
	return (...args) => {
		console.log("Arguments passed ", args)
		return new className(...args)
	}
}

@log
class myExampleClass{
	constructor(arg1, arg2){
		console.log("constructor fired")
	}
}

const myClass = new myExampleClass(5,10);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@log

export class AppComponent {
  title = 'intro2angular';
  constructor(){
  console.log("this was generated by the constructor ", this.aSimpleMethod(5,2))
  }
  //member decorator

  aSimpleMethod(a,b){
return a*a
  }
}
