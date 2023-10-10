import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia, Result } from '../interfaces/noticias.inteface';
import { ArticleList } from '../interfaces/noticias.inteface';
import { NoticiasServices } from '../services/noticias.services';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { PaginatorIntl } from '../services/paginatorIntl.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{provide: MatPaginatorIntl, useClass: PaginatorIntl}]
})
export class HomeComponent implements OnInit{

  //formulario
  form!: FormGroup;
  loading = false;
  submitting = false;
  submitted = false;


  //parametros servicios de backend
  id?: number;
  title?: string;
	url?: string;
	image_url?: string;
	news_site?: string;
	summary?: string;
	published_at?: string;
	updated_at?: string;
	featured?: boolean;
  launches?: [];
  events? : [];

  //carga de datos al backend
  favorito:  Noticia = {
    id : 0,
    title: "",
    url: "",
    image_url:  "",
    news_site:  "",
    summary:  "",
    published_at:  "",
    updated_at: "",
    featured: false
  }

public favoritos = new FormGroup({
    id : new FormControl(0),
    title: new FormControl(''),
    url: new FormControl(''),
    image_url: new FormControl(''),
    news_site: new FormControl(''),
    summary: new FormControl(''),
    published_at: new FormControl(''),
    updated_at: new FormControl(''),
    featured: new FormControl(false),
});

  //Propiedad que contiene arreglo de result de la API en base a interface
  resultado : Result[] =[];

  //Propiedad que contiene Listado con todos los parametros de la API en base a interface
  ArticleList? : ArticleList;

  //Listado para consumir el backend
  noticiasList: Observable<Noticia[]> | any;

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
) { }

  ngOnInit(): void {
    this.getArticlesList(); //desde api
    this.getArticlesResult();
    //this.getFavoritos(); //desde backend
  }

  //obtiene todos los parametros y articulos desde la API
  getArticlesList(){
    this.noticiasService.getArticlesList().subscribe({
      next: (articlesList) => this.ArticleList = articlesList,
      error: err => console.log(err)
    })
    console.log(this.ArticleList);
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

  getResultadosToAdd():Noticia{
    const Noticia = this.favoritos.value as Noticia;
    return Noticia;
  }

  agregarFavoritos():void{
    if(this.favoritos.invalid) return;
   // this.noticiasService.guardarFavorito();

  }







  getFavoritos(){
    this.noticiasService.getFavoritos().subscribe({
      next: (favoritosList) => this.noticiasList = favoritosList,
      error: err => console.log(err)
    })
    console.log(this.noticiasList);
  }



  getFavoritosPorTitulo(){

  }

}

