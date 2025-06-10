export interface Movie {
  movieName: string;
  movieEngName?: string;
  code?: string;
  year: string;
  country: string[];
  type: string;
  genre: string[];
  status: string;
  director?: string[];
  producer?: string;
}

export interface Movie {
  movie_id: number;
  title: string;
  english_title: string;
  open_year: number;
  type: string;
  status: string;
  company: string;
  directors: string[];
  genres: string[];
  nations: string[];
  code?: string;
}

export type MovieResponseTypes = Movie[];
