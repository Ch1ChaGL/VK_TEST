import React, { FC } from 'react';
import styles from './FilmScreen.module.css';
import { IFilm } from '../../../services/film/film.interface';

interface IFilmScreenProps {
  film: IFilm;
}

const FilmScreen: FC<IFilmScreenProps> = ({ film }) => {
  return (
    <div className={styles.filmScreen}>
      <img src={film.poster.url} alt={film.name} className={styles.poster} />
      <div className={styles.details}>
        <h2 className={styles.title}>{film.name}</h2>
        <p className={styles.description}>{film.description}</p>
        <div className={styles.genres}>
          <strong>Genres:</strong>
          {film.genres.map((genre, index) => (
            <span key={index} className={styles.genre}>
              {genre.name}
            </span>
          ))}
        </div>
        <p className={styles.rating}>Rating: {film.rating.kp}</p>
        <p className={styles.type}>Type: {film.type}</p>
        <p className={styles.year}>Year: {film.year}</p>
      </div>
    </div>
  );
};

export default FilmScreen;
