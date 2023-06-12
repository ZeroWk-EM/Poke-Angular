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
import { ValidateFormComponent } from 'src/components/validate-form/validate-form.component';
import { PokemonCardComponent } from 'src/components/pokemon-card/pokemon-card.component';
import { SectionCardComponent } from 'src/components/section-card/section-card.component';
import { AuthService } from 'src/service/auth.service';
import { authGuard } from 'src/service/auth.guard';
import { NotFoundError } from 'rxjs';
import { NotFoundPageComponent } from 'src/page/not-found-page/not-found-page.component';
import { FooterComponent } from 'src/components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    HeroComponent,
    FavoritePageComponent,
    PokedexPageComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    ValidePageComponent,
    ValidateFormComponent,
    PokemonCardComponent,
    SectionCardComponent,
    NotFoundPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, authGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
