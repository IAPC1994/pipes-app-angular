import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLowerCase: string = 'ivan';
  public nameUpperCase: string = 'IVAN';
  public fullName: string = 'IvAN PaNUSsis';

  public customDate: Date =  new Date();
}
