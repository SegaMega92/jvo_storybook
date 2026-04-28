import { useState, useCallback } from 'react';
import styles from './HeroAgent.module.css';
import PropTypes from 'prop-types';
import trophyIcon from '../../assets/icons/badge-trophy.svg';

/**
 * HeroAgent — hero-секция с ИИ-агентом
 * Заголовок + подзаголовок + CTA + контейнер для иллюстрации с градиентным фоном
 */
export function HeroAgent({
  title = 'ИИ-агенты для победы\nна маркетплейсах',
  subtitle = 'Находим утечки и точки роста, превращаем их в задачи и выполняем автоматически с помощью ИИ-агентов — 24/7.',
  badgeText = 'Решение № 1 для управления бизнесом в е-commerce *',
  badgeTooltip = 'По версии премии Startech.Awards 2025 в номинации «Лучшая технология в электронной коммерции и платежах»',
  buttonText = 'Получить демо',
  buttonHref = '#form',
  showBadge = true,
  children,
}) {
  const [badgeOpen, setBadgeOpen] = useState(false);
  const toggleBadge = useCallback(() => setBadgeOpen((v) => !v), []);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        {/* Badge */}
        {showBadge && (
          <div
            className={`${styles.hero__badgeWrap} ${badgeOpen ? styles['hero__badgeWrap--open'] : ''}`}
            onClick={toggleBadge}
          >
            <div className={styles.hero__badge}>
              <span className={styles.hero__badgeIconWrap}>
                <img
                  src={trophyIcon}
                  alt=""
                  className={styles.hero__badgeIcon}
                />
              </span>
              <span className={styles.hero__badgeText}>{badgeText}</span>
            </div>
            <span className={styles.hero__badgeTooltip}>{badgeTooltip}</span>
          </div>
        )}

        {/* Title */}
        <h1 className={styles.hero__title}>
          {title.split('\n').map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className={styles.hero__subtitle}>{subtitle}</p>

        {/* CTA */}
        <a href={buttonHref} className={styles.hero__button}>
          {buttonText}
        </a>

        {/* Illustration container */}
        <div className={styles.hero__illustration}>
          <div className={styles.hero__illustrationBg} aria-hidden="true" />
          <div className={styles.hero__illustrationContent}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

HeroAgent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  badgeText: PropTypes.string,
  badgeTooltip: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  showBadge: PropTypes.bool,
  children: PropTypes.node,
};

export default HeroAgent;
