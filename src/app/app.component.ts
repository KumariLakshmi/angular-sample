import { Component } from '@angular/core';
import {GetapiserviceService} from './getapiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular';
  title="Get call api ";
  constructor(private api:GetapiserviceService){

  }
ngOnInit(){
  this.api.getapi().subscribe((data)=>{
    console.log("get api data",data);
    
  })
}
}
