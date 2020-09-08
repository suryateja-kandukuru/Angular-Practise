import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
counter=0;

@Input() item:[]

@Output() valueChanged = new EventEmitter();
@Output() types=new EventEmitter();


valueChangedd()
{
this.counter=this.counter+1;
this.valueChanged.emit(this.counter)
this.types.emit(['surya','teja','kandukuru'])
}
  constructor() { }

  ngOnInit() {
  }

}
