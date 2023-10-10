export interface Noticia{
  id: number;
  title: string;
	url: string;
	image_url: string;
	news_site: string;
	summary: string;
	published_at: string;
	updated_at: string;
	featured: boolean;
}

export interface ArticleList {
  count:    number;
  next:     string;
  previous: null;
  results:  Result[];
}

export interface Result {
  id:           number;
  title:        string;
  url:          string;
  image_url:    string;
  news_site:    string;
  summary:      string;
  published_at: Date;
  updated_at:   Date;
  featured:     boolean;
  launches:     Launch[];
  events:       any[];
}

export interface Launch {
  launch_id: string;
  provider:  string;
}
/*
export interface Article{
  id_article: number;
  titulo: string;
  descripcion: string;
  fecha : Date;
  imagen: string;
} */
