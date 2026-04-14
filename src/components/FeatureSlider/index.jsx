import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './FeatureSlider.module.css';
import { Button } from '../Button';

/**
 * FeatureSlider - секция с автопрокруткой слайдов
 * Темный фон, текст слева, медиа + слайдер справа
 */
export function FeatureSlider({
  sectionTitle,
  sectionDescription,
  buttonText = 'Оставить заявку',
  buttonHref = '#demo',
  slides = [],
  autoplayInterval = 8000,
  isActive = true, // Контроль autoplay для неактивных секций
  compact = false, // Компактный режим для использования в pinned группе
  panelBackground, // URL градиента для фона плашки слайдера
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slidesCount = slides.length;

  // Переключение на следующий слайд
  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
    setAnimationKey((prev) => prev + 1);
  }, [slidesCount]);

  // Переключение на предыдущий слайд
  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
    setAnimationKey((prev) => prev + 1);
  }, [slidesCount]);

  // Ручное переключение — останавливает autoplay
  const handleManualNext = useCallback(() => {
    setAutoplayPaused(true);
    goToNext();
  }, [goToNext]);

  const handleManualPrev = useCallback(() => {
    setAutoplayPaused(true);
    goToPrev();
  }, [goToPrev]);

  // Сброс паузы и слайда при смене активной секции
  useEffect(() => {
    if (isActive) {
      setAutoplayPaused(false);
      setCurrentSlide(0);
      setAnimationKey((prev) => prev + 1);
    }
  }, [isActive]);

  // Автопрокрутка через setTimeout (только когда секция активна и autoplay не остановлен)
  useEffect(() => {
    if (slidesCount <= 1 || !isActive || autoplayPaused) return;

    timerRef.current = setTimeout(() => {
      goToNext();
    }, autoplayInterval);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide, autoplayInterval, slidesCount, goToNext, animationKey, isActive, autoplayPaused]);

  // Обработка свайпов
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      setAutoplayPaused(true);
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  const currentSlideData = slides[currentSlide] || {};

  if (slidesCount === 0) return null;

  return (
    <section className={`${styles.section} ${compact ? styles.sectionCompact : ''}`}>
      <div className={styles.container}>
        {/* Левая часть: текст + кнопка (десктоп) */}
        <div className={styles.content}>
          <div className={styles.text}>
            <h2 className={styles.title}>{sectionTitle}</h2>
            <p className={styles.description}>{sectionDescription}</p>
          </div>
          <div className={styles.buttonDesktop}>
            <Button href={buttonHref} variant="primary" size="medium">
              {buttonText}
            </Button>
          </div>
        </div>

        {/* Правая часть: медиа + слайдер */}
        <div
          className={`${styles.sliderWrapper} ${compact ? styles.sliderWrapperCompact : ''}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Область для медиа-контента */}
          <div className={styles.mediaArea}>
            {/* Счётчик слайдов */}
            {slidesCount > 1 && (
              <span className={styles.slideCounter}>
                {currentSlide + 1} из {slidesCount}
              </span>
            )}
            {/* Фоны слайдов */}
            {slides.map((slide, index) => (
              <div
                key={`bg-${index}`}
                className={`${styles.mediaBg} ${index === currentSlide ? styles.mediaBgActive : ''}`}
              >
                {slide.background && (
                  <img
                    src={slide.background}
                    alt=""
                    className={styles.mediaBgImg}
                  />
                )}
              </div>
            ))}
            {/* Контент слайдов */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${styles.mediaSlide} ${index === currentSlide ? styles.mediaSlideActive : ''}`}
              >
                {slide.media}
              </div>
            ))}
          </div>

          {/* Плашка слайдера */}
          <div
            className={styles.sliderPanel}
            style={panelBackground ? { backgroundImage: `url(${panelBackground})` } : undefined}
          >
            <div className={styles.sliderContent}>
              <div className={styles.sliderText}>
                <p className={styles.sliderTitle}>{currentSlideData.title}</p>
                <p className={styles.sliderDescription}>{currentSlideData.description}</p>
              </div>

              {/* Навигация */}
              {slidesCount > 1 && (
                <div className={styles.sliderNav}>
                  <button
                    type="button"
                    className={styles.navButton}
                    onClick={handleManualPrev}
                    aria-label="Предыдущий слайд"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={styles.navButton}
                    onClick={handleManualNext}
                    aria-label="Следующий слайд"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Прогресс-бар (скрывается когда autoplay остановлен) */}
            {slidesCount > 1 && !autoplayPaused && (
              <div className={styles.progressBar}>
                <div
                  key={animationKey}
                  className={styles.progressFill}
                  style={{ '--duration': `${autoplayInterval}ms` }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Кнопка для мобильных — под слайдером */}
        <div className={styles.buttonMobile}>
          <Button href={buttonHref} variant="primary" size="medium">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}

FeatureSlider.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  sectionDescription: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      media: PropTypes.node.isRequired,
      background: PropTypes.string, // URL градиента/изображения для фона
    })
  ).isRequired,
  autoplayInterval: PropTypes.number,
  isActive: PropTypes.bool, // Контроль autoplay
  compact: PropTypes.bool, // Компактный режим для pinned группы
  panelBackground: PropTypes.string, // URL градиента для фона плашки
};

export default FeatureSlider;
