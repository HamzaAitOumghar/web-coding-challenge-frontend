import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { router } from './app.route';
import { PreferredShopsComponent } from './components/preferred-shops/preferred-shops.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreferredShopsComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
