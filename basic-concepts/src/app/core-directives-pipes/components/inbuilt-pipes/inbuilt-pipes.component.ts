import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipes',
  templateUrl: './inbuilt-pipes.component.html',
  styleUrl: './inbuilt-pipes.component.scss'
})
export class InbuiltPipesComponent {

  date = new Date()
  title = 'Hello angular users!'
  myNum = 34.67986896
  obj = {name:'dhanashri', surname:'patil', role_no:123}
  arr = [
    {name:'dhanashri', surname:'patil', role_no:123},
    {name:'swati', surname:'yesle', role_no:103},
    {name:'sujata', surname:'patil', role_no:183}
  ]
}
