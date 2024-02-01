import { Pipe, PipeTransform } from '@angular/core';
import { Result } from 'src/app/interfaces/noticias.inteface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(article: Result[], search: string =''): Result[] {
   const filteredArticles = article.filter(art => art.title.includes(search))
   if (search.length === 0 )
    console.log(search)
    return filteredArticles;
  }

}
