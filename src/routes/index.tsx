import { FC } from 'react';
import Home from '../page/Home/Home';
import Film from '../page/Film/Film';

interface IRoutes {
  path: string;
  component: FC;
  name?: string;
}

export const routes: IRoutes[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/film/:id',
    component: Film,
  },
];
