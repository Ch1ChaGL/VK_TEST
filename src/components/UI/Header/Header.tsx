import { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Кино справочник</h1>
    </div>
  );
};

export default Header;
