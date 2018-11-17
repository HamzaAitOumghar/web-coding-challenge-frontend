import { Component, OnInit } from '@angular/core';
import { Shop } from '../../entities/shop';
import { ShopService } from '../../services/shop.service';
import * as jwt_decode from "jwt-decode";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shops:Shop[]=[];
  userEmail;
  isShopAdded=false;

  constructor(private shopService:ShopService,private authService :AuthService ) { }

  ngOnInit() {
    this.userEmail = jwt_decode(this.authService.loadToken()).sub;
    this.shopService.getAllShops().subscribe(
      (resp:any)=>{
        this.shops=resp;
      },
      err=>{
        console.log(err);
        
      }
    );
  }
  addNewPreferredShops(shop){
    this.shopService.addNewPreferredShop(this.userEmail,shop).subscribe(
      (resp:any)=>{
        this.isShopAdded=true;
      },
      err=>{
        console.log(err);
        
      }
    );
  }

}
