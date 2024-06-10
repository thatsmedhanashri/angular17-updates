import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRxjsRoutingModule } from './operators-rxjs-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OperatorsRxjsRoutingModule,
    HttpClientModule
  ]
})
export class OperatorsRxjsModule { }
