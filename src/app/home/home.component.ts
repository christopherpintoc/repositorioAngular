import { Component, OnInit} from '@angular/core';
//import { HttpClient } from "@angular/common/http";
//import { FormBuilder } from '@angular/forms';
//import { ActivatedRoute, Router } from '@angular/router';
import { Noticia, Result } from '../interfaces/noticias.inteface';
import { ArticleList } from '../interfaces/noticias.inteface';
import { NoticiasServices } from '../services/noticias.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit{

  //menu angular material
  links = ['/home', '/favoritos'];
  titles = ['Home', 'Favorites'];
  activeLink = this.links[0];
  backgroundcolor = '';

  //Propiedad que contiene arreglo de result de la API en base a interface
  resultado : Result[] =[];

  //Propiedad que contiene Listado con todos los parametros de la API en base a interface
  ArticleList? : ArticleList;

  //para paginador por url
  currentPage = 1;
  itemsPerPage = 10;

  //para filtrado de busqueda de noticias
  public search: string  = '';

  constructor(
    private noticiasService: NoticiasServices
    //private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    // private router: Router,
    //http: HttpClient
) {}

  ngOnInit(): void {
    this.loadArticles();
    //this.getArticlesList(); //desde api
    //this.getArticlesResult();
  }

  //obtiene todos los parametros y articulos desde la API en base a parametros de paginacion
  loadArticles(){
    this.noticiasService.getArticlesList(this.currentPage, this.itemsPerPage)
    .subscribe((data: any)=>{
      this.resultado = data.results;
    });
  }

  //cambia la pagina actual y vuelve a cargar los articulos correspondientes
  goToPage(page: number){
    this.currentPage = page;
    this.loadArticles();
  }

  //funcion que busca y filtra favoritos por titulo en angular mediante textbox HTML
  searchArticle(search: string){
    this.search = search;
    //console.log(search);
  }

  //funcion que crea un favorito mediante llamada a servicio backend
  agregarFavoritos(item:Result):void{
    const favorito: Noticia = {
      id : item.id,
      title: item.title,
      url:  item.url,
      imageUrl: item.imageUrl,
      newsSite: item.newsSite,
      summary: item.summary,
      publishedAt: item.publishedAt,
      updatedAt: item.updatedAt,
      featured: item.featured
    }
    this.noticiasService.guardarFavorito(favorito).subscribe((result) =>{
      if(result){
        console.log('Favorito agregado', result);
      }
      else{
        console.log('Error al agregar', result);
      }
    });
  }

//obtiene todos los parametros y articulos desde la API
getArticlesList(param: string):void{
  this.noticiasService.getArticlesList(this.currentPage, this.itemsPerPage).subscribe({
    next: (articlesList) => this.ArticleList = articlesList,
    error: err => console.log(err)
  })
  //console.log(this.ArticleList);
}

//obtiene todos los articulos del arreglo results de la API en base a interface - funcion deprecada
getArticlesResult(param: string):void{
  this.noticiasService.getArticlesList(this.currentPage, this.itemsPerPage).subscribe({
    next: (articlesList) => this.resultado = articlesList.results,
    error: err => console.log(err)
  })
}
}
