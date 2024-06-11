import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';

const routes: Routes = [
  {
    path: '',
    component: Comp3Component
  },
  {
    path: 'comp4',
    component: Comp4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2PathmatchRoutingModule { }
