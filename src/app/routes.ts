import { Routes } from '@angular/router';


// Component
import { AnimesComponent } from './components/animes/animes.component';
import { MangasComponent } from './components/mangas/mangas.component';


 
export const RUTAS: Routes = [
     { path: 'animes', component: AnimesComponent },
     { path: 'animes/:term', component: AnimesComponent },
    
     
     { path: 'mangas', component : MangasComponent },
     { path: 'mangas/:term', component : MangasComponent },




     { path: '', pathMatch: 'full' ,  redirectTo: 'animes' },
     { path: '**', pathMatch: 'full' ,  redirectTo: 'animes' }
]
;