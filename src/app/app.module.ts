import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from  '@angular/fire/database';

import { environment } from 'src/environments/environment';
import { Routes, RouterModule } from '@angular/router'
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './shared/services/login.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';

const routes: Routes = [
  { path: 'add-student', component: AddStudentComponent },
  { path: 'all-students', component: ListStudentsComponent },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetPwdComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentsComponent,
    AuthComponent,
    RegisterComponent,
    ResetPwdComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule, RouterModule.forRoot(routes),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    AngularFireAuthModule,
  ],
  providers: [ToastrService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
