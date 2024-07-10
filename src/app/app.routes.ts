import { Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [
    {path:'', loadComponent: () => import('./Components/home/home.component')},
    {path:'login', loadComponent: () => import('./Components/login/login.component')},
    {path:'register', loadComponent: () => import('./Components/register/register.component')},
    {path:'dashboard',canActivate:[authGuard], loadComponent: () => import('./Components/dashboard/dashboard.component')},
    {path:'profile',canActivate:[authGuard], loadComponent: () => import('./Components/profile/profile.component')},
    {path:'logout', canDeactivate:[authGuard], loadComponent: () => import('./Components/logout/logout.component')},
    {path:'home', loadComponent: () => import('./Components/home/home.component')}
    
];
