import { Component, OnInit } from '@angular/core';
import { Favoritos, Noticia, NoticiasResponse } from '../interfaces/favoritos.interface';
import { NoticiasServices } from '../services/noticias.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit{

  //Listado para consumir el backend
  favoritosList: Observable<Favoritos[]> | any;

  //para paginador por pipe
  public page: number = 0;

  //para filtrado de busqueda de favoritos
  public search: string  = '';

  //para busqueda por titulo
  favoritosPorTitulo: Observable<Favoritos[]> |any;
  tituloBusqueda: string = '';
  showFavoritos = false;

  constructor(private NoticiasServices: NoticiasServices){}

  ngOnInit(): void {
    this.getFavoritos();
  }

  //busca todos los favoritos desde el backend
  getFavoritos(){
    this.NoticiasServices.getFavoritos().subscribe({
      next: (favoritosList) => this.favoritosList = favoritosList,
      error: err => console.log(err)
    })
    console.log(this.favoritosList);
  }

  //busca por titulo los favoritos guardados en el backend
  getFavoritosPorTitulo(title:string):void{
    this.NoticiasServices.getFavoritosPorTitulo(title).subscribe({
      next: (favoritos) =>{
        if (favoritos){
          this.favoritosPorTitulo = favoritos;
        this.showFavoritos = true;
      }else{
        this.showFavoritos = false;
      }
      },
      error:(error) =>{
        console.error(error)
      },
     });
    }

  //borra un favorito guardado previamente
  borrarFavorito(favorito: Noticia){
    const favoritoId = favorito.idFavorite;
    if(favoritoId != null){
      this.NoticiasServices.borrarFavorito(favoritoId).subscribe({
        next:(borrar) =>{
          console.log('Favorito eliminado correctamente');
        },
        error : (error) =>{
          console.error(error)
        }
      });
    }

  }
  //avanza a la siguiente pagina para el boton de paginador
  nextPage(){
    this.page+=3;
  }

  //retrocede a la pagina anterior para el boton de paginador
  prevPage(){
    if(this.page>0)
      this.page-=3;
  }

  //busca y filtra favoritos por titulo angular
  searchArticle(search: string){
    this.page = 0; //volver a primera pag
    this.search = search;
    //console.log(search);
}


}
