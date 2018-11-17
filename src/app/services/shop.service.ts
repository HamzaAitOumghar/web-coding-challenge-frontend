import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ShopService {


  url = "http://localhost:8080/";

  header: HttpHeaders = new HttpHeaders(
    {
      'Authorization': localStorage.getItem('token')
    });


  constructor(private http: HttpClient, private router: Router) { }


  public getAllShops() {
    return this.http.get(this.url + "shop/all",{ headers: this.header });
  }

  public getPreferredShops(email) {
    return this.http.get(this.url + "shop/preferredShops/"+email,{ headers: this.header });
  }

  public addNewPreferredShop(email, shop) {
    return this.http.post(this.url + "shop/addLikedShop/" + email, shop,{ headers: this.header });
  }

  public removePreferredShop(email, shop) {
    return this.http.post(this.url + "shop/removeLikedShop/" + email, shop,{ headers: this.header });
  }

}
