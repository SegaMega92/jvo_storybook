import PropTypes from 'prop-types';
import styles from './HomePage.module.css';

import { Header } from '../../components/Header';
import { MainHero } from '../../components/MainHero';
import { LogoMarqueeV2 } from '../../components/LogoMarqueeV2';
import { AgentsShowcase } from '../../components/AgentsShowcase';
import { Spacer } from '../../components/Spacer';

/**
 * HomePage - Главная страница
 * Витрина ИИ-агентов с навигацией по продуктам
 */
export function HomePage({ className = '', embedded = false }) {
  return (
    <div className={`${styles.page} ${className}`}>
      {!embedded && <Header />}

      <main className={styles.main}>
        <MainHero />

        <Spacer size="xs" />

        <LogoMarqueeV2 variant="fixed" />

        <Spacer size="xl" />

        <AgentsShowcase />
      </main>
    </div>
  );
}

HomePage.propTypes = {
  className: PropTypes.string,
  embedded: PropTypes.bool,
};

export default HomePage;
