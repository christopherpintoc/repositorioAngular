import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { NoticiasServices } from './noticias.services';
import { HttpRequest } from '@angular/common/http';

describe('NoticiasServicesTsService', () => {
  let service: NoticiasServices;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NoticiasServices],
    });

    service = TestBed.inject(NoticiasServices);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve articles from the API via GET'),() =>{
    let mockArticles =
        {
            "id": 21049,
            "title": "Russia talks a big future in space while its overall budget is quietly cut",
            "url": "https://arstechnica.com/space/2023/10/russia-talks-a-big-future-in-space-while-its-overall-budget-is-quietly-cut/",
            "image_url": "https://cdn.arstechnica.net/wp-content/uploads/2023/10/Russian-plan.jpg",
            "news_site": "Arstechnica",
            "summary": "The presentation had something of the feel of a Potemkin Village.",
            "published_at": "2023-10-04T15:13:51Z",
            "updated_at": "2023-10-04T15:14:32.565000Z",
            "featured": false
        }

    };
    /*service.getArticlesList().subscribe((data) =>{
      expect(data).toEqual(mockArticles);
    });

    const req = httpTestingController.expectOne('https://api.spaceflightnewsapi.net/v4/articles/');
    expect(req.request.method).toEqual('GET');
    req.flush(mockArticles);
   });  */

  /*afterEach(() =>{
    HttpTestingController.verify();
  });*/
});
