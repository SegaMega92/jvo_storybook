import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './LogoMarqueeV2.module.css';

// Import client logos
import bbkLogo from '../../assets/logos/clients/bbk.svg';
import belwedewLogo from '../../assets/logos/clients/belwedew.svg';
import bioaquaLogo from '../../assets/logos/clients/bioaqua.svg';
import cofessoLogo from '../../assets/logos/clients/cofesso.svg';
import cozyHomeLogo from '../../assets/logos/clients/cozy-home.svg';
import curtisLogo from '../../assets/logos/clients/curtis.svg';
import feelzLogo from '../../assets/logos/clients/feelz.svg';
import flexPocketLogo from '../../assets/logos/clients/flex-pocket.svg';
import galtexLogo from '../../assets/logos/clients/galtex.svg';
import grassLogo from '../../assets/logos/clients/grass.svg';
import gutenMorgenLogo from '../../assets/logos/clients/guten-morgen.svg';
import juliusMeinLogo from '../../assets/logos/clients/julius-mein.svg';
import kryginaLogo from '../../assets/logos/clients/krygina.svg';
import lacalutLogo from '../../assets/logos/clients/lacalut.svg';
import larettoLogo from '../../assets/logos/clients/laretto.svg';
import leomaxLogo from '../../assets/logos/clients/leomax.svg';
import likatoLogo from '../../assets/logos/clients/likato.svg';
import litEnergyLogo from '../../assets/logos/clients/lit-energy.svg';
import luxvisageLogo from '../../assets/logos/clients/luxvisage.svg';
import mixitLogo from '../../assets/logos/clients/mixit.svg';
import novositLogo from '../../assets/logos/clients/novosit.svg';
import pusyLogo from '../../assets/logos/clients/pusy.svg';
import polarisLogo from '../../assets/logos/clients/polaris.svg';
import richardLogo from '../../assets/logos/clients/richard.svg';
import splatLogo from '../../assets/logos/clients/splat.svg';
import takeABiteLogo from '../../assets/logos/clients/take-a-bite.svg';
import theActLogo from '../../assets/logos/clients/the-act.svg';
import vseMaykiLogo from '../../assets/logos/clients/vse-mayki.svg';
import vkusvillLogo from '../../assets/logos/clients/вкуссвил.svg';
import krasnayaLiniyaLogo from '../../assets/logos/clients/красная-линия.svg';
import mayLogo from '../../assets/logos/clients/май.svg';
import marketspaceLogo from '../../assets/logos/clients/маркетспейс.svg';
import okeysiLogo from '../../assets/logos/clients/okeysi.png';
import ortekaLogo from '../../assets/logos/clients/ортека.svg';
import reliefCenterLogo from '../../assets/logos/clients/рельеф-центр.svg';
import rivgoshLogo from '../../assets/logos/clients/рив-гош.svg';
import syneregeticLogo from '../../assets/logos/clients/синергетик.svg';
import tidyLogo from '../../assets/logos/clients/тайди.svg';
import eksmoLogo from '../../assets/logos/clients/эксмо.svg';

const allLogos = [
  { src: bbkLogo, alt: 'BBK' },
  { src: belwedewLogo, alt: 'Belwedew' },
  { src: bioaquaLogo, alt: 'Bioaqua' },
  { src: cofessoLogo, alt: 'Cofesso' },
  { src: cozyHomeLogo, alt: 'Cozy Home' },
  { src: curtisLogo, alt: 'Curtis' },
  { src: feelzLogo, alt: 'FEELZ' },
  { src: flexPocketLogo, alt: 'Flex Pocket' },
  { src: galtexLogo, alt: 'Galtex' },
  { src: grassLogo, alt: 'Grass' },
  { src: gutenMorgenLogo, alt: 'Guten Morgen' },
  { src: juliusMeinLogo, alt: 'Julius Mein' },
  { src: kryginaLogo, alt: 'Krygina' },
  { src: lacalutLogo, alt: 'Lacalut' },
  { src: larettoLogo, alt: 'Laretto' },
  { src: leomaxLogo, alt: 'Leomax' },
  { src: likatoLogo, alt: 'Likato' },
  { src: litEnergyLogo, alt: 'Lit Energy' },
  { src: luxvisageLogo, alt: 'Luxvisage' },
  { src: mixitLogo, alt: 'Mixit' },
  { src: novositLogo, alt: 'Novosit' },
  { src: pusyLogo, alt: 'PUSY' },
  { src: polarisLogo, alt: 'Polaris' },
  { src: richardLogo, alt: 'Richard' },
  { src: splatLogo, alt: 'Splat' },
  { src: takeABiteLogo, alt: 'Take a Bite' },
  { src: theActLogo, alt: 'The Act' },
  { src: vseMaykiLogo, alt: 'Vse Mayki' },
  { src: vkusvillLogo, alt: 'Вкусвилл' },
  { src: krasnayaLiniyaLogo, alt: 'Красная Линия' },
  { src: mayLogo, alt: 'Май' },
  { src: marketspaceLogo, alt: 'Маркетспейс' },
  { src: ortekaLogo, alt: 'Ортека' },
  { src: reliefCenterLogo, alt: 'Рельеф Центр' },
  { src: rivgoshLogo, alt: 'Рив Гош' },
  { src: syneregeticLogo, alt: 'Синергетик' },
  { src: tidyLogo, alt: 'Тайди' },
  { src: eksmoLogo, alt: 'Эксмо' },
];

const defaultLogos = [
  { src: syneregeticLogo, alt: 'Синергетик' },
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
  logos,
  variant = 'fluid',
  speed = 20,
}) {
  const [isPaused, setIsPaused] = useState(false);

  const isCentered = variant === 'centered';
  const resolvedLogos = logos || (isCentered ? allLogos : defaultLogos);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...resolvedLogos, ...resolvedLogos];
  const itemWidth = isCentered ? 200 : 138;
  const itemGap = isCentered ? 12 : 0;
  // Exact width of one set for pixel-perfect loop
  const oneSetWidth = resolvedLogos.length * itemWidth + (resolvedLogos.length) * itemGap;
  const containerClasses = `${styles.container} ${styles[`container--${isCentered ? 'fluid' : variant}`]} ${isCentered ? styles['container--centered'] : ''}`;
  const trackClasses = `${styles.track} ${isPaused ? styles['track--paused'] : ''} ${isCentered ? styles['track--centered'] : ''}`;

  return (
    <div
      className={containerClasses}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Centered title (centered variant) */}
      {isCentered && (
        <div className={styles.centeredTitle}>
          <span className={styles.title}>{title}</span>
        </div>
      )}

      {/* Static left section (default variants) */}
      {!isCentered && (
        <div className={styles.leftSection}>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>{title}</span>
          </div>
          <div className={styles.divider} />
        </div>
      )}

      {/* Scrolling track */}
      <div className={styles.trackWrapper} style={isCentered ? { width: '100%' } : undefined}>
        <div
          className={trackClasses}
          style={{ '--marquee-speed': `${speed}s`, '--scroll-offset': `-${oneSetWidth}px`, gap: isCentered ? '12px' : undefined }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className={styles.logoItem}
              style={isCentered ? { width: 'var(--centered-item-w, 200px)', height: 'var(--centered-item-h, 100px)', flexShrink: 0 } : undefined}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.logo}
                style={isCentered ? { maxWidth: 'none', maxHeight: 'none', width: '100%', height: '100%' } : undefined}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Right gradient fade (not for centered variant) */}
        {!isCentered && <div className={styles.gradientRight} />}
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
  /** Layout variant: fixed (960px), fluid (100%), or centered (title above, no gradient) */
  variant: PropTypes.oneOf(['fixed', 'fluid', 'centered']),
  /** Animation speed in seconds */
  speed: PropTypes.number,
};

export default LogoMarqueeV2;
