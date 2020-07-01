import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

// Ruta
import { RUTAS } from './routes'
import { RouterModule } from '@angular/router'

// Servicios
// import { AnimeService } from './services/anime.service'

// Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardComponent } from './components/shared/card/card.component';
import { MangasComponent } from './components/mangas/mangas.component';
import { AnimesComponent } from './components/animes/animes.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    MangasComponent,
    AnimesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [
    // AnimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
