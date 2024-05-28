import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreDirectivesPipesRoutingModule } from './core-directives-pipes-routing.module';
import { HomeComponent } from './components/home/home.component';
import { Child1Component } from './components/child1/child1.component';
import { InbuiltPipesComponent } from './components/inbuilt-pipes/inbuilt-pipes.component';


@NgModule({
  declarations: [
    HomeComponent,
    Child1Component,
    InbuiltPipesComponent
  ],
  imports: [
    CommonModule,
    CoreDirectivesPipesRoutingModule
  ]
})
export class CoreDirectivesPipesModule { }
