
import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginUserPageComponent } from './pages/login-user-page/login-user-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { DetailPagesComponent } from './pages/detail-pages/detail-pages.component';

export const routes: Routes = [{path:'', component: LandingPageComponent},
{path:'home', component: HomePageComponent},
{path:'login', component:LoginUserPageComponent},
{path:'users', component: UsersPageComponent},
{path:'users/:id', component: DetailPagesComponent}
    
];
