import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { log } from 'util';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isCreated = false;

  signUpForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  }, { validators: this.checkPasswords });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  signUp() {
    this.authService.signUp(this.signUpForm.value).subscribe(
      (resp) => {
        this.isCreated = true;
        this.signUpForm.reset();
      },
      err => {
        console.log(err);
      }
    );


  }

}
