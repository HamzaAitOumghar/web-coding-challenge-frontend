import { Component, OnInit } from '@angular/core';
import { Shop } from '../../entities/shop';
import * as jwt_decode from "jwt-decode";
import { AuthService } from '../../services/auth.service';
import { ShopService } from '../../services/shop.service';


@Component({
  selector: 'app-preferred-shops',
  templateUrl: './preferred-shops.component.html',
  styleUrls: ['./preferred-shops.component.css']
})
export class PreferredShopsComponent implements OnInit {

  preferredShops: Shop[] = [];
  userEmail;
  constructor(private authService: AuthService, private shopService: ShopService) { }

  ngOnInit() {
    this.userEmail = jwt_decode(this.authService.loadToken()).sub;
    this.shopService.getPreferredShops(this.userEmail).subscribe(
      (resp: any) => {
        console.log(resp);
        this.preferredShops = resp;
      },
      err => {
        console.log(err);
      }
    );
  }
  remove(s: Shop) {
    this.shopService.removePreferredShop(this.userEmail, s).subscribe(
      resp => {
        this.ngOnInit();
      }, 
      err => {
          console.log(err);
          
      }
    );
  }
}
