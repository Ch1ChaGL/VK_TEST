export interface IFilm {
  id: number;
  name: string;
  type: string;
  year: number;
  description: string;
  slogan: string;
  rating: IRating;
  poster: IPoster;
  genres: {
    name: string;
  }[];
}

interface IRating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
}

interface IPoster {
  url: string;
  previewUrl: string;
}

export interface IBest250FilmsResponse {
  docs: IFilm[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
