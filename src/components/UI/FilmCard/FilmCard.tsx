import React, { FC } from 'react';
import styles from './FilmCard.module.css';
import { IFilm } from '../../../services/film/film.interface';

interface FilmCardProps {
  film: IFilm;
}

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  return (
    <div className={styles.filmCard}>
      <img src={film.poster.url} alt={film.name} className={styles.poster} />
      <div className={styles.details}>
        <h2 className={styles.title}>{film.name}</h2>
        <p className={styles.year}>{film.year}</p>
        <p className={styles.rating}>Rating: {film.rating.kp}</p>
      </div>
    </div>
  );
};

export default FilmCard;
