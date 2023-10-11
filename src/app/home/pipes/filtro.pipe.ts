import { Pipe, PipeTransform } from '@angular/core';
import { Result } from 'src/app/interfaces/noticias.inteface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(article: Result[], page: number = 0, search: string =''): Result[] {
   //console.log(search)
   if (search.length === 0 )
    return article.slice(page, page + 3);
    //filtra por termino de busqueda
    const filteredArticles = article.filter(art => art.title.includes(search))
    return filteredArticles.slice(page, page + 3);
  }

}
