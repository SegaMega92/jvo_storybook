import { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewsSection.module.css';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';

/**
 * ReviewsSection - секция "Что говорят наши клиенты"
 * Masonry-раскладка на десктопе, горизонтальный слайдер на мобильном
 * Анимация появления при скролле
 */
export function ReviewsSection({
  title = 'Что говорят наши клиенты',
  subtitle = 'Делегируйте управление личным кабинетом или пользуйтесь консультациями от экспертов',
  reviews = [],
  showHeader = false,
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [truncatedIndexes, setTruncatedIndexes] = useState(new Set());
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const textRefs = useRef([]);

  // Определяем мобильный режим
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // IntersectionObserver для анимации появления
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Навигация для мобильного слайдера
  const scrollByCard = useCallback((direction) => {
    const track = cardsRef.current;
    if (!track) return;

    const card = track.querySelector(`.${styles.card}`);
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 12;
    const currentScroll = track.scrollLeft;
    const currentIndex = Math.round(currentScroll / (cardWidth + gap));
    const newIndex = Math.max(0, Math.min(reviews.length - 1, currentIndex + direction));
    const targetScroll = newIndex * (cardWidth + gap);

    // Сворачиваем карточку при переключении
    setExpandedIndex(null);

    track.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  }, [reviews.length]);

  const goNext = () => scrollByCard(1);
  const goPrev = () => scrollByCard(-1);

  // Цвета для placeholder аватаров
  const placeholderColors = [
    '#ff8fda', // розовый
    '#1755ef', // синий
    '#425222', // оливковый
    '#098acf', // голубой
    '#8dd999', // светло-зеленый
    '#15181f', // черный
  ];

  const getPlaceholderColor = (index) => {
    return placeholderColors[index % placeholderColors.length];
  };

  // Сворачиваем карточку при скролле (свайпе)
  useEffect(() => {
    const track = cardsRef.current;
    if (!track || !isMobile) return;

    let scrollTimeout;
    const handleScroll = () => {
      // Сворачиваем при начале скролла
      if (expandedIndex !== null) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setExpandedIndex(null);
        }, 50);
      }
    };

    track.addEventListener('scroll', handleScroll);
    return () => {
      track.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isMobile, expandedIndex]);

  // Переключение раскрытия карточки
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Проверяем, какие тексты обрезаны
  useLayoutEffect(() => {
    const checkTruncation = () => {
      const newTruncated = new Set();
      textRefs.current.forEach((el, index) => {
        // Пропускаем раскрытую карточку
        if (index === expandedIndex) return;
        if (el && el.scrollHeight > el.clientHeight + 1) {
          newTruncated.add(index);
        }
      });
      setTruncatedIndexes(newTruncated);
    };

    // Небольшая задержка для применения стилей
    const timer = setTimeout(checkTruncation, 50);
    window.addEventListener('resize', checkTruncation);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkTruncation);
    };
  }, [reviews, isMobile, expandedIndex]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${className}`}
      aria-labelledby="reviews-title"
    >
      {/* Заголовок */}
      {showHeader && (
        <div className={styles.header}>
          <h2 id="reviews-title" className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}

      {/* Карточки */}
      <div className={styles.cardsWrapper}>
        <div
          ref={cardsRef}
          className={`${styles.cards} ${isVisible ? styles.cardsVisible : ''}`}
        >
          {reviews.map((review, index) => {
            const isExpanded = expandedIndex === index;
            const isTruncated = truncatedIndexes.has(index);
            const showExpandButton = isTruncated && !isExpanded;

            return (
              <article
                key={index}
                className={`${styles.card} ${isExpanded ? styles.cardExpanded : ''}`}
                style={{ '--animation-delay': `${index * 0.1}s` }}
                onClick={() => isMobile && isTruncated && toggleExpand(index)}
              >
                {/* Заголовок и текст отзыва */}
                <div className={styles.reviewContent}>
                  {review.title && (
                    <h3 className={styles.reviewTitle}>«{review.title}»</h3>
                  )}
                  <p
                    ref={(el) => (textRefs.current[index] = el)}
                    className={styles.reviewText}
                  >
                    {review.text}
                  </p>

                  {/* Кнопка "Показать полностью" */}
                  {showExpandButton && (
                    <button
                      type="button"
                      className={styles.expandButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(index);
                      }}
                    >
                      <span className={styles.expandButtonText}>Показать полностью</span>
                      <svg
                        className={styles.expandButtonIcon}
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 3.5L5 6.5L8 3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Информация о клиенте */}
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{review.name}</span>
                    {review.description && (
                      <span className={styles.authorDescription}>{review.description}</span>
                    )}
                  </div>

                  {/* Аватар (опционально) */}
                  {(review.avatar || review.placeholderColor) && (
                    <div className={styles.avatar}>
                      {review.avatar ? (
                        <img
                          src={review.avatar}
                          alt=""
                          className={styles.avatarImage}
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className={styles.avatarPlaceholder}
                          style={{ '--placeholder-color': review.placeholderColor }}
                        />
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Навигация для мобильных */}
        {isMobile && reviews.length > 1 && (
          <div className={styles.navigation}>
            <button
              type="button"
              className={styles.navButton}
              onClick={goPrev}
              aria-label="Предыдущий отзыв"
            >
              <img src={chevronLeft} alt="" className={styles.navIcon} />
            </button>
            <button
              type="button"
              className={styles.navButton}
              onClick={goNext}
              aria-label="Следующий отзыв"
            >
              <img src={chevronRight} alt="" className={styles.navIcon} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

ReviewsSection.propTypes = {
  /** Заголовок секции */
  title: PropTypes.string,
  /** Подзаголовок */
  subtitle: PropTypes.string,
  /** Показывать ли заголовок и подзаголовок */
  showHeader: PropTypes.bool,
  /** Массив отзывов */
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      /** Заголовок отзыва (будет обёрнут в «кавычки») */
      title: PropTypes.string.isRequired,
      /** Текст отзыва (до 300 символов) */
      text: PropTypes.string.isRequired,
      /** Имя клиента */
      name: PropTypes.string.isRequired,
      /** Описание (должность, компания) */
      description: PropTypes.string,
      /** URL аватара */
      avatar: PropTypes.string,
      /** Цвет placeholder (если нет аватара) */
      placeholderColor: PropTypes.string,
    })
  ),
  /** Дополнительный CSS-класс */
  className: PropTypes.string,
};

export default ReviewsSection;
