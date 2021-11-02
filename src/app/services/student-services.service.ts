import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../../../StudentRegistrations/src/app/student';


@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {
  Students: any;
  student: Student = new Student();
  constructor(private httpClient: HttpClient) { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phoneNo: new FormControl('', [Validators.required, Validators.minLength(8)]),
    address: new FormControl(''),
    gender: new FormControl(''),
    grade: new FormControl(''),
    course: new FormControl(0),
    birthDate: new FormControl(''),

  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: '',
      email: '',
      phoneNo: '',
      address: '',
      gender: '',
      grade: '',
      course: 0,
      birthDate: '',

    });
  }

  populateForm(data) {

    this.form.setValue(data);
  }
  public getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/students');

  }
  public getOne(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/student/' + id);

  }

  insertStudent(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/create', data);
  }


  updateStudent(id, data) {
    return this.httpClient.put('http://127.0.0.1:8000/api/update/' + id, data);
  }

  deleteStudent(id) {

    return this.httpClient.delete('http://127.0.0.1:8000/api/delete/' + id);

  }

}
