import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { HeroComponent } from 'src/components/Hero/hero.component';
import { RegisterPageComponent } from 'src/page/register-page/register-page.component';
import { LoginPageComponent } from 'src/page/login-page/login-page.component';
import { HomePageComponent } from 'src/page/home-page/home-page.component';
import { LoginFormComponent } from 'src/components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    HeroComponent,
    RegisterPageComponent,
    LoginPageComponent,
    LoginFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
