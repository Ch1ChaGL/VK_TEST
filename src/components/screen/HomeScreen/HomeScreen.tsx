import { FC } from 'react';
import { IFilm } from '../../../services/film/film.interface';
import FilmGrid from '../../UI/FilmGrid/FilmGrid';
import styles from './HomeScreen.module.css';
import { Pagination } from '@mui/material';
interface HomeScreenProps {
  handlePageChane: (event: React.ChangeEvent<unknown>, page: number) => void;
  films: IFilm[];
  page: number;
  pages: number;
}

const HomeScreen: FC<HomeScreenProps> = ({
  handlePageChane,
  films,
  page,
  pages,
}) => {
  return (
    <div>
      <div className={styles.filmsGrid}>
        <FilmGrid films={films} />
      </div>
      <div className={styles.pagination}>
        <Pagination count={pages} page={page} onChange={handlePageChane} />
      </div>
    </div>
  );
};

export default HomeScreen;
