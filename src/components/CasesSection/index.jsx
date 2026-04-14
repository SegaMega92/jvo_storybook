import { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './CasesSection.module.css';
import rubleIcon from '../../assets/cases/icons/ruble.svg';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';

/**
 * CasesSection - секция "Результаты в кейсах"
 * Три карточки кейсов с фото, брендом, суммой и категорией
 * Ховер раскрывает описание и кнопку
 */
export function CasesSection({
  icon,
  title = 'Результаты в кейсах',
  subtitle = 'Описание, про что этот блок, преимущества или фишки',
  cases = [],
  className = '',
}) {
  // Для мобильного: какая карточка раскрыта
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardsRef = useRef(null);

  // Определяем мобильный режим
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 920);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Определяем текущую карточку по скроллу
  const getCurrentCardIndex = useCallback(() => {
    const track = cardsRef.current;
    if (!track) return 0;

    const card = track.querySelector(`.${styles.card}`);
    if (!card) return 0;

    const cardWidth = card.offsetWidth;
    const gap = 12;
    const scrollLeft = track.scrollLeft;

    return Math.round(scrollLeft / (cardWidth + gap));
  }, []);

  // Слушаем скролл для автораскрытия при свайпе
  useEffect(() => {
    const track = cardsRef.current;
    if (!track || !isMobile) return;

    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const currentIndex = getCurrentCardIndex();
        setExpandedIndex(currentIndex);
      }, 100);
    };

    track.addEventListener('scroll', handleScroll);
    return () => {
      track.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isMobile, getCurrentCardIndex]);

  const handleCardClick = (index) => {
    if (!isMobile) return;

    const currentIndex = getCurrentCardIndex();

    // Если кликнули на соседнюю карточку — скроллим к ней
    if (index !== currentIndex) {
      const direction = index > currentIndex ? 1 : -1;
      scrollToCard(index);
      setExpandedIndex(index);
    }
  };

  // Прокрутка к конкретной карточке
  const scrollToCard = (index) => {
    const track = cardsRef.current;
    if (!track) return;

    const card = track.querySelector(`.${styles.card}`);
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 12;
    const targetScroll = index * (cardWidth + gap);

    track.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  // Навигация стрелками
  const scrollByCard = (direction) => {
    const track = cardsRef.current;
    if (!track) return;

    const cards = track.querySelectorAll(`.${styles.card}`);
    if (!cards.length) return;

    const card = cards[0];
    const cardWidth = card.offsetWidth;
    const gap = 12;

    // Вычисляем текущий индекс
    const currentScroll = track.scrollLeft;
    const currentIndex = Math.round(currentScroll / (cardWidth + gap));

    // Вычисляем новый индекс
    const newIndex = Math.max(0, Math.min(cases.length - 1, currentIndex + direction));

    // Скроллим к новой карточке
    const targetScroll = newIndex * (cardWidth + gap);
    track.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });

    // Раскрываем новую карточку
    setExpandedIndex(newIndex);
  };

  const goNext = () => scrollByCard(1);
  const goPrev = () => scrollByCard(-1);

  return (
    <section className={`${styles.section} ${className}`}>
      {/* Заголовок */}
      <div className={styles.header}>
        {icon && (
          <div className={styles.icon}>
            {typeof icon === 'string' ? <img src={icon} alt="" /> : icon}
          </div>
        )}
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      {/* Карточки кейсов */}
      <div className={styles.cardsWrapper}>
        <div ref={cardsRef} className={styles.cards}>
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className={`${styles.card} ${expandedIndex === index ? styles.cardExpanded : ''}`}
              onClick={() => handleCardClick(index)}
              role="article"
            >
              {/* Фото */}
              <div className={styles.cardImage}>
                {caseItem.image ? (
                  <img src={caseItem.image} alt={caseItem.brandName || ''} />
                ) : (
                  <div className={styles.cardImagePlaceholder} />
                )}
              </div>

              {/* Плашка снизу */}
              <div className={styles.cardPanel}>
                {/* Логотип бренда */}
                {caseItem.brandLogo && (
                  <div className={styles.brandLogo}>
                    {typeof caseItem.brandLogo === 'string' ? (
                      <img src={caseItem.brandLogo} alt={caseItem.brandName || ''} />
                    ) : (
                      caseItem.brandLogo
                    )}
                  </div>
                )}

                {/* Бейджи */}
                <div className={styles.badges}>
                  {/* Бейдж суммы */}
                  {caseItem.amount && (
                    <div className={styles.amountBadge}>
                      <img src={rubleIcon} alt="" className={styles.amountIcon} />
                      <span className={styles.amountText}>{caseItem.amount}</span>
                    </div>
                  )}

                  {/* Бейдж категории */}
                  {caseItem.category && (
                    <div className={styles.categoryBadge}>
                      {caseItem.category}
                    </div>
                  )}
                </div>

                {/* Описание и кнопка (скрыты по умолчанию) */}
                <div className={styles.expandedContent}>
                  {caseItem.description && (
                    <p className={styles.description}>{caseItem.description}</p>
                  )}
                  {caseItem.href && (
                    <a
                      href={caseItem.href}
                      className={styles.caseButton}
                      onClick={(e) => e.stopPropagation()}
                    >
                      к кейсу
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Навигация (видна только на мобильных) */}
        <div className={styles.navigation}>
          <button
            type="button"
            className={styles.navButton}
            onClick={goPrev}
            aria-label="Предыдущий кейс"
          >
            <img src={chevronLeft} alt="" className={styles.navIcon} />
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={goNext}
            aria-label="Следующий кейс"
          >
            <img src={chevronRight} alt="" className={styles.navIcon} />
          </button>
        </div>
      </div>
    </section>
  );
}

CasesSection.propTypes = {
  /** Иконка над заголовком */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Заголовок секции */
  title: PropTypes.string,
  /** Подзаголовок */
  subtitle: PropTypes.string,
  /** Массив кейсов */
  cases: PropTypes.arrayOf(
    PropTypes.shape({
      /** Фото кейса (URL) */
      image: PropTypes.string,
      /** Логотип бренда (URL или React node) */
      brandLogo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      /** Название бренда (для alt) */
      brandName: PropTypes.string,
      /** Сумма (например "+ 10 000 000") */
      amount: PropTypes.string,
      /** Категория */
      category: PropTypes.string,
      /** Описание (показывается при ховере) */
      description: PropTypes.string,
      /** Ссылка на кейс */
      href: PropTypes.string,
    })
  ),
  /** Дополнительный CSS-класс */
  className: PropTypes.string,
};

export default CasesSection;
