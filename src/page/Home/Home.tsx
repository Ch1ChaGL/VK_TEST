import React from 'react';
import HomeScreen from '../../components/screen/HomeScreen/HomeScreen';
import { films } from '../../films';
const Home = () => {
  return (
    <div>
      <HomeScreen films={films.docs} />
    </div>
  );
};

export default Home;
