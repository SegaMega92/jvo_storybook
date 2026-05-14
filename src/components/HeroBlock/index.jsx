import PropTypes from 'prop-types';
import styles from './HeroBlock.module.css';
import { Button } from '../Button';
import defaultCheckIcon from '../../assets/icons/check-gradient.svg';

/**
 * HeroBlock - блок с карточкой фич и иллюстрацией/видео
 *
 * Варианты:
 * - default: градиентный фон, белая карточка слева, картинка справа
 * - flat: без внешней карточки, белая карточка с тенью слева, видео/картинка справа
 */
export function HeroBlock({
  features = [],
  buttonText = 'Подключить',
  buttonHref = '#demo',
  checkIcon = defaultCheckIcon,
  illustration,
  illustrationAlt = '',
  videoSrc,
  backgroundImage,
  showPattern = true,
  variant = 'default',
  className = '',
}) {
  const isFlat = variant === 'flat';

  // Flat вариант — без внешней обёртки
  if (isFlat) {
    return (
      <div className={`${styles.flatContainer} ${className}`}>
        {/* Белая карточка с фичами и кнопкой */}
        <div className={styles.flatCard}>
          {features.length > 0 && (
            <ul className={styles.flatFeatures}>
              {features.map((feature, index) => (
                <li key={index} className={styles.flatFeatureItem}>
                  <img src={checkIcon} alt="" className={styles.featureIcon} />
                  <span className={styles.flatFeatureText}>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {buttonText && buttonHref && (
            <a href={buttonHref} className={styles.flatBtn}>
              {buttonText}
            </a>
          )}
        </div>

        {/* Видео или иллюстрация */}
        <div className={styles.flatMedia}>
          {videoSrc ? (
            <iframe
              src={videoSrc}
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
              frameBorder="0"
              allowFullScreen
              className={styles.flatVideo}
              title="Video"
            />
          ) : illustration && (
            typeof illustration === 'string' ? (
              <img
                src={illustration}
                alt={illustrationAlt}
                className={styles.flatIllustration}
              />
            ) : (
              illustration
            )
          )}
        </div>
      </div>
    );
  }

  // Default вариант
  return (
    <div
      className={`${styles.block} ${showPattern ? styles.withPattern : ''} ${className}`}
      style={backgroundImage ? { '--bg-image': `url(${backgroundImage})` } : undefined}
    >
      {/* Белая карточка с фичами */}
      <div className={styles.card}>
        {features.length > 0 && (
          <ul className={styles.features}>
            {features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <img src={checkIcon} alt="" className={styles.featureIcon} />
                <span className={styles.featureText}>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {buttonText && buttonHref && (
          <Button
            href={buttonHref}
            variant="primary"
            size="medium"
            className={styles.button}
          >
            {buttonText}
          </Button>
        )}
      </div>

      {/* Иллюстрация */}
      <div className={styles.illustrationWrapper}>
        {illustration && (
          typeof illustration === 'string' ? (
            <img
              src={illustration}
              alt={illustrationAlt}
              className={styles.illustration}
            />
          ) : (
            illustration
          )
        )}
      </div>
    </div>
  );
}

HeroBlock.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  checkIcon: PropTypes.string,
  illustration: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  illustrationAlt: PropTypes.string,
  videoSrc: PropTypes.string,
  backgroundImage: PropTypes.string,
  showPattern: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'flat']),
  className: PropTypes.string,
};

export default HeroBlock;
