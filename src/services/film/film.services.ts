import { instance } from '../api';
import { get250BestFilms } from './film.config';
import { IBest250FilmsResponse } from './film.interface';

class FilmService {
  async getFilms(page: number, limit: number): Promise<IBest250FilmsResponse> {
    const response = await instance<IBest250FilmsResponse>({
      url: get250BestFilms(page, limit),
      method: 'GET',
    });

    return response.data;
  }
}

export default new FilmService();
