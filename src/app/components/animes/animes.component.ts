import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { TipoContenido } from 'src/app/const/tipo-contenido.enum';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html'
})
export class AnimesComponent {
  animes : [] = []
  constructor(
    private animeService : AnimeService
  ) { 
    this.getTop()
   }

   getTop(){
    this.animeService.getTop(TipoContenido.anime).subscribe((data:any)=>{
      this.animes = data
      // console.log(this.animes)
    })
   }


}
