import PropTypes from 'prop-types';
import styles from './MainPage.module.css';

import { Header } from '../../components/Header';
import { HeroAgent } from '../../components/HeroAgent';
import { LogoMarqueeV2 } from '../../components/LogoMarqueeV2';

/**
 * MainPage - Новая главная страница
 * Header + HeroAgent + LogoMarquee (centered)
 */
export function MainPage({ className = '', embedded = false }) {
  return (
    <div className={`${styles.page} ${className}`}>
      {!embedded && <Header />}

      <main className={styles.main}>
        <HeroAgent />

        <div className={styles.logoSection}>
          <LogoMarqueeV2
            title="Используется ведущими брендами"
            variant="centered"
            speed={120}
          />
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  className: PropTypes.string,
  embedded: PropTypes.bool,
};

export default MainPage;
