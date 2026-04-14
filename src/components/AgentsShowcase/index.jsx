import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './AgentsShowcase.module.css';
import { AgentIllustration } from './AgentIllustration';

// Default icons
import tabCommunicationsIcon from '../../assets/agents/tab-communications.svg';
import tabPricingIcon from '../../assets/agents/tab-pricing.svg';
import tabAdvertisingIcon from '../../assets/agents/tab-advertising.svg';
import iconCommunications from '../../assets/agents/icon-communications.svg';
import iconPricing from '../../assets/agents/icon-pricing.svg';
import iconAdvertising from '../../assets/agents/icon-advertising.svg';
import screenshotCommunications from '../../assets/agents/screenshot-communications.webp';
import screenshotPricing from '../../assets/agents/screenshot-pricing.webp';
import screenshotAdvertising from '../../assets/agents/screenshot-advertising.webp';

// GSAP cache
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

// Default agents data
const defaultAgents = [
  {
    id: 'communications',
    tabLabel: 'Агент Коммуникаций',
    tabIcon: tabCommunicationsIcon,
    tagText: 'Агент Коммуникаций',
    tagGradient: 'linear-gradient(128deg, #FFDBF1 9%, #FFDBD2 111%)',
    tagTextColor: '#3F0030',
    icon: iconCommunications,
    iconBg: null,
    description: 'Агент отвечает на отзывы и вопросы покупателей — с учётом контекста, тональности и правил бренда. Корректирует ошибочные оценки, рекомендует сопутствующие товары по актуальным остаткам. Из обратной связи собирает отчёты для производства, логистики и маркетинга.',
    buttonText: 'На страницу Агента',
    buttonHref: '/agents/communications',
    screenshot: screenshotCommunications,
  },
  {
    id: 'pricing',
    tabLabel: 'Агент Ценообразования',
    tabIcon: tabPricingIcon,
    tabIconBg: '#15181F',
    tagText: 'Агент Ценообразования',
    tagGradient: 'linear-gradient(158deg, #FFDBF1 0%, #FFF2CC 52%, #D6FE9E 100%)',
    tagTextColor: '#172104',
    icon: iconPricing,
    iconBg: 'linear-gradient(180deg, #172104 0%, #D8F995 100%)',
    description: 'Агент управляет ценами на основе данных продаж и воронки. Учитывает остатки, темп продаж, конкуренцию, сезонность — и десятки других параметров. Каждое решение привязано к вашим правилам и ограничениям по марже.',
    buttonText: 'На страницу Агента',
    buttonHref: '/agents/pricing',
    screenshot: screenshotPricing,
  },
  {
    id: 'advertising',
    tabLabel: 'Агент Рекламы',
    tabIcon: tabAdvertisingIcon,
    tagText: 'Агент Рекламы',
    tagGradient: 'linear-gradient(106deg, #FFDBF1 1%, #E9D2F9 106%)',
    tagTextColor: '#300247',
    icon: iconAdvertising,
    iconBg: null,
    description: 'Агент управляет рекламой на Wildberries и Ozon: ставки, ДРР, CPO, бюджет, остатки, кластеры. Контролирует экономику кампании и реагирует на изменения автоматически. Если товар заканчивается на складе — агент сам остановит на него рекламу. Когда остатки вернутся — включит обратно.',
    buttonText: 'На страницу Агента',
    buttonHref: '/agents/advertising',
    screenshot: screenshotAdvertising,
  },
];

/**
 * AgentsShowcase - Scroll-driven showcase of AI agents
 * Features pinned section with tabs and fade transitions
 */
export function AgentsShowcase({
  title = 'Для каждого процесса свой инструмент',
  agents = defaultAgents,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(null);
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const containerRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const gsapRef = useRef(null);
  const slidesRef = useRef({});
  const isScrollingRef = useRef(false);
  const activeIndexRef = useRef(0);

  const agentsCount = agents.length;

  // Sync ref with state
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Load GSAP
  useEffect(() => {
    loadGsap().then((modules) => {
      gsapRef.current = modules;
      setGsapLoaded(true);
    });
  }, []);

  // Check mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 960px)').matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // GSAP ScrollTrigger (desktop only)
  useEffect(() => {
    if (isMobile === null || isMobile || agentsCount <= 1 || !gsapLoaded) return;
    if (!containerRef.current || !pinWrapperRef.current) return;

    const { gsap, ScrollTrigger } = gsapRef.current;

    // Kill existing
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
    }

    const timer = setTimeout(() => {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinWrapperRef.current,
        pinSpacing: true,
        start: 'top top',
        end: `+=${(agentsCount - 1) * 100}%`,
        scrub: 0.5,
        onUpdate: (self) => {
          if (isScrollingRef.current) return;

          const progress = self.progress;
          setScrollProgress(progress);

          const newIndex = Math.min(
            Math.floor(progress * agentsCount),
            agentsCount - 1
          );

          if (newIndex !== activeIndexRef.current) {
            setPrevIndex(activeIndexRef.current);
            setActiveIndex(newIndex);
          }
        },
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, [isMobile, agentsCount, gsapLoaded]);

  // Initialize slides opacity
  useLayoutEffect(() => {
    if (!gsapRef.current || isMobile) return;

    const { gsap } = gsapRef.current;
    Object.entries(slidesRef.current).forEach(([index, slide]) => {
      if (slide) {
        gsap.set(slide, { opacity: parseInt(index) === activeIndex ? 1 : 0 });
      }
    });
  }, [gsapLoaded, isMobile]);

  // Fade animation
  useEffect(() => {
    if (prevIndex === null || !gsapRef.current) return;

    const { gsap } = gsapRef.current;
    const prevSlide = slidesRef.current[prevIndex];
    const activeSlide = slidesRef.current[activeIndex];

    if (prevSlide) {
      gsap.to(prevSlide, { opacity: 0, duration: 0.4, ease: 'power2.inOut' });
    }

    if (activeSlide) {
      gsap.to(activeSlide, { opacity: 1, duration: 0.4, ease: 'power2.inOut' });
    }
  }, [activeIndex, prevIndex]);

  // Tab click handler
  const handleTabClick = useCallback((index) => {
    if (index === activeIndex) return;

    setPrevIndex(activeIndex);
    setActiveIndex(index);

    // Update scroll progress immediately for gradient/scrollbar
    const targetProgress = index / (agentsCount - 1 || 1);
    setScrollProgress(targetProgress);

    if (scrollTriggerRef.current && gsapRef.current && !isMobile) {
      isScrollingRef.current = true;
      const { gsap } = gsapRef.current;
      const trigger = scrollTriggerRef.current;
      const targetScroll = trigger.start + (trigger.end - trigger.start) * targetProgress;

      gsap.to(window, {
        scrollTo: targetScroll,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          isScrollingRef.current = false;
        },
      });
    }
  }, [activeIndex, agentsCount, isMobile]);

  // SSR guard
  if (isMobile === null) return null;

  // Mobile: vertical layout
  if (isMobile) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.mobileCards}>
            {agents.map((agent) => (
              <div key={agent.id} className={styles.mobileCard}>
                <div className={styles.mobileIllustration}>
                  <AgentIllustration
                    activeAgent={agent.id}
                    scrollProgress={0}
                    isActive={true}
                  />
                </div>
                <div className={styles.mobileInfo}>
                  <div
                    className={styles.tag}
                    style={{
                      background: agent.tagGradient,
                      color: agent.tagTextColor,
                    }}
                  >
                    {agent.tagText}
                  </div>
                  <div
                    className={styles.iconWrapper}
                    style={{ background: agent.iconBg || 'transparent' }}
                  >
                    <img src={agent.icon} alt="" className={styles.icon} />
                  </div>
                  <p className={styles.description}>{agent.description}</p>
                  <a href={agent.buttonHref} className={styles.button}>
                    {agent.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: scroll-driven
  return (
    <div ref={containerRef} className={styles.wrapper}>
      <section ref={pinWrapperRef} className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>{title}</h2>

          {/* Tabs */}
          <nav className={styles.tabs}>
            {agents.map((agent, index) => (
              <button
                key={agent.id}
                type="button"
                className={`${styles.tab} ${index === activeIndex ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(index)}
              >
                <div
                  className={styles.tabIconWrapper}
                  style={{ background: agent.tabIconBg || 'transparent' }}
                >
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
                style={{ opacity: index === 0 ? 1 : 0 }}
              >
                <div className={styles.slideIllustration}>
                  <AgentIllustration
                    activeAgent={agent.id}
                    scrollProgress={scrollProgress}
                    isActive={index === activeIndex}
                  />
                </div>
                <div className={styles.slideInfo}>
                  <div
                    className={styles.tag}
                    style={{
                      background: agent.tagGradient,
                      color: agent.tagTextColor,
                    }}
                  >
                    {agent.tagText}
                  </div>
                  <div
                    className={styles.iconWrapper}
                    style={{ background: agent.iconBg || 'transparent' }}
                  >
                    <img src={agent.icon} alt="" className={styles.icon} />
                  </div>
                  <div className={styles.slideBottom}>
                    <p className={styles.description}>{agent.description}</p>
                    <a href={agent.buttonHref} className={styles.button}>
                      {agent.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

AgentsShowcase.propTypes = {
  title: PropTypes.string,
  agents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tabLabel: PropTypes.string.isRequired,
      tabIcon: PropTypes.string.isRequired,
      tabIconBg: PropTypes.string,
      tagText: PropTypes.string.isRequired,
      tagGradient: PropTypes.string.isRequired,
      tagTextColor: PropTypes.string,
      icon: PropTypes.string.isRequired,
      iconBg: PropTypes.string,
      description: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
      buttonHref: PropTypes.string.isRequired,
      screenshot: PropTypes.string.isRequired,
    })
  ),
};

export default AgentsShowcase;
