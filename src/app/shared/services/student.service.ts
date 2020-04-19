import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from '../../shared/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private fireStore: AngularFirestore) { }

  addStudent(student: Student) {
    return this.fireStore.collection('students').add(student);
  }

  getStudentsList() {
    return this.fireStore.collection('students').snapshotChanges();
  }

  deleteStudent(StudentId: string) {
    this.fireStore.doc('students/' + StudentId).delete();
  }

  getStudent(id :string) {
    return this.fireStore.doc('students/' + id).get();
  }
}
