import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from 'src/components/Hero/hero.component';
import { FavoritePageComponent } from 'src/page/favorite-page/favorite-page.component';
import { HomePageComponent } from 'src/page/home-page/home-page.component';
import { LoginPageComponent } from 'src/page/login-page/login-page.component';
import { PokedexPageComponent } from 'src/page/pokedex-page/pokedex-page.component';
import { RegisterPageComponent } from 'src/page/register-page/register-page.component';
import { ValidePageComponent } from 'src/page/valide-page/valide-page.component';
import { authGuard } from 'src/service/auth.guard';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', canActivate: [authGuard], component: LoginPageComponent },
  {
    path: 'register',
    canActivate: [authGuard],
    component: RegisterPageComponent,
  },
  {
    path: 'validate',
    canActivate: [authGuard],
    component: ValidePageComponent,
  },
  {
    path: 'validate/:id',
    canActivate: [authGuard],
    component: ValidePageComponent,
  },
  {
    path: 'pokedex',
    canActivate: [authGuard],
    component: PokedexPageComponent,
  },
  {
    path: 'favorites',
    canActivate: [authGuard],
    component: FavoritePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
