import { Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard';
import HomeComponent from './Components/home/home.component';
import LoginComponent from './Components/login/login.component';
import RegisterComponent from './Components/register/register.component';
import DashboardComponent from './Components/dashboard/dashboard.component';
import ProfileComponent from './Components/profile/profile.component';
import LogoutComponent from './Components/logout/logout.component';
import { homedir } from 'os';

export const routes: Routes = [
    // {path:'', loadComponent: () => import('./Components/home/home.component')},
    // {path:'login', loadComponent: () => import('./Components/login/login.component')},
    // {path:'register', loadComponent: () => import('./Components/register/register.component')},
    // {path:'dashboard',canActivate:[authGuard], loadComponent: () => import('./Components/dashboard/dashboard.component')},
    // {path:'profile',canActivate:[authGuard], loadComponent: () => import('./Components/profile/profile.component')},
    // {path:'logout', canDeactivate:[authGuard], loadComponent: () => import('./Components/logout/logout.component')},
    // {path:'home', loadComponent: () => import('./Components/home/home.component')}

    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'profile', component:ProfileComponent},
    {path:'logout', component:LogoutComponent},
    {path:'home', component:HomeComponent}
    
];
