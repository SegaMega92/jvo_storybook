import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './ProblemSolution.module.css';

import iconProblem from '../../assets/icons/icon-problem.png';
import iconSolution from '../../assets/icons/icon-solution.png';

let gsapCache = null;
async function loadGsap() {
  if (gsapCache) return gsapCache;
  const [{ gsap }, { ScrollTrigger }, { ScrollToPlugin }] = await Promise.all([
    import('gsap'), import('gsap/ScrollTrigger'), import('gsap/ScrollToPlugin'),
  ]);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsapCache = { gsap, ScrollTrigger, ScrollToPlugin };
  return gsapCache;
}

const defaultTags = [
  { label: 'Просадка динамики продаж', lossBadge: '↓ 11% выручка', autoBadge: 'Автоматизировано 48 задач', priority: 'Критично' },
  { label: 'Образования неликвида', lossBadge: '↓ 4% расходы', autoBadge: 'Автоматизировано 36 задач', priority: 'Критично' },
  { label: 'Просадки в воронке продаж', lossBadge: '↓ 1% выручка', autoBadge: 'Автоматизировано 26 задач', priority: 'Важно' },
  { label: 'Затраты на логистику и возвраты', lossBadge: '↓ 2% расходы', autoBadge: 'Автоматизировано 18 задач', priority: 'Критично' },
  { label: 'Высокий процент возвратов', lossBadge: '↓ 12% расходы', autoBadge: 'Автоматизировано 22 задач', priority: 'Важно' },
  { label: 'Неэффективная реклама', lossBadge: '↓ 7% расходы', autoBadge: 'Автоматизировано 31 задач', priority: 'Критично' },
  { label: 'OOS и риск OOS', lossBadge: '↓ 15% выручка', autoBadge: 'Автоматизировано 54 задач', priority: 'Критично' },
  { label: 'Региональная экспансия', lossBadge: '↓ 9% выручка', autoBadge: 'Автоматизировано 128 задач', priority: 'Рекомендовано' },
  { label: 'Отсутствие кросс-продаж', lossBadge: '↓ 3% выручка', autoBadge: 'Автоматизировано 67 задач', priority: 'Важно' },
  { label: 'SEO-оптимизация', lossBadge: '↓ 11% выручка', autoBadge: 'Автоматизировано 136 задач', priority: 'Рекомендовано' },
  { label: 'Неотработанные вопросы и негатив', lossBadge: '↓ 3% выручка', autoBadge: 'Автоматизировано 87 задач', priority: 'Важно' },
];

const SLOT_HEIGHT = 50; // fixed slot height for all items
const VISIBLE_COUNT = 5;
const HOLD_TIME = 800;   // пункт держится 0.8с
const STEP_TIME = 300;   // транзишен 0.3с

export function ProblemSolution({ tags = defaultTags }) {
  const [isOn, setIsOn] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  const containerRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const gsapRef = useRef(null);
  const isTogglingRef = useRef(false);

  const tagsCount = tags.length;
  // 3 copies: [set0][set1][set2] — we animate through set1, then jump back
  const extendedTags = [...tags, ...tags, ...tags];

  const isResettingRef = useRef(false);

  useEffect(() => { loadGsap().then((m) => { gsapRef.current = m; setGsapLoaded(true); }); }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia('(max-width: 960px)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Barrel step animation with seamless loop
  const [stepIndex, setStepIndex] = useState(tagsCount); // start in middle copy
  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => {
        const next = prev + 1;
        // When we've gone through the middle copy, schedule a silent reset
        if (next >= tagsCount * 2) {
          isResettingRef.current = true;
          // Reset happens on next tick
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setStepIndex(tagsCount);
              // Re-enable transition after reset
              requestAnimationFrame(() => {
                isResettingRef.current = false;
              });
            });
          });
        }
        return next;
      });
    }, HOLD_TIME + STEP_TIME);
    return () => clearInterval(interval);
  }, [tagsCount]);

  // GSAP pin
  useEffect(() => {
    if (isMobile === null || isMobile || !gsapLoaded) return;
    if (!containerRef.current || !pinWrapperRef.current) return;

    const { ScrollTrigger } = gsapRef.current;
    if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

    const timer = setTimeout(() => {
      const { ScrollTrigger: ST } = gsapRef.current;
      scrollTriggerRef.current = ST.create({
        trigger: containerRef.current,
        pin: pinWrapperRef.current,
        pinSpacing: true,
        start: 'top top',
        end: '+=100%',
        scrub: 0.3,
        snap: { snapTo: [0, 1], duration: 0.4, ease: 'power2.inOut' },
        onUpdate: (self) => {
          if (isTogglingRef.current) return;
          setIsOn(self.progress > 0.5);
        },
      });
      ST.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      if (scrollTriggerRef.current) { scrollTriggerRef.current.kill(); scrollTriggerRef.current = null; }
    };
  }, [isMobile, gsapLoaded]);

  const handleToggle = useCallback(() => {
    const next = !isOn;
    isTogglingRef.current = true;
    setIsOn(next);
    if (scrollTriggerRef.current && gsapRef.current && !isMobile) {
      const { gsap } = gsapRef.current;
      const trigger = scrollTriggerRef.current;
      gsap.to(window, {
        scrollTo: trigger.start + (trigger.end - trigger.start) * (next ? 1 : 0),
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => { isTogglingRef.current = false; },
      });
    } else {
      isTogglingRef.current = false;
    }
  }, [isOn, isMobile]);

  if (isMobile === null) return null;

  // Barrel math
  const barrelY = -stepIndex * SLOT_HEIGHT;
  const visibleHeight = VISIBLE_COUNT * SLOT_HEIGHT;
  const centerShift = (visibleHeight - SLOT_HEIGHT) / 2;

  const content = (
    <div className={`${styles.container} ${isOn ? styles.containerOn : styles.containerOff}`}>
      {/* Icon — sequential fade */}
      <div className={styles.iconWrap}>
        <img src={iconProblem} alt="" className={`${styles.icon} ${isOn ? styles.textHiding : styles.textShowing}`} />
        <img src={iconSolution} alt="" className={`${styles.icon} ${styles.iconAbs} ${isOn ? styles.textShowing : styles.textHiding}`} />
      </div>

      {/* Title — sequential fade */}
      <div className={styles.titleWrap}>
        <h2 className={`${styles.title} ${isOn ? styles.textHiding : styles.textShowing}`}>
          Скрытые бизнес-потери масштабируются с каждым SKU
        </h2>
        <h2 className={`${styles.title} ${styles.titleAbs} ${isOn ? styles.textShowing : styles.textHiding}`}>
          Действия важнее данных
        </h2>
      </div>

      {/* Subtitle — sequential fade */}
      <div className={styles.subtitleWrap}>
        <p className={`${styles.subtitle} ${isOn ? styles.textHiding : styles.textShowing}`}>
          Вы системно теряете прибыль из-за скрытых проблем в сложной структуре SKU,
          управляете последствиями вместо причин и сталкиваетесь с неконтролируемым
          ростом операционных задач.
        </p>
        <p className={`${styles.subtitle} ${styles.subtitleAbs} ${isOn ? styles.textShowing : styles.textHiding}`}>
          Без приоритизации и структурированных данных вы теряете контроль над
          собственным бизнесом. Приходится постоянно разбираться с последствиями,
          «тушить пожары» и бесконечно упускать возможности для роста.
        </p>
      </div>

      {/* Single shared barrel */}
      <div className={styles.carousel} style={{ height: visibleHeight }}>

        <div className={styles.barrel} style={{ transform: `translateY(${barrelY + centerShift}px)`, transition: isResettingRef.current ? 'none' : `transform ${STEP_TIME}ms cubic-bezier(0.4, 0, 0.2, 1)` }}>
          {extendedTags.map((tag, i) => {
            // Distance from active item (stepIndex) in item-units
            const dist = Math.abs(i - stepIndex);

            let opacity = 0;
            if (dist === 0) opacity = 1;
            else if (dist === 1) opacity = 0.1;
            else if (dist === 2) opacity = 0.05;

            const isCenter = dist === 0;

            return (
              <div key={`${tag.label}-${i}`} className={`${styles.tagRow} ${isCenter ? styles.tagRowActive : ''}`} style={{ height: SLOT_HEIGHT, opacity, transition: isResettingRef.current ? 'none' : `opacity ${STEP_TIME}ms ease` }}>
                <div className={`${styles.tag} ${isOn ? styles.tagOn : styles.tagOff}`}>
                  <span className={`${styles.tagLabel} ${isOn ? styles.tagLabelOn : styles.tagLabelOff}`}>{tag.label}</span>

                  {/* Loss badge (dark state only) */}
                  {!isOn && (
                    <span className={styles.lossBadge}>{tag.lossBadge}</span>
                  )}

                  {/* Auto badge (light state only) */}
                  {isOn && (
                    <span className={styles.autoBadge}>{tag.autoBadge}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Single shared toggle */}
      <button type="button" className={`${styles.toggle} ${isOn ? styles.toggleOn : styles.toggleOff}`} onClick={handleToggle}>
        <span className={styles.toggleLabel}>Автоматизация</span>
        <span className={`${styles.toggleTrack} ${isOn ? styles.toggleTrackOn : ''}`}>
          <span className={styles.toggleThumb} />
        </span>
      </button>
    </div>
  );

  const sectionBg = { background: isOn ? '#fff' : '#15181f' };

  if (isMobile) {
    return <section className={styles.section} style={sectionBg}>{content}</section>;
  }

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <section ref={pinWrapperRef} className={styles.section} style={sectionBg}>{content}</section>
    </div>
  );
}

ProblemSolution.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    lossBadge: PropTypes.string.isRequired,
    autoBadge: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  })),
};

export default ProblemSolution;
