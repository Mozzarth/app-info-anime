import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { TipoContenido,Gender } from '../const/tipo-contenido.enum'
import { collectExternalReferences } from '@angular/compiler';


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

filterAnime(filter:string = 'nanatzu',type:TipoContenido){
    return this.http.get(`${this.URL}/search/${type.toString()}?q=${filter}&page=1`)
              .pipe(map((data:any) =>{
                return data.results
              }))
}

getGender(){
  let genders = []

   for (let gender in Gender ) {
    genders.push(gender.toString())
  } 
  return genders
}

}
