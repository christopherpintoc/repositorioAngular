export interface Noticia{
  id: number;
  title: string;
	url: string;
	imageUrl: string;
	newsSite: string;
	summary: string;
	publishedAt: Date;
	updatedAt: Date;
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
  imageUrl:    string;
  newsSite:    string;
  summary:      string;
  publishedAt: Date;
  updatedAt:   Date;
  featured:     boolean;
  launches:     Launch[];
  events:       any[];
}

export interface Launch {
  launch_id: string;
  provider:  string;
}

