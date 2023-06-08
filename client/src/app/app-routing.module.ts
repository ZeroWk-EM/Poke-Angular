import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from 'src/components/Hero/hero.component';
import { HomePageComponent } from 'src/page/home-page/home-page.component';
import { LoginPageComponent } from 'src/page/login-page/login-page.component';
import { RegisterPageComponent } from 'src/page/register-page/register-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
