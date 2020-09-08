import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HttpComponent } from './jsonData/http/http.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactFormsComponent } from './forms/react-forms/react-forms.component';
import { NoComponentComponent } from './no-component/no-component.component';

const routes: Routes = [
  {
    path:'interpolation',component:InterpolationComponent
  },
  {
    path:'property',component:PropertyComponent
  },
  {
    path:'eventBinding',component:EventBindingComponent
  },
  
  {
    path:'twoWayDataBinding',component:TwoWayDataBindingComponent
  },
  {
    path:'template-ref',component:TemplateReferenceComponent
  },
  {
    path:'if',component:IfComponent
  },
  {
    path:'for',component:ForComponent
  },
  {
    path:'style',component:StyleBindingComponent
  },
  {
    path:'class',component:ClassBindingComponent
  },
  {
    path:'pipe',component:PipesComponent
  },
  {
    path:'getapi',component:HttpComponent
  },
  {
    path:'form',component:ReactFormsComponent
  },
  {
    path:'**',component:NoComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
