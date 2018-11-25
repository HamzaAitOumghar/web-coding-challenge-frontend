import { Component, OnInit } from '@angular/core';
import { Shop } from '../../entities/shop';
import { ShopService } from '../../services/shop.service';
import * as jwt_decode from "jwt-decode";
import { AuthService } from '../../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shops:Shop[]=[];
  userEmail;
  isShopAdded=false;

  constructor(private shopService:ShopService,private authService :AuthService ,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.userEmail = jwt_decode(this.authService.loadToken()).sub;
    this.shopService.getAllShops().subscribe(
      (resp:any)=>{
        this.shops=resp;
        
        this.shops.forEach(function(shop){
          shop.isLiked=true;
        });
        
        this.spinner.hide();
        

      },
      err=>{
        console.log(err);
        this.spinner.hide();

      }
    );
  }
  addNewPreferredShops(shop){
    this.spinner.show();

    this.shopService.addNewPreferredShop(this.userEmail,shop).subscribe(
      (resp:any)=>{
        this.spinner.hide();
        this.isShopAdded=true;
      },
      err=>{
        console.log(err);
        this.spinner.hide();
      }
    );
  }

  dislikeProduct(shop:Shop){
      shop.isLiked=false;

      setTimeout(function(){
        shop.isLiked=true;
      },3000);
  }

}
