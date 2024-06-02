import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface studentDataType{
  name: string,
  surname: string,
  roleNo: number
}

const studentDataDef: studentDataType = {
  name: 'Dhanashri',
  surname: 'Patil',
  roleNo: 100
}

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

  student_info = new BehaviorSubject<studentDataType>(studentDataDef)

  user$ : Observable<studentDataType> = this.student_info.asObservable()

  constructor() { }

  setData(){
    let student1 : studentDataType = {
      name: 'Rutuja',
      surname: 'Thombare',
      roleNo: 200
    }
    this.student_info.next(student1)
  }
}
