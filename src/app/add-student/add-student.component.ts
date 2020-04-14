import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../shared/services/student.service';
import { Student } from '../shared/models/student';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  @ViewChild('formAdd', {static: false}) formAdd: NgForm;

  constructor(private studentService: StudentService, private route: ActivatedRoute) { }
  public student = new Student();

  ngOnInit(): void {
    let id = this.route.snapshot.queryParams["id"];
    if (id) {
      this.getStudent(id);
    }
  }

  save() {
    if (!this.student.id) {
      this.studentService.addStudent({ ...this.student }).then((res) => {
        this.formAdd.resetForm();
      })
    } else {
      this.studentService.updateStudent(this.student);
    }
  }

  getStudent(id) {
    this.studentService.getStudent(id).subscribe(res => {
      this.student = res.data() as Student;
      this.student.id = res.id;
    });
  }

}
