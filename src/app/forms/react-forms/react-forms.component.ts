import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-react-forms',
  templateUrl: './react-forms.component.html',
  styleUrls: ['./react-forms.component.css']
})
export class ReactFormsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
regForm=this.fb.group({
  name:['',[Validators.required,Validators.minLength(5)]],
  age:['',[Validators.required]]
})
  ngOnInit() {
  }
onSubmit()
{
  console.log(this.regForm.value)
}
}
