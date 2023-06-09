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
import { FavoritePageComponent } from 'src/page/favorite-page/favorite-page.component';
import { PokedexPageComponent } from 'src/page/pokedex-page/pokedex-page.component';
import { RegisterFormComponent } from 'src/components/register-form/register-form.component';
import { ValidePageComponent } from 'src/page/valide-page/valide-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    HeroComponent,
    RegisterPageComponent,
    LoginPageComponent,
    LoginFormComponent,
    FavoritePageComponent,
    PokedexPageComponent,
    RegisterFormComponent,
    ValidePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
