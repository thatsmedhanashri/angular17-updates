import { Injectable } from '@angular/core';

@Injectable()
export class Service1Service {

  serviceData: any = 'xyz'
  constructor() {
    console.log("service 1 called")
   }

   getData(){
    return this.serviceData
   }
}
