import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/services/student.service';
import { Student } from '../shared/models/student';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  students: Student[];

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getStudentsList().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Student
        };
      })
    });
  }

  delete(id: string) {
    this.studentService.deleteStudent(id);
  }
}
