import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
items:String[]=["paste","brush","tongue cleaner","mouth washner","spray"]
  ngOnInit() {
  }
data(d)
{
  console.log(d)
}
datas(data)
{
  console.log(data)
}
}
