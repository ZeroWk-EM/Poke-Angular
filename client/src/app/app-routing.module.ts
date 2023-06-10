import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from 'src/components/Hero/hero.component';
import { FavoritePageComponent } from 'src/page/favorite-page/favorite-page.component';
import { HomePageComponent } from 'src/page/home-page/home-page.component';
import { LoginPageComponent } from 'src/page/login-page/login-page.component';
import { PokedexPageComponent } from 'src/page/pokedex-page/pokedex-page.component';
import { RegisterPageComponent } from 'src/page/register-page/register-page.component';
import { ValidePageComponent } from 'src/page/valide-page/valide-page.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'validate', component: ValidePageComponent },
  { path: 'validate/:id', component: ValidePageComponent },
  { path: 'pokedex', component: PokedexPageComponent },
  { path: 'favorites', component: FavoritePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
