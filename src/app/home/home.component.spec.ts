import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { NoticiasServices } from '../services/noticias.services';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let noticiasServices: NoticiasServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [NoticiasServices]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    noticiasServices = TestBed.inject(NoticiasServices);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const mockArticles = {
    "count": 18149,
    "next": "https://api.spaceflightnewsapi.net/v4/articles/?format=api&limit=10&offset=30",
    "previous": "https://api.spaceflightnewsapi.net/v4/articles/?format=api&limit=10&offset=10",
    "results": [
        {
            "id": 21058,
            "title": "Watch Elon Musk give updates about SpaceX from annual space congress",
            "url": "https://www.cnbc.com/2023/10/05/watch-elon-musk-give-updates-about-spacex-from-annual-space-congress.html",
            "image_url": "https://image.cnbcfm.com/api/v1/image/107258445-1686936354815-gettyimages-1499013165-_r7a3292_krz8wzn5.jpeg",
            "news_site": "CNBC",
            "summary": "[Elon Musk is slated to begin speaking at 9:45 a.m. ET. Please refresh the page if you do not see the video player above.]",
            "published_at": "2023-10-05T13:15:01Z",
            "updated_at": "2023-10-06T07:53:01.352000Z",
            "featured": false,
            "launches": [],
            "events": [
                {
                    "event_id": 879,
                    "provider": "Launch Library 2"
                }
            ]
        },
        {
            "id": 21056,
            "title": "CesiumAstro, Hughes and SES demonstrate active phased array terminal",
            "url": "https://spacenews.com/cesiumastro-hughes-and-ses-demonstrate-active-phased-array-terminal/",
            "image_url": "https://spacenews.com/wp-content/uploads/2023/10/rsz_2cesiumastro_pressrelease_ifc_v2_4000x2090px_230307_01_1-300x157.png",
            "news_site": "SpaceNews",
            "summary": "CesiumAstro demonstrated its latest Ka-band active phased array terminal with the help of a Hughes software-defined modem and an SES geosynchronous satellite.",
            "published_at": "2023-10-05T12:00:00Z",
            "updated_at": "2023-10-05T12:04:11.307000Z",
            "featured": false,
            "launches": [],
            "events": []
        },
        {
            "id": 21057,
            "title": "Rocket Lab opens engine facility in former Virgin Orbit headquarters",
            "url": "https://spacenews.com/rocket-lab-opens-engine-facility-in-former-virgin-orbit-headquarters/",
            "image_url": "https://spacenews.com/wp-content/uploads/2023/10/53234550506_234adbe894_k-300x225.jpg",
            "news_site": "SpaceNews",
            "summary": "Rocket Lab has opened a new engine development center in a building that, six months earlier, was the headquarters of a competing launch company, Virgin Orbit.",
            "published_at": "2023-10-05T11:56:58Z",
            "updated_at": "2023-10-05T12:04:11.310000Z",
            "featured": false,
            "launches": [],
            "events": []
        },
        {
            "id": 21055,
            "title": "Japan’s SLIM moon lander makes lunar flyby",
            "url": "https://spacenews.com/japans-slim-moon-lander-makes-lunar-flyby/",
            "image_url": "https://spacenews.com/wp-content/uploads/2023/10/SLIM-render-descent-JAXA-300x168.jpg",
            "news_site": "SpaceNews",
            "summary": "Japan’s SLIM spacecraft has completed a flyby of the moon as part of a months-long deep space journey to set up a lunar landing attempt.",
            "published_at": "2023-10-05T08:03:17Z",
            "updated_at": "2023-10-05T11:33:42.141000Z",
            "featured": false,
            "launches": [
                {
                    "launch_id": "2ba0b63c-e5f6-4899-b588-387c7c8e71ca",
                    "provider": "Launch Library 2"
                }
            ],
            "events": []
        },
        {
            "id": 21054,
            "title": "Startups from four nations join 2023 Hyperspace Challenge",
            "url": "https://spacenews.com/startups-from-four-nations-join-2023-hyperspace-challenge/",
            "image_url": "https://spacenews.com/wp-content/uploads/2023/10/rsz_dscf4382-300x200.png",
            "news_site": "SpaceNews",
            "summary": "The 2023 Hyperspace Challenge cohort includes U.S. companies Lexset.ai, Phase Four and TRL11, plus Australia’s High Earth Orbit Robotics, England-based Magdrive and Dawn Aerospace of the Netherlands.",
            "published_at": "2023-10-05T06:00:00Z",
            "updated_at": "2023-10-05T06:04:10.874000Z",
            "featured": false,
            "launches": [],
            "events": []
        },
        {
            "id": 21053,
            "title": "Northrop Grumman to join Voyager Space commercial space station project",
            "url": "https://spacenews.com/northrop-grumman-to-join-voyager-space-commercial-space-station-project/",
            "image_url": "https://spacenews.com/wp-content/uploads/2023/08/starlab-300x184.jpg",
            "news_site": "SpaceNews",
            "summary": "Northrop Grumman will drop plans to develop its own commercial space station and instead assist a competing effort led by Voyager Space, the companies announced Oct. 4.",
            "published_at": "2023-10-05T00:14:45Z",
            "updated_at": "2023-10-05T00:24:10.875000Z",
            "featured": false,
            "launches": [],
            "events": []
        },
        {
            "id": 21052,
            "title": "Germany Advocates Competitive Launch Procurement Process",
            "url": "https://europeanspaceflight.com/germany-advocates-competitive-launch-procurement-process/",
            "image_url": "https://europeanspaceflight.com/wp-content/uploads/2023/10/Germany-Advocates-Competitive-Launch-Procurement-Process.jpg",
            "news_site": "European Spaceflight",
            "summary": "Germany has announced its intention to pursue a competitive procurement process when purchasing launch services. The country also intends to use its position within the European Space Agency to advocate that the agency does the same. This “paradigm shift in the development and procurement of launch services in Europe” was outlined in the country’s new […]\nThe post Germany Advocates Competitive Launch Procurement Process appeared first on European Spaceflight.",
            "published_at": "2023-10-04T20:23:45Z",
            "updated_at": "2023-10-04T20:24:46.473000Z",
            "featured": false,
            "launches": [],
            "events": []
        },
        {
            "id": 21051,
            "title": "SRI partners with Scout Space and Leidos for debris-tracking project",
            "url": "https://spacenews.com/sri-partners-with-scout-space-and-leidos-for-debris-tracking-project/",
            "image_url": "https://spacenews.com/wp-content/uploads/2023/10/Screenshot-2023-10-04-at-9.53.41%E2%80%AFAM-300x163.png",
            "news_site": "SpaceNews",
            "summary": "SRI International announced Oct. 4 it selected the defense technology firm Leidos and startup Scout Space as subcontractors for a space debris-tracking project funded by the U.S. intelligence community.",
            "published_at": "2023-10-04T19:54:08Z",
            "updated_at": "2023-10-04T19:54:11.948000Z",
            "featured": false,
            "launches": [],
            "events": []
        },
        {
            "id": 21050,
            "title": "Launch Roundup: Project Kuiper Protoflight and Galactic 04 highlight this week",
            "url": "https://www.nasaspaceflight.com/2023/10/kuipler-protoflight-and-more/",
            "image_url": "https://www.nasaspaceflight.com/wp-content/uploads/2023/10/IMG_5514-1170x787.jpeg",
            "news_site": "NASASpaceflight",
            "summary": "United Launch Alliance (ULA) is about to fly only its second Atlas V of 2023, as Amazon’s subsidiary Kuiper Systems LLC is finally about to place its first Kuiper demonstration satellites into orbit. This week also features a launch from China, a Falcon 9 Starlink launch, a Virgin Galactic suborbital tourist flight, and one of the final flights for the original Vega small satellite launcher.",
            "published_at": "2023-10-04T19:04:17Z",
            "updated_at": "2023-10-05T11:33:59.496000Z",
            "featured": false,
            "launches": [
                {
                    "launch_id": "9086bd21-5422-41b9-a492-963aababd8fd",
                    "provider": "Launch Library 2"
                },
                {
                    "launch_id": "b17abaa1-ef18-4c29-9ed9-a02eb4967bfa",
                    "provider": "Launch Library 2"
                }
            ],
            "events": []
        },
        {
            "id": 21049,
            "title": "Russia talks a big future in space while its overall budget is quietly cut",
            "url": "https://arstechnica.com/space/2023/10/russia-talks-a-big-future-in-space-while-its-overall-budget-is-quietly-cut/",
            "image_url": "https://cdn.arstechnica.net/wp-content/uploads/2023/10/Russian-plan.jpg",
            "news_site": "Arstechnica",
            "summary": "The presentation had something of the feel of a Potemkin Village.",
            "published_at": "2023-10-04T15:13:51Z",
            "updated_at": "2023-10-04T15:14:32.565000Z",
            "featured": false,
            "launches": [],
            "events": []
        }
    ]
}
  it('should call getArticlesList on ngOnInit', () =>{
   // spyOn(noticiasServices, 'getArticlesList').and.returnValue(mockArticles);
    component.ngOnInit();
    expect(noticiasServices.getArticlesList).toHaveBeenCalled();
  });
});
