import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';
import { TipoContenido } from 'src/app/const/tipo-contenido.enum';


@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html'
})
export class AnimesComponent {
  animes : [] = []
  animesEncontrados : [] = []
  constructor(
              private animeService : AnimeService,
              private rutaActiva : ActivatedRoute

    ) {  }
   
    ngOnInit(): void {
      // console.log(this.rutaActiva.snapshot.params.term)
      this.rutaActiva.params.subscribe(data=>{
        if(data.term){
          this.getAnimeFilter(data.term)
        }else{
          this.getTop()
        }
      })
     
    }

   getTop(){
    this.animeService.getTop(TipoContenido.anime).subscribe((data:any)=>{
      this.animes = data
    })
   }
   
   getAnimeFilter(filtro:string){
    this.animeService.filterAnime(filtro,TipoContenido.anime).subscribe((data:any)=>{
      this.animesEncontrados = data
    })
   }


}
