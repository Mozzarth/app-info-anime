import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { TipoContenido } from 'src/app/const/tipo-contenido.enum';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styles: [
  ]
})
export class MangasComponent {
  mangas : [] = []
  constructor(private animeService : AnimeService ) { 
    this.getTop()
  }

  getTop(){
    this.animeService.getTop(TipoContenido.manga).subscribe((data)=>{
      this.mangas = data
      console.log(this.mangas)
    })
  }

}
