import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { TipoContenido } from '../const/tipo-contenido.enum'


@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private URL = "https://api.jikan.moe/v3"
  constructor(
    private http : HttpClient
  ) { }

getTop(type:TipoContenido){
    return  this.http.get(`${this.URL}/top/${type}`)
               .pipe( map((data:any)=> {return data.top}  )
               
                )

  }
getAnime(id:number){
  return this.http.get(`${this.URL}/anime/${id}`)

}

filterAnime(filter:string = 'nanatzu',type:TipoContenido = TipoContenido.anime){
  return this.http.get(`${this.URL}/search/${type.toString()}?${filter}&page=1`)
  // https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=1
}

getGender(){
  let genders = []
   for (let gender in TipoContenido) {
    genders.push(gender.toString())
  } 
  return genders
}

}
