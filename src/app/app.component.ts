import { Component } from '@angular/core';
import {GetapiserviceService} from './getapiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular';
  // title="Get call api";
  data:any;
  constructor(private api:GetapiserviceService){}
ngOnInit(){
  this.api.getapi().subscribe((result)=>{
    console.warn("get data",result);
    this.data=result
    // this.title=data["title"];
    // return data
    
  })
}
}
