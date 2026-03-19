import { useState, useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ComparisonSlider.module.css';
import { SectionHeader } from '../SectionHeader';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';
import checkmarkIcon from '../../assets/misc/checkmark.png';
import crossIcon from '../../assets/misc/cross.png';

// Данные слайдов (9 штук из Figma)
const defaultSlides = [
  {
    title: 'Оценка тональности',
    agent: {
      text: 'Оценивает не только звёзды, но и эмоциональный фон: система понимает истинный смысл сообщения и подбирает реакцию на основе контекста.',
    },
    competitor: {
      text: 'Ориентируются только на количество звёзд',
    },
  },
  {
    title: 'Корректировка рейтинга',
    agent: {
      text: 'Мягко просит клиента исправить ошибочную оценку через ответ на отзыв',
    },
    competitor: {
      text: '–',
    },
  },
  {
    title: 'Работа со сложными нишами',
    agent: {
      text: 'Возможность задавать подробные инструкции объёмом до 50 000: полные регламенты, составы, инструкции',
    },
    competitor: {
      text: 'Ограниченные лимиты: обычно до 2-5 тыс. знаков',
    },
  },
  {
    title: 'Умные кросс-продажи',
    agent: {
      text: 'Подбирает сопутствующие товары по смыслу и контексту отзыва',
    },
    competitor: {
      text: 'Предлагают случайные товары или только аналоги',
    },
  },
  {
    title: 'Контроль остатков',
    agent: {
      text: 'Проверяет наличие товара на складе перед тем, как рекомендовать его',
    },
    competitor: {
      text: 'Рекомендуют товары, которых может не быть в наличии',
    },
  },
  {
    title: 'Уникальный Tone of Voice',
    agent: {
      text: 'Создание индивидуального голоса бренда любой сложности',
    },
    competitor: {
      text: 'Шаблонные ответы или ограниченный выбор стилей',
    },
  },
  {
    title: 'Сложные стратегии',
    agent: {
      text: 'Гибкая настройка стратегий и мульти-промптов под разные задачи',
    },
    competitor: {
      text: 'Жесткие настройки через таблицы или формы',
    },
  },
  {
    title: 'Бизнес-аналитика',
    agent: {
      text: 'Готовые отчеты для производства и логистики о браке и качестве',
    },
    competitor: {
      text: 'Только статистика по количеству ответов',
    },
  },
  {
    title: 'Масштабируемость',
    agent: {
      text: 'Автоопределение бренда и копирование сценариев между МП в 1 клик',
    },
    competitor: {
      text: 'Требуется ручная настройка для каждого кабинета',
    },
  },
];

/**
 * ComparisonSlider - 3D карусель сравнения с конкурентами
 */
export function ComparisonSlider({
  title = 'Преимущества использования Агента Дживио',
  subtitle = 'для автоматизации ответов на отзывы на маркетплейсах',
  slides = defaultSlides,
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const containerRef = useRef(null);

  const totalSlides = slides.length;

  // Получить индекс с учётом цикличности
  const getCircularIndex = useCallback((index) => {
    return ((index % totalSlides) + totalSlides) % totalSlides;
  }, [totalSlides]);

  // Переход к следующему слайду
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => getCircularIndex(prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, getCircularIndex]);

  // Переход к предыдущему слайду
  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => getCircularIndex(prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, getCircularIndex]);

  // Переход к конкретному слайду
  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, currentIndex]);

  // Обработка drag/swipe
  const handleDragStart = (clientX) => {
    if (isTransitioning) return;
    setIsDragging(true);
    startX.current = clientX;
    currentX.current = clientX;
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    currentX.current = clientX;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = startX.current - currentX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  // Touch события
  const handleTouchStart = (e) => handleDragStart(e.touches[0].clientX);
  const handleTouchMove = (e) => handleDragMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleDragEnd();

  // Mouse события
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };
  const handleMouseMove = (e) => handleDragMove(e.clientX);
  const handleMouseUp = () => handleDragEnd();
  const handleMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }
  }, [goToNext, goToPrev]);

  // Получить позицию карточки относительно текущей
  const getCardPosition = (index) => {
    const diff = index - currentIndex;

    // Обработка цикличности
    if (diff > totalSlides / 2) return diff - totalSlides;
    if (diff < -totalSlides / 2) return diff + totalSlides;

    return diff;
  };

  // Получить класс позиции
  const getPositionClass = (position) => {
    if (position === 0) return styles.cardCenter;
    if (position === -1) return styles.cardLeft;
    if (position === 1) return styles.cardRight;
    if (position === -2) return styles.cardFarLeft;
    if (position === 2) return styles.cardFarRight;
    return '';
  };

  // Рендер карточки
  const renderCard = (slide, index) => {
    const position = getCardPosition(index);
    const isActive = position === 0;
    const isVisible = Math.abs(position) <= 2;

    if (!isVisible) return null;

    return (
      <div
        key={index}
        className={`${styles.card} ${getPositionClass(position)} ${isActive ? styles.cardActive : ''}`}
        aria-hidden={!isActive}
      >
        <div className={styles.cardInner}>
          {/* Заголовок карточки */}
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>{slide.title}</h3>
            <span className={styles.cardCounter}>
              {index + 1} из {totalSlides}
            </span>
          </div>

          {/* Контент карточки */}
          <div className={styles.cardContent}>
            {/* Агент Дживио */}
            <div className={styles.cardColumn}>
              <div className={styles.columnHeader}>
                <img src={checkmarkIcon} alt="" className={styles.columnIcon} />
                <span className={styles.columnTitle}>Агент коммуникаций Дживио</span>
              </div>
              <p className={styles.columnText}>{slide.agent.text}</p>
            </div>

            {/* Конкуренты */}
            <div className={styles.cardColumn}>
              <div className={styles.columnHeader}>
                <img src={crossIcon} alt="" className={styles.columnIcon} />
                <span className={styles.columnTitle}>Базовые ИИ-сервисы</span>
              </div>
              <p className={styles.columnTextMuted}>{slide.competitor.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={`${styles.section} ${className}`}>
      {/* Заголовок секции */}
      <SectionHeader
        title={title}
        subtitle={subtitle}
        titleSize="large"
        as="h2"
        className={styles.header}
      />

      {/* Карусель */}
      <div
        ref={containerRef}
        className={`${styles.carousel} ${isDragging ? styles.dragging : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        tabIndex={0}
        role="region"
        aria-label="Карусель сравнения"
      >
        <div className={styles.carouselTrack}>
          {slides.map((slide, index) => renderCard(slide, index))}
        </div>
      </div>

      {/* Навигация */}
      <div className={styles.navigation}>
        <button
          className={styles.arrowButton}
          onClick={goToPrev}
          aria-label="Предыдущий слайд"
        >
          <img src={chevronLeft} alt="" className={styles.arrowIcon} />
        </button>
        <button
          className={styles.arrowButton}
          onClick={goToNext}
          aria-label="Следующий слайд"
        >
          <img src={chevronRight} alt="" className={styles.arrowIcon} />
        </button>
      </div>
    </section>
  );
}

ComparisonSlider.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      agent: PropTypes.shape({
        text: PropTypes.string.isRequired,
      }).isRequired,
      competitor: PropTypes.shape({
        text: PropTypes.string.isRequired,
      }).isRequired,
    })
  ),
  className: PropTypes.string,
};

export default ComparisonSlider;
