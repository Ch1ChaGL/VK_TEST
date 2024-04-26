import React, { FC } from 'react';
import { IFilm } from '../../../services/film/film.interface';
import FilmCard from '../FilmCard/FilmCard';
import style from './FilmGrid.module.css';

interface FilmGridProps {
  films: IFilm[];
}

const FilmGrid: FC<FilmGridProps> = ({ films }) => {
  return (
    <div className={style['film-grid']}>
      {films.map((film, index) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};

export default FilmGrid;
