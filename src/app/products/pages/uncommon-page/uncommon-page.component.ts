import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Ivan';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male:'wife',
    female:'husband'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n Plural
  public customers: string[] = ['George','Ashley', 'Mary', 'John', 'Ivan', 'Dayse', 'Susan'];
  public customerMap = {
    "=0": "we don't have any customer waiting",
    "=1": "we have just 1 customer waiting",
    "other": "we have # customers waiting"
  }

  deleteCustomer():void {
    this.customers.shift();
  }

  //KeyValue pipe

  public person = {
    name: 'Ivan',
    age: 29,
    address: 'Limerick, Ireland',
  }

  //Async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:',value))
  );

  public promiseValue:Promise<string> = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      resolve('We have data in the promise');
    },3500)
  })
}
