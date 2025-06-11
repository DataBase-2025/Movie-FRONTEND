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
}

export type MovieResponseTypes = Movie[];
