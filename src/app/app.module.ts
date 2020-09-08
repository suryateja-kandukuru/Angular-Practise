import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { InterpolationComponent } from './template-fundamentals/interpolation/interpolation.component';
import { PropertyComponent } from './template-fundamentals/property/property.component';
import { EventBindingComponent } from './template-fundamentals/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './template-fundamentals/two-way-data-binding/two-way-data-binding.component';
import { TemplateReferenceComponent } from './template-fundamentals/template-reference/template-reference.component';
import { IfComponent } from './rendering-flows/if/if.component';
import { ForComponent } from './rendering-flows/for/for.component';
import { StyleBindingComponent } from './rendering-flows/style-binding/style-binding.component';
import { ClassBindingComponent } from './rendering-flows/class-binding/class-binding.component';
import { PipesComponent } from './rendering-flows/pipes/pipes.component';
import { ParentComponent } from './decorators/parent/parent.component';
import { ChildComponent } from './decorators/child/child.component';
import { HttpComponent } from './jsonData/http/http.component';


//service
import {HttpClientModule} from '@angular/common/http'
import {ServiceService} from './services/service.service';
import { ReactFormsComponent } from './forms/react-forms/react-forms.component'

//Reactive forms

import {ReactiveFormsModule} from '@angular/forms';
import { NoComponentComponent } from './no-component/no-component.component'
@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    TemplateReferenceComponent,
    IfComponent,
    ForComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    PipesComponent,
    ParentComponent,
    ChildComponent,
    HttpComponent,
    ReactFormsComponent,
    NoComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, HttpClientModule,ReactiveFormsModule
  ],
  providers: [
   ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
