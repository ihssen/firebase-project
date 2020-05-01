import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {

  username: string;
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  resetPwd() {
    this.loginService.resetPassword(this.username);
  }
}
