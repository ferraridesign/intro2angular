import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {
      
  }

getData(){
		return [
	{
		name:'Mehul',
		online:true
	},
	{
		name:'ABC',
		online:false
	},
	{
		name:'XYZ',
		online:true
	},
	{
		name:'ABC',
		online:false
	},
	{
		name:'XYZ',
		online:true
	},
	{
		name:'ABC',
		online:false
	},
	{
		name:'XYZ',
		online:true
	}
] 
}

}

