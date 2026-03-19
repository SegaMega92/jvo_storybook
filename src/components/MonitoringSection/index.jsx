import PropTypes from 'prop-types';
import styles from './MonitoringSection.module.css';
import { FeatureCard } from '../FeatureCard';
import chevronRight from '../../assets/icons/chevron-right.svg';

/**
 * MonitoringSection - секция с двумя карточками и навигацией
 * Простой заголовок + подзаголовок + две FeatureCard со стрелкой между ними
 */
export function MonitoringSection({
  title,
  subtitle,
  cards = [],
  showNavigation = true,
  className = '',
}) {
  return (
    <section className={`${styles.section} ${className}`}>
      {/* Заголовок секции */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      {/* Карточки с навигацией */}
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              image={card.image}
              imageAlt={card.imageAlt}
              title={card.title}
              description={card.description}
            />
          ))}

          {/* Декоративная стрелка между карточками */}
          {showNavigation && cards.length >= 2 && (
            <div className={styles.navigation} aria-hidden="true">
              <img src={chevronRight} alt="" className={styles.navigationIcon} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

MonitoringSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      imageAlt: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  showNavigation: PropTypes.bool,
  className: PropTypes.string,
};

export default MonitoringSection;
