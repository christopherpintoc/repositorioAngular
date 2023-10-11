export interface Favoritos {
  metadata:         Metadatum[];
  noticiasResponse: NoticiasResponse;
}

export interface Metadatum {
  descripcion: string;
  codigo:      string;
}

export interface NoticiasResponse {
  noticias: Noticia[];
}

export interface Noticia {
  idFavorite:   number;
  id:           number;
  title:        string;
  url:          string;
  image_url:    string;
  news_site:    string;
  summary:      string;
  published_at: Date;
  updated_at:   Date;
  featured:     boolean;
}
