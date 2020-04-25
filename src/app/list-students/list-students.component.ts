import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/services/student.service';
import { Student } from '../shared/models/student';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  students: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getStudentsList().subscribe(data => {
      this.students = data.map(e => {
        return {
          id : e.payload.doc.id,
          ...e.payload.doc.data() as Student
        };
      })
    })
  }

  delete(id: string) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: 'red',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.studentService.deleteStudent(id);
      }
    })
  }

}
