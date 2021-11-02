import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {StudentServicesService} from '../../../services/student-services.service';
import {NotificationService} from '../../../services/notification.service';
import {MatDialogRef} from '@angular/material';
import {Student} from '../../../../../../StudentRegistrations/src/app/student';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  Students: any;
  Student: Student = new Student();


  constructor(public service: StudentServicesService,
              // private departmentService: DepartmentService,
              public notificationService: NotificationService,

              public dialogRef: MatDialogRef<StudentFormComponent>
) { }



  ngOnInit() {
    this.service.getData();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    // this.notificationService.success(':: Submitted successfully');
  }


  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('id').value) {
        this.service.insertStudent(this.service.form.value).subscribe(res => {
          console.log(res);
        });
      } else {
        this.service.updateStudent(this.service.form.get('id').value, this.service.form.value).subscribe(res => {
          console.log(res);
        });
      }
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
