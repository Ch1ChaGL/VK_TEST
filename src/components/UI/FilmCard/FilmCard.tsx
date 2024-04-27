import React, { FC } from 'react';
import styles from './FilmCard.module.css';
import { IFilm } from '../../../services/film/film.interface';
import { useNavigate } from 'react-router-dom';

interface FilmCardProps {
  film: IFilm;
}

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.filmCard}
      onClick={() => navigate(`/film/${film.id}`)}
    >
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
