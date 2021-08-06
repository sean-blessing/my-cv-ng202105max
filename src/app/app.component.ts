import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-cv-ng202105';
  name: string = 'Sean Blessing';
  address: string = '111 Test Way';
  email: string = 'sean@blessingtechnology.com';
  phone: string = '513-600-7096';
}
