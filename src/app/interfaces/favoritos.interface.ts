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
  imageUrl:    string;
  newsSite:    string;
  summary:      string;
  publishedAt: Date;
  updatedAt:   Date;
  featured:     boolean;
}
