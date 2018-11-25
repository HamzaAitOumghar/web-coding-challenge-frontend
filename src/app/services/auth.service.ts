import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  url = "http://localhost:8080/";


  constructor(private http : HttpClient,private router:Router) { }

  header: HttpHeaders = new HttpHeaders(
    {
      'Authorization': localStorage.getItem('token')
    }

  );


  public login(data) {
    return this.http.post(this.url + "login", data, { observe: 'response' });
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
  }

  idLoggedIn(){
    return this.loadToken() !== null ;
  }
  loadToken() {
    return localStorage.getItem('token');
  }
  
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  public signUp(data){
    return this.http.post(this.url+"signup",data);
  }
}
