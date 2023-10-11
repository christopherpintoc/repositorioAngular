import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia, Result } from '../interfaces/noticias.inteface';
import { ArticleList } from '../interfaces/noticias.inteface';
import { NoticiasServices } from '../services/noticias.services';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit{

  //Propiedad que contiene arreglo de result de la API en base a interface
  resultado : Result[] =[];

  //Propiedad que contiene Listado con todos los parametros de la API en base a interface
  ArticleList? : ArticleList;

  //para paginador por pipe
  public page: number = 0;

  //para filtrado de busqueda de noticias
  public search: string  = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private noticiasService: NoticiasServices,
    http: HttpClient
) {}

  ngOnInit(): void {
    this.getArticlesList(); //desde api
    this.getArticlesResult();
  }

  //obtiene todos los parametros y articulos desde la API
  getArticlesList(){
    this.noticiasService.getArticlesList().subscribe({
      next: (articlesList) => this.ArticleList = articlesList,
      error: err => console.log(err)
    })
    //console.log(this.ArticleList);
  }

  //obtiene todos los articulos del arreglo results de la API en base a interface, se recorre con ngFor en HTML
  getArticlesResult(){
    this.noticiasService.getArticlesList().subscribe({
      next: (articlesList) => this.resultado = articlesList.results,
      error: err => console.log(err)
    })
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

  //busca y filtra articulos por titulo
  searchArticle(search: string){
    this.page = 0; //volver a primera pag
    this.search = search;
    //console.log(search);
  }

  agregarFavoritos(item:Result):void{
    const favorito: Noticia = {
      id : item.id,
      title: item.title,
      url:  item.url,
      image_url: item.image_url,
      news_site: item.news_site,
      summary: item.summary,
      published_at: item.published_at,
      updated_at: item.updated_at,
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




}

