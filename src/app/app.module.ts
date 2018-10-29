import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { MainComponent } from './componentes/main/main.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    NotFoundComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
