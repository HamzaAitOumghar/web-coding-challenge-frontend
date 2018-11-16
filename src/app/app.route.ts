import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreferredShopsComponent } from './components/preferred-shops/preferred-shops.component';
import { LoginComponent } from './components/login/login.component';


export const router: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    }
    ,
    {
        path: 'preferredshop',
        component: PreferredShopsComponent,
    }
    ,
    {
        path: 'login',
        component: LoginComponent,
    }
];