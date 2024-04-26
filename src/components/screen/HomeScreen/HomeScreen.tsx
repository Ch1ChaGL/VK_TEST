import { FC, useEffect, useState } from 'react';
import {
  IBest250FilmsResponse,
  IFilm,
} from '../../../services/film/film.interface';
import FilmGrid from '../../UI/FilmGrid/FilmGrid';
import styles from './HomeScreen.module.css';
import { CircularProgress, Pagination } from '@mui/material';
import { useFilms } from '../../../hooks/useFilms';
import { useNavigate, useSearchParams } from 'react-router-dom';
interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = () => {
  const navigate = useNavigate();
  const [page, setPage] = useSearchParams();

  const { response: films, isLoading } = useFilms(
    Number(page.get('page')) || 1,
  );
  console.log('isLoading', isLoading);
  const handlePageChane = (event: React.ChangeEvent<unknown>, page: number) => {
    navigate(`/?page=${page}`);
  };

  if (isLoading) return <CircularProgress />;
  return (
    <div>
      <div className={styles.filmsGrid}>
        <FilmGrid films={films?.docs as IFilm[]} />
      </div>
      <div className={styles.pagination}>
        <Pagination
          count={films?.pages}
          page={films?.page}
          onChange={handlePageChane}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
