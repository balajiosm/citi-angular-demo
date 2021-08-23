import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({//decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//public
  title = 'hello balaji, welcome to Angular app!!!';
  firstname = 'Balaji';

  constructor(private appService: AppService) {

  }

  handleClick() {
    console.log(this.appService.save());
    console.log(this.firstname);
  }

  delete() {
    console.log("deleted button");
  }
}