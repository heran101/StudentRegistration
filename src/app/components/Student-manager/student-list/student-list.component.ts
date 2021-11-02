import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {StudentServicesService} from '../../../services/student-services.service';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {StudentFormComponent} from '../student-form/student-form.component';
import {Student} from '../../../../../../StudentRegistrations/src/app/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  data: any;
  Student = new Student();

  public displayedColumns = [ 'name', 'gender', 'birthDate', 'address', 'phoneNo', 'email', 'course', 'grade', 'update', 'delete'];

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  public dataSource = new MatTableDataSource<Student>();
  constructor(public studentService: StudentServicesService,
              public dialog: MatDialog
  ) { }



  ngOnInit() {
    this.getAll();
  }



  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public customSort = (event) => {
    console.log(event);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

 onCreate() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    dialogconfig.width = '60%';
    this.dialog.open(StudentFormComponent, dialogconfig);
 }
 onEdit(id) {
   this.studentService.getOne(id).subscribe(res => {
     console.log(res);
     this.studentService.populateForm(res);
   });
   const dialogconfig = new MatDialogConfig();
   dialogconfig.disableClose = true;
   dialogconfig.autoFocus = true;
   dialogconfig.width = '60%';
   this.dialog.open(StudentFormComponent, dialogconfig);

  }
  public getAll = () => {
    this.studentService.getData()
      .subscribe(res => {
        this.dataSource.data = res as Student[];
      });
  }



  onDelete(id) {
    this.studentService.deleteStudent(id).subscribe(res => {
      this.getAll();
    });

  }

}
