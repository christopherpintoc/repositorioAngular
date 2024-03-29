import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ArticleList, Noticia } from '../interfaces/noticias.inteface';
import { Favoritos, NoticiasResponse } from '../interfaces/favoritos.interface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasServices {

  private urlObtenerFavoritos = "http://localhost:8080/apiNoticias/getFavoritos";
  private urlBuscarFavoritosPorTitulo = "http://localhost:8080/apiNoticias/getFavoritosPorTitulo";
  private urlGuardarFavorito = "http://localhost:8080/apiNoticias/setFavorito";
  private urlActualizarFavorito = "http://localhost:8080/apiNoticias/updateFavoritos";
  private urlBorrarFavoritos = "http://localhost:8080/apiNoticias/deleteFavoritos";
  private urlApiSpaceFlightNews = "https://api.spaceflightnewsapi.net/v4/articles";

  constructor(private http: HttpClient) { }


  //obtiene todos los parametros y articulos desde la API
  public getArticlesList(page: number, limit: number): Observable<ArticleList> {
    const offset = (page -1) * limit;
    return this.http.get<ArticleList>(`${this.urlApiSpaceFlightNews}/?limit=${limit}&offset=${offset}`)
    .pipe(
      map (resp => resp)
    )
  }

  //obtiene todos los favoritos desde backend
  public getFavoritos(): Observable<Favoritos> {
    return this.http.get<Favoritos>(`${this.urlObtenerFavoritos}`)
    .pipe(
      map (resp => resp)
    );
  }

  //obtiene favortitos por titulo desde backend
  public getFavoritosPorTitulo(title: string) :Observable<Favoritos>{
    const headers = new HttpParams().append(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    return this.http.get<Favoritos>(`${this.urlBuscarFavoritosPorTitulo}` + `/${title}`);
  }

  //guarda favoritos hacia el backend
  public guardarFavorito( noticia: Noticia ):Observable<Noticia>{
    return this.http.post<Noticia>(`${ this.urlGuardarFavorito }`, noticia);
  }

  //borra favoritos desde backend
  public borrarFavorito(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlBorrarFavoritos}/${id}`);
  }

  //actualiza favoritos hacia el backend
  public actualizarFavoritos(noticia: Noticia): Observable<Noticia>{
    if (!noticia.id) throw Error('Id es requerido');
    return this.http.patch<Noticia>(`${this.urlActualizarFavorito}` + `/${noticia.id}`, noticia);
  }

}
