import { useEffect, useState } from 'react';
import { IFilm } from '../services/film/film.interface';
import { FilmService } from '../services/film/film.services';

export const useFilm = (filmID: string) => {
  const [response, setResponse] = useState<IFilm>({} as IFilm);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await FilmService.getFilm(filmID);
        setResponse(response);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Failed to fetch films:', error);
      }
    };

    fetchFilm();
  }, [filmID]);

  return { response, isLoading };
};
