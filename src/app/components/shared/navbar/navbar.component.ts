import { Component } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { Router,  ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private serviceAnime : AnimeService,
              private router : Router ,
              private rutaActiva : ActivatedRoute
    ) { 

   }

   filter:string;
   getGenders(){
    return this.serviceAnime.getGender()
   } 

   search(){
      this.router.navigate(['animes',this.filter])
   }

}
