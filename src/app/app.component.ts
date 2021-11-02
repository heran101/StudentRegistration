import { Component } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {StudentServicesService} from './services/student-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentReg';
  update = false;
  students: any;
  constructor(updates: SwUpdate, private services: StudentServicesService) {
    updates.available.subscribe(event => {
      // this.update = true;
      updates.activateUpdate().then(() => document.location.reload());
    });
  }
  gnOnInit() {
    this.services.getData().subscribe(res => {
      this.students = res;
      console.log(res);
    });
  }
}
