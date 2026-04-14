import styles from './FeatureSection.module.css';
import PropTypes from 'prop-types';
import { Button } from '../Button';

/**
 * JVO Feature Section - based on Figma design
 * Two-column layout: text left (400px), media right (820px)
 * Supports both image and video (Kinescope embed)
 */
export function FeatureSection({
  title,
  description,
  bullets = [],
  image,
  imageAlt = '',
  video,
  buttonText = 'Оставить заявку',
  buttonHref = '#demo',
  reversed = false,
}) {
  // Convert Kinescope URL to embed URL if needed
  const getVideoEmbedUrl = (url) => {
    if (!url) return null;
    // If already an embed URL, return as is
    if (url.includes('/embed/')) return url;
    // Extract video ID from kinescope.io URL
    const match = url.match(/kinescope\.io\/([a-zA-Z0-9]+)/);
    if (match) {
      return `https://kinescope.io/embed/${match[1]}`;
    }
    return url;
  };

  const embedUrl = getVideoEmbedUrl(video);

  return (
    <section className={`${styles.section} ${reversed ? styles['section--reversed'] : ''}`}>
      <div className={styles.section__container}>
        {/* Text content */}
        <div className={styles.section__content}>
          <div className={styles.section__text}>
            <h2 className={styles.section__title}>{title}</h2>
            <p className={styles.section__description}>{description}</p>
          </div>

          <div className={styles.section__actions}>
            {bullets.length > 0 && (
              <div className={styles.section__bullets}>
                {bullets.map((bullet, index) => (
                  <p key={index} className={styles.section__bullet}>
                    ✔ {bullet}
                  </p>
                ))}
              </div>
            )}

            <Button
              href={buttonHref}
              variant="primary"
              size="medium"
            >
              {buttonText}
            </Button>
          </div>
        </div>

        {/* Media: Video, Image, or Placeholder */}
        {video ? (
          <div className={styles.section__mediaWrapper}>
            <iframe
              src={embedUrl}
              className={styles.section__video}
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;"
              frameBorder="0"
              allowFullScreen
              title="Video"
            />
          </div>
        ) : image ? (
          <div className={styles.section__mediaWrapper}>
            <img
              src={image}
              alt={imageAlt}
              className={styles.section__image}
              loading="lazy"
            />
          </div>
        ) : (
          <div className={styles.section__mediaWrapper}>
            <div className={styles.section__placeholder}>
              <span className={styles.section__placeholderLabel}>Иллюстрация</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

FeatureSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  video: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  reversed: PropTypes.bool,
};

export default FeatureSection;
