import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreferredShopsComponent } from './components/preferred-shops/preferred-shops.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {AuthGuard} from './auth.guard';

export const router: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'preferredshop',
        component: PreferredShopsComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignUpComponent,
    },
    {
        path : '**',
        redirectTo:'home'
    }
];