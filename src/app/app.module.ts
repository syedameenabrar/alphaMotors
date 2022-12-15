import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceService } from 'src/service/service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';
import { FooterModule } from './modules/footer/footer.module';
import { HomeModule } from './modules/home/home.module';
import { ProfileModule } from './modules/profile/profile.module';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
 BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    ProfileModule,
    FooterModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
