import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './ProblemSolution.module.css';

import iconProblem from '../../assets/icons/icon-problem.png';
import iconSolution from '../../assets/icons/icon-solution.png';

import { loadGsap } from '../../utils/loadGsap';
import { typograph } from '../../utils/typograph';

const defaultTags = [
  { label: typograph('Просадка динамики продаж'), lossBadge: typograph('↓ 11% выручка'), autoBadge: typograph('Автоматизировано 48 задач'), priority: 'Критично' },
  { label: typograph('Образования неликвида'), lossBadge: typograph('↓ 4% расходы'), autoBadge: typograph('Автоматизировано 36 задач'), priority: 'Критично' },
  { label: typograph('Просадки в воронке продаж'), lossBadge: typograph('↓ 1% выручка'), autoBadge: typograph('Автоматизировано 26 задач'), priority: 'Важно' },
  { label: typograph('Затраты на логистику и возвраты'), lossBadge: typograph('↓ 2% расходы'), autoBadge: typograph('Автоматизировано 18 задач'), priority: 'Критично' },
  { label: typograph('Высокий процент возвратов'), lossBadge: typograph('↓ 12% расходы'), autoBadge: typograph('Автоматизировано 22 задач'), priority: 'Важно' },
  { label: typograph('Неэффективная реклама'), lossBadge: typograph('↓ 7% расходы'), autoBadge: typograph('Автоматизировано 31 задач'), priority: 'Критично' },
  { label: typograph('OOS и риск OOS'), lossBadge: typograph('↓ 15% выручка'), autoBadge: typograph('Автоматизировано 54 задач'), priority: 'Критично' },
  { label: typograph('Региональная экспансия'), lossBadge: typograph('↓ 9% выручка'), autoBadge: typograph('Автоматизировано 128 задач'), priority: 'Рекомендовано' },
  { label: typograph('Отсутствие кросс-продаж'), lossBadge: typograph('↓ 3% выручка'), autoBadge: typograph('Автоматизировано 67 задач'), priority: 'Важно' },
  { label: typograph('SEO-оптимизация'), lossBadge: typograph('↓ 11% выручка'), autoBadge: typograph('Автоматизировано 136 задач'), priority: 'Рекомендовано' },
  { label: typograph('Неотработанные вопросы и негатив'), lossBadge: typograph('↓ 3% выручка'), autoBadge: typograph('Автоматизировано 87 задач'), priority: 'Важно' },
];

// Text constants with typograph
const PROBLEM_TITLE = typograph('Скрытые потери прибыли, которые масштабируются с каждым новым SKU');
const PROBLEM_SUBTITLE = typograph('Вы системно теряете прибыль из-за скрытых проблем в сложной структуре SKU, управляете последствиями вместо причин и сталкиваетесь с неконтролируемым ростом операционных задач.');
const SOLUTION_TITLE = typograph('Действия важнее данных');
const SOLUTION_SUBTITLE = typograph('Без приоритизации и структурированных данных вы теряете контроль над собственным бизнесом. Приходится постоянно разбираться с последствиями, «тушить пожары» и бесконечно упускать возможности для роста.');

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
        end: '+=200%',
        scrub: 1,
        refreshPriority: -1,
        snap: { snapTo: [0, 1], duration: 0.4, ease: 'power2.inOut' },
        onUpdate: (self) => {
          if (isTogglingRef.current) return;
          setIsOn(self.progress > 0.5);
        },
      });

      // Last pinned section — one final refresh
      ST.refresh();
    }, 400);

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
          {PROBLEM_TITLE}
        </h2>
        <h2 className={`${styles.title} ${styles.titleAbs} ${isOn ? styles.textShowing : styles.textHiding}`}>
          {SOLUTION_TITLE}
        </h2>
      </div>

      {/* Subtitle — sequential fade */}
      <div className={styles.subtitleWrap}>
        <p className={`${styles.subtitle} ${isOn ? styles.textHiding : styles.textShowing}`}>
          {PROBLEM_SUBTITLE}
        </p>
        <p className={`${styles.subtitle} ${styles.subtitleAbs} ${isOn ? styles.textShowing : styles.textHiding}`}>
          {SOLUTION_SUBTITLE}
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

  // Mobile: two separate blocks stacked vertically
  if (isMobile) {
    return (
      <>
        {/* Problem block — dark */}
        <section className={`${styles.section} ${styles.mobileBlock}`} style={{ background: '#15181f', color: '#fff' }}>
          <div className={styles.mobileInner}>
            <img src={iconProblem} alt="" className={styles.icon} />
            <h2 className={styles.title}>{PROBLEM_TITLE}</h2>
            <p className={styles.subtitle}>{PROBLEM_SUBTITLE}</p>
            {/* Barrel with loss badges */}
            <div className={styles.carousel} style={{ height: VISIBLE_COUNT * SLOT_HEIGHT }}>
              <div className={styles.barrel} style={{ transform: `translateY(${barrelY + centerShift}px)`, transition: isResettingRef.current ? 'none' : `transform ${STEP_TIME}ms cubic-bezier(0.4, 0, 0.2, 1)` }}>
                {extendedTags.map((tag, i) => {
                  const dist = Math.abs(i - stepIndex);
                  let opacity = 0;
                  if (dist === 0) opacity = 1;
                  else if (dist === 1) opacity = 0.1;
                  else if (dist === 2) opacity = 0.05;
                  return (
                    <div key={`m-off-${i}`} className={`${styles.tagRow} ${dist === 0 ? styles.tagRowActive : ''}`} style={{ height: SLOT_HEIGHT, opacity, transition: isResettingRef.current ? 'none' : `opacity ${STEP_TIME}ms ease` }}>
                      <div className={`${styles.tag} ${styles.tagOff}`}>
                        <span className={`${styles.tagLabel} ${styles.tagLabelOff}`}>{tag.label}</span>
                        <span className={styles.lossBadge}>{tag.lossBadge}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Solution block — light */}
        <section className={`${styles.section} ${styles.mobileBlock}`} style={{ background: '#fff', color: '#15181f' }}>
          <div className={styles.mobileInner}>
            <img src={iconSolution} alt="" className={styles.icon} />
            <h2 className={styles.title}>{SOLUTION_TITLE}</h2>
            <p className={styles.subtitle}>{SOLUTION_SUBTITLE}</p>
          </div>
        </section>
      </>
    );
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
