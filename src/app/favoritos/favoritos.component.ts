import { Component, OnInit } from '@angular/core';
import { Favoritos, Noticia } from '../interfaces/favoritos.interface';
import { NoticiasServices } from '../services/noticias.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit{

  //menu angular material
  links = ['/home', '/favoritos'];
  titles = ['Home', 'Favorites'];
  activeLink = this.links[0];
  backgroundcolor = '';


  //Listado para consumir el backend
  favoritosList: Observable<Favoritos[]> | any;

  //para paginador por pip
  public page: number = 0;

  //para filtrado de busqueda de favoritos
  public search: string  = '';

  //para busqueda por titulo
  favoritosPorTitulo: Observable<Favoritos[]> |any;
  tituloBusqueda: string = '';
  showFavoritos = false;

  //para evitar error en datos null getFavoritos
  showFavoritosList = false;

  constructor(private NoticiasServices: NoticiasServices){}

  ngOnInit(): void {
    this.getFavoritos();
    //this.getFavoritosByDate();
  }

  //ordena los favoritos del backend por fecha
  // getFavoritosByDate(){
  //   return this.favoritosList.sort((a: { published_at: string | number | Date; }, b: { published_at: string | number | Date; }) =>{
  //     <any> new Date(b.published_at).getTime() - <any> new Date(a.published_at).getTime();
  //   });
  // }

  //busca todos los favoritos desde el backend
  getFavoritos():void{
    this.NoticiasServices.getFavoritos().subscribe({
      next: (favoritosList) => {
        if(favoritosList){
        this.favoritosList = favoritosList;
        this.showFavoritosList = true;
      }else{
        this.showFavoritosList = true;
      }
      },
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
    this.page+=10;
  }

  //retrocede a la pagina anterior para el boton de paginador
  prevPage(){
    if(this.page>0)
      this.page-=10;
  }

  //busca y filtra favoritos por titulo en angular
  searchArticle(search: string):void{
    this.page = 0; //volver a primera pag
    this.search = search;
    //console.log(search);
  }


}
