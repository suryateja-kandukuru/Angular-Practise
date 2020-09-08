import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
first:String="surya teja"
last:String=" Kandukuru"
person:boolean=true
  constructor() { }

  ngOnInit() {
  }

}
