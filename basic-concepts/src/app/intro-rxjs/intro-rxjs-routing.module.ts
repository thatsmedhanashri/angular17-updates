import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComp1Component } from './components/my-comp1/my-comp1.component';

const routes: Routes = [
  {
    path: '',
    component: MyComp1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroRxjsRoutingModule { }
