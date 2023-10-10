import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleList, Noticia, Result } from '../interfaces/noticias.inteface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasServices {

  private urlObtenerFavoritos = "http://localhost:8080/apiSodexo/obtenerFavoritos";
  private urlBuscarFavoritosPorTitulo = "http://localhost:8080/apiSodexo/buscarFavoritosPorTitulo";
  private urlGuardarFavorito = "http://localhost:8080/apiSodexo/guardarFavorito";
  private urlActualizarFavorito = "http://localhost:8080/apiSodexo/actualizarFavorito";
  private urlBorrarFavoritos = "http://localhost:8080/apiSodexo/borrarFavoritos";
  private urlApiSpaceFlightNews = "https://api.spaceflightnewsapi.net/v4/articles/";

  constructor(private http: HttpClient) { }


  //obtiene todos los parametros y articulos desde la API
  public getArticlesList(): Observable<ArticleList> {
    return this.http.get<ArticleList>(`${this.urlApiSpaceFlightNews}`)
    .pipe(
      map (resp => resp)
    )
  }

  //obtiene todos los favoritos desde backend
  public getFavoritos(): Observable<Noticia | undefined> {
    return this.http.get<Noticia>(`${this.urlObtenerFavoritos}`)
    .pipe(
      catchError( error => of(undefined))
    );
  }

  //obtiene favortitos por titulo desde backend
  public getFavoritosPorTitulo(title: string) :Observable<Noticia|undefined>{
    return this.http.get<Noticia>(`${this.urlBuscarFavoritosPorTitulo}` + `/${title}`)
    .pipe(
      catchError( error => of(undefined))
    );
  }

  //guarda favoritos hacia el backend
  public guardarFavorito( noticia: Noticia ):Observable<Noticia>{
    return this.http.post<Noticia>(`${ this.urlGuardarFavorito }`, noticia);
  }

  //actualiza favoritos hacia el backend
  public actualizarFavoritos(noticia: Noticia): Observable<Noticia>{
    if (!noticia.id) throw Error('Id es requerido');
    return this.http.patch<Noticia>(`${this.urlActualizarFavorito}` + `/${noticia.id}`, noticia);
  }

  //borra favoritos desde backend
  public borrarFavorito(id: number): Observable<boolean> {
    return this.http.delete(`${this.urlBorrarFavoritos}${id}`)
    .pipe(
      catchError(err => of(false)),
      map(resp => true)
    );
  }


}
