import { instance } from '../api';
import { get250BestFilms, getFilmByID } from './film.config';
import { IBest250FilmsResponse, IFilm } from './film.interface';

export const FilmService = {
  async getFilms(page: number): Promise<IBest250FilmsResponse> {
    const response = await instance<IBest250FilmsResponse>({
      url: get250BestFilms(page),
      method: 'GET',
    });

    return response.data;
  },
  async getFilm(filmID: string): Promise<IFilm> {
    const response = await instance<IFilm>({
      url: getFilmByID(filmID),
      method: 'GET',
    });

    return response.data;
  },
};
