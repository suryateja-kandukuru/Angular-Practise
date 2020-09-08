import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
clickedEvent:String
  constructor() { }
clicked(event)
{
  console.log(event);
  this.clickedEvent="Hey you clicked the button";
}
unclicked(event)
{
  console.log(event);
  this.clickedEvent="";
}
  ngOnInit() {
  }

}
