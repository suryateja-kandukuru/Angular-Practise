import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
result:any
  constructor(private service:ServiceService) { }

  ngOnInit() {
this.service.getData().subscribe(result=>{
  this.result=result;
  console.log(this.result)
})
  }

}
