import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = {
    "email": "",
    "password": ""
  }
  wrongLogin: boolean = false;


  constructor(private authService: AuthService, private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  login() {
    this.spinner.show();
    this.authService.login(this.data).subscribe(
      resp => {
        this.authService.saveToken(resp.headers.get('Authorization'));
        this.spinner.hide();
        this.router.navigate(['/home']);
      },
      err => {
        this.wrongLogin = true;
        this.spinner.hide();

      }
    );
  }


}
