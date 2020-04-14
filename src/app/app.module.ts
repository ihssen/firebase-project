import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from  '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { Routes, RouterModule } from '@angular/router'
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  { path: 'add-student', component: AddStudentComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule, RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
