import { Pipe, PipeTransform } from '@angular/core';
import { Noticia } from 'src/app/interfaces/favoritos.interface';

@Pipe({
  name: 'filtroFavoritos'
})
export class FiltroFavoritosPipe implements PipeTransform {

  transform(article: Noticia[], page: number = 0, search: string =''): Noticia[] {
    console.log(search)
    if (search.length === 0 )
     return article.slice(page, page + 10);
     //filtra por termino de busqueda
     const filteredArticles = article.filter(art => art.title.includes(search))
     return filteredArticles.slice(page, page + 3);
   }
}
