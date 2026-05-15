import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './StrategiesSection.module.css';
import { typograph } from '../../utils/typograph';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';
import iconShield from '../../assets/icons/strategy-shield.svg';
import iconFrequency from '../../assets/icons/strategy-frequency.svg';
import iconSort from '../../assets/icons/strategy-sort.svg';
import iconFullwidth from '../../assets/icons/strategy-fullwidth.svg';
import iconEvents from '../../assets/icons/strategy-events.svg';

const CARD_WIDTH = 460;
const CARD_GAP = 72;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const MOBILE_GAP = 16;
const MOBILE_BP = 701;

const strategies = [
  {
    id: 'budget-protection',
    title: 'Защита бюджета',
    tags: 'WB · Единая ставка · CPM · 1 товар',
    description: 'Агент не допускает, чтобы кампания уходила в убыток. Опирается на ДРР, CPO, эффективность кластеров и остатки.',
    icon: iconShield,
    accentColor: '#ffecb7',
    borderColor: '#ffecb7',
  },
  {
    id: 'budget-protection-multi',
    title: 'Защита бюджета для нескольких товаров',
    tags: 'WB · Единая ставка · CPM · 2+ товара',
    description: 'То же, что для одного товара — но каждый артикул управляется независимо. Убыточный товар убирается, остальные продолжают работать.',
    icon: iconFrequency,
    accentColor: '#ffdbd2',
    borderColor: '#ffdbd2',
  },
  {
    id: 'best-position',
    title: 'Поиск лучшей позиции',
    tags: 'WB · Ручная ставка · CPM · 1 товар',
    description: 'Тестирует позиции в топ-10 и фиксирует ставку там, где конверсия максимальна.',
    icon: iconSort,
    accentColor: '#d8f995',
    borderColor: '#d8f995',
  },
  {
    id: 'scale-safe',
    title: 'Масштабирование без риска',
    tags: 'WB · CPC · 2+ товара',
    description: 'Поднимает ставку, проверяет результат по ДРР и динамике заказов. Нет роста — откат. Для кампаний, которые уже работают.',
    icon: iconFullwidth,
    accentColor: '#ead7fe',
    borderColor: '#ead7fe',
  },
  {
    id: 'order-growth',
    title: 'Рост заказов в рамках бюджета',
    tags: 'OZON · CPC + Оплата за заказ',
    description: 'Ищет оптимальную ставку, масштабирует то, что приносит заказы, сокращает расходы там, где реклама не окупается.',
    icon: iconEvents,
    accentColor: '#ffdbf1',
    borderColor: '#ffdbf1',
  },
];

const N = strategies.length; // 5

// Extended track: [clone_of_last, ...real items, clone_of_first]
// displayIndex=0      → clone of last  → visually last strategy
// displayIndex=1..N   → real items 0..N-1
// displayIndex=N+1    → clone of first → visually first strategy
const extended = [
  { ...strategies[N - 1], _key: 'clone-end' },
  ...strategies.map((s) => ({ ...s, _key: s.id })),
  { ...strategies[0], _key: 'clone-start' },
];

export function StrategiesSection({ className = '' }) {
  // Start at displayIndex=1 (real first card)
  const [displayIndex, setDisplayIndex] = useState(1);
  const [animated, setAnimated] = useState(true);
  const [containerWidth, setContainerWidth] = useState(1440);
  const wrapperRef = useRef(null);
  const animating = useRef(false);
  const startX = useRef(0);
  const dragging = useRef(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
    ro.observe(el);
    setContainerWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  // Re-enable transition after the instant clone-jump
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  const isMobile = containerWidth < MOBILE_BP;
  const cardWidth = isMobile ? Math.max(containerWidth - 40, 200) : CARD_WIDTH;
  const gap = isMobile ? MOBILE_GAP : CARD_GAP;
  const step = cardWidth + gap;

  // Center the active (displayIndex) card in the container
  const translateX = (containerWidth - cardWidth) / 2 - displayIndex * step;

  const navigate = (dir) => {
    if (animating.current) return;
    animating.current = true;
    setDisplayIndex((i) => i + dir);
  };

  // After CSS transition ends, snap from clone position to real position
  const handleTransitionEnd = (e) => {
    if (e.propertyName !== 'transform') return;
    animating.current = false;

    if (displayIndex === N + 1) {
      // Went to clone-of-first → snap to real first
      setAnimated(false);
      setDisplayIndex(1);
    } else if (displayIndex === 0) {
      // Went to clone-of-last → snap to real last
      setAnimated(false);
      setDisplayIndex(N);
    }
  };

  const handleTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
  };
  const handleMouseDown = (e) => { dragging.current = true; startX.current = e.clientX; };
  const handleMouseUp = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    const diff = startX.current - e.clientX;
    if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
  };

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          {typograph('5 готовых стратегий под разные задачи')}
        </h2>
        <p className={styles.subtitle}>
          {typograph('Стратегии разработаны командой «Дживио Студии» — партнёра Wildberries с 6+ годами в e-commerce')}
        </p>
      </div>

      <div
        ref={wrapperRef}
        className={styles.sliderOuter}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.track}
          style={{
            transform: `translateX(${translateX}px)`,
            transition: animated ? `transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)` : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((s, i) => {
            const isActive = i === displayIndex;
            const cardStyle = isMobile ? { width: `${cardWidth}px` } : undefined;
            return (
              <div
                key={s._key}
                className={`${styles.card} ${isActive ? styles.cardActive : styles.cardInactive}`}
                style={{
                  ...cardStyle,
                  borderColor: isActive ? s.borderColor : undefined,
                }}
                onClick={() => {
                  if (i < displayIndex) navigate(-1);
                  else if (i > displayIndex) navigate(1);
                }}
              >
                <div className={styles.cardHeader}>
                  <div
                    className={styles.iconBox}
                    style={{ background: isActive ? s.accentColor : '#e9ebf0' }}
                  >
                    <img src={s.icon} alt="" className={styles.icon} />
                  </div>
                  <span className={styles.cardTitle}>{s.title}</span>
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.cardTags}>{s.tags}</p>
                  <p className={styles.cardDesc}>{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.nav}>
        <button
          className={styles.navBtn}
          onClick={() => navigate(-1)}
          aria-label="Предыдущая стратегия"
        >
          <img src={chevronLeft} alt="" className={styles.navIcon} />
        </button>
        <button
          className={styles.navBtn}
          onClick={() => navigate(1)}
          aria-label="Следующая стратегия"
        >
          <img src={chevronRight} alt="" className={styles.navIcon} />
        </button>
      </div>
    </section>
  );
}

StrategiesSection.propTypes = {
  className: PropTypes.string,
};

export default StrategiesSection;
