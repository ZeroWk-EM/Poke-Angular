import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { CardComponent } from 'src/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }