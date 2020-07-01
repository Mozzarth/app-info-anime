import { Component } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private serviceAnime : AnimeService ) { 

   }

   getGenders(){
    return this.serviceAnime.getGender()
   }

}
