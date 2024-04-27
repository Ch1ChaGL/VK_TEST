import React from 'react';
import HomeScreen from '../../components/screen/HomeScreen/HomeScreen';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFilms } from '../../hooks/useFilms';
import { CircularProgress } from '@mui/material';
const Home = () => {
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
    <>
      <HomeScreen
        handlePageChane={handlePageChane}
        films={films.docs}
        page={films.page}
        pages={films.pages}
      />
    </>
  );
};

export default Home;
