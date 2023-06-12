import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from 'src/components/Hero/hero.component';
import { FavoritePageComponent } from 'src/page/favorite-page/favorite-page.component';
import { HomePageComponent } from 'src/page/home-page/home-page.component';
import { LoginPageComponent } from 'src/page/login-page/login-page.component';
import { NotFoundPageComponent } from 'src/page/not-found-page/not-found-page.component';
import { PersonalPageComponent } from 'src/page/personal-page/personal-page.component';
import { PokedexPageComponent } from 'src/page/pokedex-page/pokedex-page.component';
import { RegisterPageComponent } from 'src/page/register-page/register-page.component';
import { ValidePageComponent } from 'src/page/valide-page/valide-page.component';
import { authGuard } from 'src/service/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent,title:"Poke Angular" },
  {
    path: 'login',
    canActivate: [authGuard],
    component: LoginPageComponent,
    title: 'Login Page',
  },
  {
    path: 'register',
    canActivate: [authGuard],
    component: RegisterPageComponent,
    title: 'Register Page',
  },
  {
    path: 'validate',
    canActivate: [authGuard],
    component: ValidePageComponent,
    title: 'Validate Page',
  },
  {
    path: 'validate/:id',
    canActivate: [authGuard],
    component: ValidePageComponent,
    title: 'Validate Page',
  },
  {
    path: 'pokedex',
    canActivate: [authGuard],
    component: PokedexPageComponent,
    title: 'Pokedex',
  },
  {
    path: 'me',
    canActivate: [authGuard],
    component: PersonalPageComponent,
    title: 'Personal Area',
  },
  {
    path: 'favorites',
    canActivate: [authGuard],
    component: FavoritePageComponent,
    title: 'Favorite Page',
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
