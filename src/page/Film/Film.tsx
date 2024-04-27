import React from 'react';
import style from './Film.module.css';
import FilmScreen from '../../components/screen/FilmScreen/FilmScreen';
import { useFilm } from '../../hooks/useFilm';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
const Film = () => {
  const { id } = useParams();
  const { response: film, isLoading } = useFilm(id as string);

  console.log('id', id);
  console.log('film', film);
  if (isLoading) return <CircularProgress />;
  return (
    <>
      <FilmScreen film={film} />
    </>
  );
};

export default Film;
