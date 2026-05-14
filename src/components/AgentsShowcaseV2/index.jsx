import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './AgentsShowcaseV2.module.css';

// Agent icons (96px PNG @2x)
import iconCommunications from '../../assets/agents/icon-communications-lg.png';
import iconPricing from '../../assets/agents/icon-pricing-lg.png';
import iconAdvertising from '../../assets/agents/icon-advertising-lg.png';

import { loadGsap } from '../../utils/loadGsap';
import { typograph, typographArray } from '../../utils/typograph';
import { IllustrationCommunications } from '../Illustrations/IllustrationCommunications';
import { IllustrationPricing } from '../Illustrations/IllustrationPricing';
import { IllustrationAdvertising } from '../Illustrations/IllustrationAdvertising';

// Gradient backgrounds for illustration area
import gradCommunications from '../../assets/agents/gradients/communications.webp';
import gradPricing from '../../assets/agents/gradients/pricing.webp';
import gradAdvertising from '../../assets/agents/gradients/advertising.webp';

const defaultAgents = [
  {
    id: 'communications',
    tabLabel: 'Агент Коммуникаций',
    tabIcon: iconCommunications,
    title: 'ИИ-агент Коммуникаций',
    icon: iconCommunications,
    gradientBg: `url(${gradCommunications}) center/cover no-repeat`,
    description: typograph('Отвечает на отзывы и вопросы в указанное вами время. Общается на языке вашего бренда, без шаблонов, сохраняет тон и стиль общения бренда'),
    features: typographArray([
      'Отвечает клиентам 24/7',
      'Учитывает тон и стиль бренда',
      'Рекомендует товары с учётом остатков',
      'Формирует отчёты по обратной связи',
    ]),
    buttonText: 'Узнать больше',
    buttonHref: '/agent-communication',
    illustration: <IllustrationCommunications />,
  },
  {
    id: 'pricing',
    tabLabel: 'Агент Ценообразования',
    tabIcon: iconPricing,
    title: 'ИИ-агент Ценообразования',
    icon: iconPricing,
    gradientBg: `url(${gradPricing}) center/cover no-repeat`,
    description: typograph('Управляет ценами, опираясь на события — удерживает маржу, активирует кросс-продажи и предотвращает Out-of-Stock'),
    features: typographArray([
      'Самостоятельно управляет ценами товаров',
      'Учитывает маржу, остатки и спрос',
      'Встраивается в воронку продаж',
      'Снижает риск Out-of-Stock',
      'Упрощает запуск новинок и акций',
    ]),
    buttonText: 'Узнать больше',
    buttonHref: '/agent-prices',
    illustration: <IllustrationPricing />,
  },
  {
    id: 'advertising',
    tabLabel: 'Агент Рекламы',
    tabIcon: iconAdvertising,
    title: 'ИИ-агент Рекламы',
    icon: iconAdvertising,
    gradientBg: `url(${gradAdvertising}) center/cover no-repeat`,
    description: typograph('Формирует ставки на АРК и Поиске с привязкой к конверсии карточки и органическим позициям'),
    features: typographArray([
      'Целиком управляет вашими рекламными кампаниями на Wildberries и Ozon',
      'Использует Data Driven подход на 360°',
      'Убирает неэффективные сценарии',
      'Ускоряет рост, сохраняя прибыль',
    ]),
    buttonText: 'Узнать больше',
    buttonHref: '/requestdemo',
    illustration: <IllustrationAdvertising />,
  },
];

/**
 * AgentsShowcaseV2 — Scroll-driven agent cards
 * Pinned center layout, fixed bottom tabs that fade in/out
 */
export function AgentsShowcaseV2({
  title = 'Для каждого процесса\nсвой инструмент',
  agents = defaultAgents,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // 0-1 horizontal progress
  const [isMobile, setIsMobile] = useState(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  const containerRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const gsapRef = useRef(null);
  const slidesRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const tabsNavRef = useRef(null);
  const tabIndicatorRef = useRef(null);
  const isScrollingRef = useRef(false);
  const activeIndexRef = useRef(0);

  const agentsCount = agents.length;

  useEffect(() => { activeIndexRef.current = activeIndex; }, [activeIndex]);

  // Position tab indicator
  const updateIndicator = useCallback((tabIdx) => {
    const nav = tabsNavRef.current;
    const indicator = tabIndicatorRef.current;
    if (!nav || !indicator) return;

    const tabs = nav.querySelectorAll('button');
    if (tabs.length === 0) return;

    const lowerIdx = Math.min(Math.floor(tabIdx), tabs.length - 1);
    const upperIdx = Math.min(lowerIdx + 1, tabs.length - 1);
    const frac = tabIdx - lowerIdx;

    const navRect = nav.getBoundingClientRect();
    const lowerRect = tabs[lowerIdx].getBoundingClientRect();
    const upperRect = tabs[upperIdx].getBoundingClientRect();

    const left = lowerRect.left - navRect.left + (upperRect.left - lowerRect.left) * frac;
    const width = lowerRect.width + (upperRect.width - lowerRect.width) * frac;

    indicator.style.transform = `translateX(${left}px)`;
    indicator.style.width = `${width}px`;
  }, []);

  // During manual scroll — smooth indicator from scrollProgress
  useEffect(() => {
    if (isMobile || isScrollingRef.current) return;
    const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);
    updateIndicator(clampedProgress * (agentsCount - 1));
  }, [scrollProgress, isMobile, agentsCount, updateIndicator]);

  // During tab click — snap indicator to activeIndex
  useEffect(() => {
    if (isMobile) return;
    updateIndicator(activeIndex);
  }, [activeIndex, isMobile, updateIndicator]);



  // Load GSAP
  useEffect(() => {
    loadGsap().then((modules) => {
      gsapRef.current = modules;
      setGsapLoaded(true);
    });
  }, []);

  // Check mobile
  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia('(max-width: 960px)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // GSAP Timeline + ScrollTrigger (desktop only)
  const timelineRef = useRef(null);

  useEffect(() => {
    if (isMobile === null || isMobile || agentsCount <= 1 || !gsapLoaded) return;
    if (!containerRef.current || !pinWrapperRef.current || !titleRef.current) return;

    const { gsap, ScrollTrigger } = gsapRef.current;

    // Kill previous
    if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
    if (timelineRef.current) timelineRef.current.kill();

    const timer = setTimeout(() => {
      const track = slidesRef.current;
      if (!track) return;

      const tl = gsap.timeline();

      // Phase 1: title fade out + collapse
      const fadeDur = 0.5;
      tl.to(titleRef.current, { opacity: 0, duration: fadeDur * 0.6, ease: 'power2.in' }, 0);
      tl.to(titleRef.current, { height: 0, marginBottom: 0, duration: fadeDur * 0.4, ease: 'power2.inOut' }, fadeDur * 0.6);

      // Phase 2: horizontal scroll of track
      // Calculate how far to scroll: total track width minus viewport width
      const cards = track.children;
      const cardWidth = cards[0]?.offsetWidth || 0;
      const gap = 24;
      const totalTrackWidth = agentsCount * cardWidth + (agentsCount - 1) * gap;
      const contentWidth = contentRef.current?.offsetWidth || 1200;
      const scrollDistance = Math.max(0, totalTrackWidth - contentWidth);

      // Each card gets its own hold + scroll segment
      const scrollPerCard = 1;
      const horizontalDur = agentsCount * scrollPerCard;

      tl.to(track, {
        x: -scrollDistance,
        duration: horizontalDur,
        ease: 'none',
      }, fadeDur);

      // Brief hold on last card before releasing pin
      const holdEnd = 0.3;
      const totalDur = fadeDur + horizontalDur + holdEnd;
      tl.to({}, { duration: holdEnd }, fadeDur + horizontalDur);

      timelineRef.current = tl;

      // Snap: one point per card
      const snapPoints = [];
      for (let i = 0; i < agentsCount; i++) {
        const cardX = i * (cardWidth + gap);
        const horizontalProgress = scrollDistance > 0 ? cardX / scrollDistance : 0;
        const timelinePos = fadeDur + horizontalProgress * horizontalDur;
        snapPoints.push(timelinePos / totalDur);
      }

      // 1 screen per card + 0.5 for title fade + 0.5 for hold
      const scrollEnd = (agentsCount + 1) * window.innerHeight;

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinWrapperRef.current,
        pinSpacing: true,
        start: 'top top',
        end: `+=${scrollEnd}px`,
        animation: tl,
        scrub: 1,
        refreshPriority: 1,
        onUpdate: (self) => {
          const currentX = Math.abs(parseFloat(gsap.getProperty(track, 'x')) || 0);
          // Always update progress for tab indicator
          const hProgress = scrollDistance > 0 ? currentX / scrollDistance : 0;
          setScrollProgress(Math.min(Math.max(hProgress, 0), 1));
          // Only update activeIndex when not programmatically scrolling
          if (isScrollingRef.current) return;
          const newIndex = Math.min(
            Math.round(currentX / (cardWidth + gap)),
            agentsCount - 1
          );
          if (newIndex !== activeIndexRef.current) {
            setActiveIndex(newIndex);
          }
        },
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      if (scrollTriggerRef.current) { scrollTriggerRef.current.kill(); scrollTriggerRef.current = null; }
      if (timelineRef.current) { timelineRef.current.kill(); timelineRef.current = null; }
    };
  }, [isMobile, agentsCount, gsapLoaded]);

  // Tab click — scroll to simple fixed points per agent
  const handleTabClick = useCallback((index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);

    if (scrollTriggerRef.current && gsapRef.current && !isMobile) {
      isScrollingRef.current = true;
      const { gsap } = gsapRef.current;
      const trigger = scrollTriggerRef.current;
      // Simple fixed points: evenly spaced after title fade
      // Agent 0 = 0.15, Agent 1 = 0.5, Agent 2 = 0.85
      const points = [0.15, 0.5, 0.85];
      const targetProgress = points[Math.min(index, points.length - 1)];
      const targetScroll = trigger.start + (trigger.end - trigger.start) * targetProgress;
      gsap.to(window, {
        scrollTo: targetScroll,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => { isScrollingRef.current = false; },
      });
    }
  }, [activeIndex, agentsCount, isMobile]);

  if (isMobile === null) return null;

  // Render card content
  const renderCard = (agent, index) => (
    <>
      <div className={styles.cardText}>
        <div className={styles.cardTextInner}>
          <div className={styles.cardHeader}>
            <img src={agent.icon} alt="" className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>{agent.title}</h3>
          </div>
          <p className={styles.cardDescription}>{agent.description}</p>
          <ul className={styles.cardFeatures}>
            {agent.features.map((f, i) => (
              <li key={i} className={styles.cardFeature}>{f}</li>
            ))}
          </ul>
        </div>
        <a href={agent.buttonHref} className={styles.cardButton}>
          {agent.buttonText}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
      <div className={styles.cardIllustration}>
        <div className={styles.cardIllustrationBg} style={{ background: agent.gradientBg }} />
        <div className={styles.cardIllustrationContent}>
          {agent.illustration ? React.cloneElement(agent.illustration, { isActive: index === activeIndex }) : null}
        </div>
      </div>
    </>
  );

  // Mobile — vertical cards
  if (isMobile) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            {title.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h2>
          <div className={styles.mobileCards}>
            {agents.map((agent) => (
              <div key={agent.id} className={styles.mobileCard}>
                <div className={styles.mobileIllustration}>
                  <div className={styles.cardIllustrationBg} style={{ background: agent.gradientBg }} />
                  {agent.illustration && (
                    <div className={styles.mobileIllustrationContent}>
                      {agent.illustration}
                    </div>
                  )}
                </div>
                <div className={styles.mobileInfo}>
                  <div className={styles.cardHeader}>
                    <img src={agent.icon} alt="" className={styles.cardIconMobile} />
                    <h3 className={styles.cardTitleMobile}>{agent.title}</h3>
                  </div>
                  <p className={styles.cardDescriptionMobile}>{agent.description}</p>
                  <ul className={styles.cardFeaturesMobile}>
                    {agent.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <a href={agent.buttonHref} className={styles.cardButton}>
                    {agent.buttonText}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop — horizontal scroll-driven layout
  return (
    <div ref={containerRef} className={styles.wrapper}>
      <section ref={pinWrapperRef} className={styles.section}>
        <div ref={contentRef} className={styles.container}>
          <div ref={titleRef} className={styles.titleBlock}>
            <h2 className={styles.title}>
              {title.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h2>
          </div>

          {/* Tabs with sliding indicator */}
          <nav ref={tabsNavRef} className={styles.tabs}>
            <div ref={tabIndicatorRef} className={styles.tabIndicator} />
            {agents.map((agent, index) => (
              <button
                key={agent.id}
                type="button"
                className={styles.tab}
                onClick={() => handleTabClick(index)}
              >
                <div className={styles.tabIconWrapper}>
                  <img src={agent.tabIcon} alt="" className={styles.tabIcon} />
                </div>
                <span className={styles.tabLabel}>{agent.tabLabel}</span>
              </button>
            ))}
          </nav>

          {/* Horizontal track */}
          <div className={styles.trackViewport}>
            <div ref={slidesRef} className={styles.track}>
              {agents.map((agent, index) => (
                <div key={agent.id} className={styles.trackCard}>
                  {renderCard(agent, index)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

AgentsShowcaseV2.propTypes = {
  title: PropTypes.string,
  agents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tabLabel: PropTypes.string.isRequired,
      tabIcon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      gradientBg: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      buttonText: PropTypes.string.isRequired,
      buttonHref: PropTypes.string.isRequired,
      illustration: PropTypes.node,
    })
  ),
};

export default AgentsShowcaseV2;
