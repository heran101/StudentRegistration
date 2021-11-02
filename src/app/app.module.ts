import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StudentComponent } from './components/Student-manager/student/student.component';
import { StudentFormComponent } from './components/Student-manager/student-form/student-form.component';



import {MaterialModule} from './material/material.module';
import {StudentServicesService} from './services/student-services.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule, MatDialogModule, MatDialogRef} from '@angular/material';
import {StudentListComponent} from './components/Student-manager/student-list/student-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    HttpClientModule,


    FormsModule,
    ReactiveFormsModule,

    MaterialModule,

    MatDatepickerModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),




  ],
  providers: [StudentServicesService ,
    {
      provide: MatDialogRef,
      useValue: {}
    },
    StudentServicesService
  ],
  bootstrap: [AppComponent],
  entryComponents: [StudentFormComponent]
})
export class AppModule { }
