import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

interface myData {
  obj: Object
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {
      
  }
//rxjs asynchronos pipe where your endpoint is where u subscribe to
  //php -$ localhost:1234 to run a local environment
getData(){
		return this.http.get<myData>('http://localhost:1234/file.php')
   
}

}

