import { FC } from 'react';
import { IFilm } from '../../../services/film/film.interface';
import FilmGrid from '../../UI/FilmGrid/FilmGrid';

interface HomeScreenProps {
  films: IFilm[];
}

const HomeScreen: FC<HomeScreenProps> = ({ films }) => {
  return (
    <div>
      <FilmGrid films={films} />
    </div>
  );
};

export default HomeScreen;
