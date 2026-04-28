import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './AgentsShowcaseV2.module.css';

// Agent icons (96px PNG @2x)
import iconCommunications from '../../assets/agents/icon-communications-lg.png';
import iconPricing from '../../assets/agents/icon-pricing-lg.png';
import iconAdvertising from '../../assets/agents/icon-advertising-lg.png';

// GSAP lazy load
let gsapCache = null;
async function loadGsap() {
  if (gsapCache) return gsapCache;
  const [{ gsap }, { ScrollTrigger }, { ScrollToPlugin }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
    import('gsap/ScrollToPlugin'),
  ]);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsapCache = { gsap, ScrollTrigger, ScrollToPlugin };
  return gsapCache;
}

const defaultAgents = [
  {
    id: 'communications',
    tabLabel: 'Агент Коммуникаций',
    tabIcon: iconCommunications,
    title: 'ИИ-агент коммуникаций',
    icon: iconCommunications,
    gradientBg: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(255,219,241,0.8) 0%, rgba(234,215,254,0.5) 50%, rgba(247,240,255,0.3) 100%), linear-gradient(135deg, #fff 0%, #f7f0ff 30%, #ead7fe 70%, #ffdbf1 100%)',
    description: 'Отвечает на отзывы и вопросы, в указанное вами время. Общается на языке вашего бренда, без шаблонов, сохраняет тон и стиль общения.',
    features: [
      'Отвечает клиентам 24/7',
      'Учитывает тон и стиль бренда',
      'Рекомендует товары с учётом остатков',
      'Формирует отчёты по обратной связи',
    ],
    buttonText: 'Узнать больше',
    buttonHref: '/agent-communication',
  },
  {
    id: 'pricing',
    tabLabel: 'Агент Ценообразования',
    tabIcon: iconPricing,
    title: 'Агент Ценообразования',
    icon: iconPricing,
    gradientBg: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(216,249,149,0.6) 0%, rgba(132,224,132,0.4) 40%, rgba(41,158,88,0.2) 80%, transparent 100%), linear-gradient(135deg, #f0fde0 0%, #d8f995 40%, #84e084 70%, #299e58 100%)',
    description: 'Управляет ценами опираясь на события — удерживает маржу, разгоняет продажи и предотвращает Out-of-stock.',
    features: [
      'Сам управляет ценами',
      'Учитывает маржу, остатки и спрос',
      'Встраивается в воронку продаж',
      'Снижает риск out-of-stock',
      'Упрощает запуск новинок и акций',
    ],
    buttonText: 'Узнать больше',
    buttonHref: '/agent-prices',
  },
  {
    id: 'advertising',
    tabLabel: 'Агент Рекламы',
    tabIcon: iconAdvertising,
    title: 'Агент Рекламы',
    icon: iconAdvertising,
    gradientBg: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(234,215,254,0.7) 0%, rgba(193,111,251,0.3) 50%, rgba(255,143,218,0.2) 80%, transparent 100%), linear-gradient(135deg, #f7f0ff 0%, #ead7fe 30%, #c16ffb 70%, #ff8fda 100%)',
    description: 'Формирует ставки на АРК и Поиске с привязкой к конверсии карточки и органическим позициям',
    features: [
      'Целиком управляет вашими рекламными кампаниями на Wildberries и Ozon',
      'Использует Data Driven подход на 360°',
      'Убирает неэффективные сценарии',
      'Ускоряет рост, сохраняя прибыль',
    ],
    buttonText: 'Узнать больше',
    buttonHref: '/requestdemo',
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
  const [isMobile, setIsMobile] = useState(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  const containerRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const gsapRef = useRef(null);
  const slidesRef = useRef({});
  const titleRef = useRef(null);
  const isScrollingRef = useRef(false);
  const activeIndexRef = useRef(0);

  const agentsCount = agents.length;

  useEffect(() => { activeIndexRef.current = activeIndex; }, [activeIndex]);

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
      const slides = slidesRef.current;
      const tl = gsap.timeline();

      // Structure: [titleFade][hold0][trans0→1][hold1][trans1→2][hold2]
      const fadeDur = 0.5;  // title fade
      const holdDur = 1;    // each agent hold
      const transDur = 0.5; // crossfade between agents

      Object.entries(slides).forEach(([idx, el]) => {
        if (el) gsap.set(el, { opacity: parseInt(idx) === 0 ? 1 : 0 });
      });

      // Title fade at start of timeline
      tl.to(titleRef.current, { opacity: 0, duration: fadeDur * 0.6, ease: 'power2.in' }, 0);
      tl.to(titleRef.current, { height: 0, marginBottom: 0, duration: fadeDur * 0.4, ease: 'power2.inOut' }, fadeDur * 0.6);

      // Agent holds + transitions
      for (let i = 0; i < agentsCount - 1; i++) {
        const transStart = fadeDur + holdDur * (i + 1) + transDur * i;
        if (slides[i]) {
          tl.to(slides[i], { opacity: 0, duration: transDur, ease: 'power2.inOut' }, transStart);
        }
        if (slides[i + 1]) {
          tl.to(slides[i + 1], { opacity: 1, duration: transDur, ease: 'power2.inOut' }, transStart);
        }
      }

      // Ensure total duration includes final hold
      const totalDur = fadeDur + holdDur * agentsCount + transDur * (agentsCount - 1);
      tl.to({}, { duration: 0.01 }, totalDur);

      timelineRef.current = tl;

      // Snap points: center of each hold phase
      const snapPoints = [];
      for (let i = 0; i < agentsCount; i++) {
        const holdStart = fadeDur + holdDur * i + transDur * i;
        const holdCenter = (holdStart + holdDur / 2) / totalDur;
        snapPoints.push(holdCenter);
      }

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinWrapperRef.current,
        pinSpacing: true,
        start: 'top top',
        end: `+=${(agentsCount + 1) * 100}%`,
        animation: tl,
        scrub: 1,
        snap: {
          snapTo: snapPoints,
          duration: 0.5,
          delay: 0.1,
          ease: 'power2.inOut',
        },
        onUpdate: (self) => {
          if (isScrollingRef.current) return;
          const timePos = self.progress * totalDur;
          let newIndex = 0;
          for (let i = 0; i < agentsCount; i++) {
            const holdStart = fadeDur + holdDur * i + transDur * i;
            if (timePos >= holdStart) newIndex = i;
          }
          if (newIndex !== activeIndexRef.current) {
            setActiveIndex(newIndex);
          }
        },
      });

      // Refresh all ScrollTriggers so subsequent sections calculate correct positions
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      if (scrollTriggerRef.current) { scrollTriggerRef.current.kill(); scrollTriggerRef.current = null; }
      if (timelineRef.current) { timelineRef.current.kill(); timelineRef.current = null; }
    };
  }, [isMobile, agentsCount, gsapLoaded]);

  // Tab click — scroll to agent
  const handleTabClick = useCallback((index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);

    if (scrollTriggerRef.current && gsapRef.current && !isMobile) {
      isScrollingRef.current = true;
      const { gsap } = gsapRef.current;
      const trigger = scrollTriggerRef.current;
      // Match snap points calculation
      const fadeDur = 0.5;
      const holdDur = 1;
      const transDur = 0.5;
      const totalDur = fadeDur + holdDur * agentsCount + transDur * (agentsCount - 1);
      const holdStart = fadeDur + holdDur * index + transDur * index;
      const targetProgress = (holdStart + holdDur / 2) / totalDur;
      const targetScroll = trigger.start + (trigger.end - trigger.start) * targetProgress;
      gsap.to(window, {
        scrollTo: targetScroll,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => { isScrollingRef.current = false; },
      });
    }
  }, [activeIndex, agentsCount, isMobile]);

  if (isMobile === null) return null;

  // Render card content
  const renderCard = (agent) => (
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
          {agent.illustration || null}
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

  // Desktop — scroll-driven pinned layout with inline tabs
  return (
    <div ref={containerRef} className={styles.wrapper}>
      <section ref={pinWrapperRef} className={styles.section}>
        <div className={styles.container}>
          <div ref={titleRef} className={styles.titleBlock}>
            <h2 className={styles.title}>
              {title.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h2>
          </div>

          {/* Tabs — in flow, between title and slides */}
          <nav className={styles.tabs}>
            {agents.map((agent, index) => (
              <button
                key={agent.id}
                type="button"
                className={`${styles.tab} ${index === activeIndex ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(index)}
              >
                <div className={styles.tabIconWrapper}>
                  <img src={agent.tabIcon} alt="" className={styles.tabIcon} />
                </div>
                <span className={styles.tabLabel}>{agent.tabLabel}</span>
              </button>
            ))}
          </nav>

          {/* Slides */}
          <div className={styles.slidesWrapper}>
            {agents.map((agent, index) => (
              <div
                key={agent.id}
                ref={(el) => (slidesRef.current[index] = el)}
                className={styles.slide}
              >
                {renderCard(agent)}
              </div>
            ))}
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
