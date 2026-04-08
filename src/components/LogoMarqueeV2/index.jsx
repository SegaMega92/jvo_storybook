import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './LogoMarqueeV2.module.css';

// Import client logos (mocks)
import syneregeticLogo from '../../assets/logos/clients/synergetic.svg';
import rivgoshLogo from '../../assets/logos/clients/rivgosh.svg';
import vkusvillLogo from '../../assets/logos/clients/vkusvill.svg';
import mixitLogo from '../../assets/logos/clients/mixit.svg';
import lacalutLogo from '../../assets/logos/clients/lacalut.svg';

const defaultLogos = [
  { src: syneregeticLogo, alt: 'Synergetic' },
  { src: rivgoshLogo, alt: 'Рив Гош' },
  { src: vkusvillLogo, alt: 'Вкусвилл' },
  { src: mixitLogo, alt: 'Mixit' },
  { src: lacalutLogo, alt: 'Lacalut' },
];

/**
 * LogoMarqueeV2 - Infinite scrolling logo ticker with title section
 * Features a static left section with title and animated logo track
 */
export function LogoMarqueeV2({
  title = 'Нам доверяют',
  logos = defaultLogos,
  variant = 'fluid',
  speed = 20,
}) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate logos for seamless loop (need enough to fill the screen)
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  const containerClasses = `${styles.container} ${styles[`container--${variant}`]}`;
  const trackClasses = `${styles.track} ${isPaused ? styles['track--paused'] : ''}`;

  return (
    <div
      className={containerClasses}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Static left section */}
      <div className={styles.leftSection}>
        <div className={styles.titleWrapper}>
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.divider} />
      </div>

      {/* Scrolling track */}
      <div className={styles.trackWrapper}>
        <div
          className={trackClasses}
          style={{ '--marquee-speed': `${speed}s` }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.logo}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Right gradient fade */}
        <div className={styles.gradientRight} />
      </div>
    </div>
  );
}

LogoMarqueeV2.propTypes = {
  /** Title text displayed in the left section */
  title: PropTypes.string,
  /** Array of logo objects with src and alt */
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  /** Layout variant: fixed (960px) or fluid (100%) */
  variant: PropTypes.oneOf(['fixed', 'fluid']),
  /** Animation speed in seconds */
  speed: PropTypes.number,
};

export default LogoMarqueeV2;
