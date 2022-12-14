import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { RegisterComponent } from './auth/register/register/register.component';
import { CategoryComponent } from './modules/category/category.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ProfileComponent } from './modules/profile/profile/profile.component';
import { SingleProductComponent } from './modules/single-product/single-product/single-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'cat',
    component: CategoryComponent
  },
  {
    path: 'single-product',
    component: SingleProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
