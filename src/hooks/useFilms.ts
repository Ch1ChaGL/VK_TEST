import { useEffect, useState } from 'react';
import { IBest250FilmsResponse, IFilm } from '../services/film/film.interface';
import { FilmService } from '../services/film/film.services';

export const useFilms = (page: number = 1) => {
  const [response, setResponse] = useState<IBest250FilmsResponse>({
    docs: [],
    limit: 0,
    page: 0,
    pages: 0,
    total: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await FilmService.getFilms(page);
        setResponse(response);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Failed to fetch films:', error);
      }
    };

    fetchFilms();
  }, [page]);

  return { response, isLoading };
};
