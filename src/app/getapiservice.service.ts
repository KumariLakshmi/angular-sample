import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetapiserviceService {

  constructor(private http:HttpClient) { }

getapi(){
  return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
}


}
