import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.data).subscribe(
      resp => {
        this.authService.saveToken(resp.headers.get('Authorization'));
        this.router.navigate(['/home']);
      },
      err => {
        this.wrongLogin = true;
      }
    );
  }


}
