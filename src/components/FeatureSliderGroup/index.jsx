import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './FeatureSliderGroup.module.css';
import { FeatureSlider } from '../FeatureSlider';
import { Button } from '../Button';

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * FeatureSliderGroup - обёртка для нескольких FeatureSlider секций
 *
 * Варианты:
 * - v1 (default): GSAP ScrollTrigger с "прикреплением" и табами-точками
 * - v2: Аккордеон с фичами слева и изображением справа
 */
export function FeatureSliderGroup({
  sections = [],
  autoplayInterval = 4000,
  variant = 'v1',
  // Props для v2
  title,
  description,
  buttonText = 'Оставить заявку',
  buttonHref = '#form',
  features = [],
  defaultFeatureIndex = 0,
}) {
  // Если variant='v2', рендерим аккордеон-версию
  if (variant === 'v2') {
    // Поддержка как старого API (title, features), так и нового (sections)
    const v2Sections = sections.length > 0 && sections[0].features
      ? sections // Новый API: массив секций
      : [{
          title,
          description,
          buttonText,
          buttonHref,
          features,
        }]; // Старый API: одна секция

    return (
      <FeatureSliderGroupV2
        sections={v2Sections}
        autoplayInterval={autoplayInterval}
      />
    );
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  const sectionsCount = sections.length;

  // Инициализация GSAP ScrollTrigger (только для десктопа)
  useEffect(() => {
    if (sectionsCount <= 1 || !containerRef.current || !pinWrapperRef.current) return;

    // На планшетах и мобильных (< 1180px) не используем пининг
    const isMobile = window.matchMedia('(max-width: 1180px)').matches;
    if (isMobile) {
      setIsReady(true);
      return;
    }

    // Небольшая задержка для корректного расчёта размеров
    const timer = setTimeout(() => {
      // Создаём ScrollTrigger с пинингом
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinWrapperRef.current,
        pinSpacing: true,
        start: 'top top',
        // Длина скролла = (количество секций - 1) * 100vh
        end: `+=${(sectionsCount - 1) * 100}%`,
        scrub: 0.5, // Плавность привязки к скроллу
        onUpdate: (self) => {
          // Вычисляем активный индекс на основе прогресса скролла
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * sectionsCount),
            sectionsCount - 1
          );
          setActiveIndex(newIndex);
        },
        onEnter: () => setIsReady(true),
        onLeaveBack: () => setIsReady(false),
      });

      setIsReady(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, [sectionsCount]);

  // Обновляем ScrollTrigger при изменении размеров окна
  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const isMobile = window.matchMedia('(max-width: 1180px)').matches;

        if (isMobile && scrollTriggerRef.current) {
          // Переход на мобильную версию — убиваем ScrollTrigger
          scrollTriggerRef.current.kill();
          scrollTriggerRef.current = null;
        } else if (!isMobile) {
          // Обновляем ScrollTrigger
          ScrollTrigger.refresh();
        }
      }, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Клик по табу — скролл к соответствующей позиции
  const handleTabClick = useCallback((index) => {
    if (!scrollTriggerRef.current) return;

    const trigger = scrollTriggerRef.current;
    const targetProgress = index / (sectionsCount - 1 || 1);
    const targetScroll = trigger.start + (trigger.end - trigger.start) * targetProgress;

    gsap.to(window, {
      scrollTo: targetScroll,
      duration: 0.8,
      ease: 'power2.inOut',
    });
  }, [sectionsCount]);

  if (sectionsCount === 0) return null;

  // Если 1 секция — просто FeatureSlider без табов и пининга
  if (sectionsCount === 1) {
    const section = sections[0];
    return (
      <FeatureSlider
        sectionTitle={section.sectionTitle}
        sectionDescription={section.sectionDescription}
        buttonText={section.buttonText}
        buttonHref={section.buttonHref}
        slides={section.slides}
        autoplayInterval={autoplayInterval}
      />
    );
  }

  // Несколько секций — GSAP ScrollTrigger с пинингом
  return (
    <div ref={containerRef} className={styles.container}>
      <div ref={pinWrapperRef} className={styles.pinWrapper}>
        {/* Sticky табы слева */}
        <nav className={styles.tabs} aria-label="Навигация по секциям">
          <div className={styles.tabsInner}>
            {sections.map((section, index) => (
              <button
                key={index}
                type="button"
                className={`
                  ${styles.tab}
                  ${isReady ? styles.tabVisible : ''}
                  ${index === activeIndex ? styles.tabActive : ''}
                `}
                onClick={() => handleTabClick(index)}
                aria-label={section.tabTitle}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
        </nav>

        {/* Секции — показываем только активную */}
        <div className={styles.sectionsContainer}>
          {sections.map((section, index) => (
            <div
              key={index}
              className={`
                ${styles.section}
                ${index === activeIndex ? styles.sectionActive : ''}
              `}
              aria-hidden={index !== activeIndex}
            >
              <FeatureSlider
                sectionTitle={section.sectionTitle}
                sectionDescription={section.sectionDescription}
                buttonText={section.buttonText}
                buttonHref={section.buttonHref}
                slides={section.slides}
                autoplayInterval={autoplayInterval}
                isActive={index === activeIndex}
                compact
                panelBackground={section.panelBackground}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

FeatureSliderGroup.propTypes = {
  // Common props
  variant: PropTypes.oneOf(['v1', 'v2']),
  // Props для v1
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      tabTitle: PropTypes.string.isRequired,
      sectionTitle: PropTypes.string.isRequired,
      sectionDescription: PropTypes.string.isRequired,
      buttonText: PropTypes.string,
      buttonHref: PropTypes.string,
      slides: PropTypes.array.isRequired,
      panelBackground: PropTypes.string,
    })
  ),
  autoplayInterval: PropTypes.number,
  // Props для v2
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string.isRequired,
    })
  ),
  defaultFeatureIndex: PropTypes.number,
};

/**
 * FeatureSliderGroupV2 - Аккордеон-версия с несколькими секциями
 * Точки слева для секций, фичи внутри каждой секции
 * GSAP ScrollTrigger + автоплей + анимации
 */
function FeatureSliderGroupV2({
  sections = [],
  autoplayInterval = 8000,
}) {
  // Состояние
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [prevSectionIndex, setPrevSectionIndex] = useState(null);
  const [prevFeatureIndex, setPrevFeatureIndex] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  const [isInView, setIsInView] = useState(false);

  // Refs
  const containerRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const timerRef = useRef(null);
  const imagesRef = useRef({}); // { "sectionIdx-featureIdx": element }
  const leftContentRef = useRef(null);
  const activeSectionRef = useRef(activeSectionIndex);
  const activeFeatureRef = useRef(activeFeatureIndex);
  const isInitializedRef = useRef(false);
  const isScrollingRef = useRef(false); // Блокирует ScrollTrigger во время программного скролла

  // Вычисляемые значения
  const sectionsCount = sections.length;
  const currentSection = sections[activeSectionIndex] || {};
  const currentFeatures = currentSection.features || [];
  const currentFeaturesCount = currentFeatures.length;

  // Синхронизация refs с state
  useEffect(() => {
    activeSectionRef.current = activeSectionIndex;
    activeFeatureRef.current = activeFeatureIndex;
  }, [activeSectionIndex, activeFeatureIndex]);


  // Проверка мобильного + debounced resize
  useEffect(() => {
    let resizeTimeout;
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 1100px)').matches);
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        checkMobile();
        if (scrollTriggerRef.current) {
          ScrollTrigger.refresh();
        }
      }, 150);
    };

    checkMobile();
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // GSAP ScrollTrigger (только десктоп) - переключает только секции
  useEffect(() => {
    if (isMobile === null || isMobile || sectionsCount <= 1 || !containerRef.current || !pinWrapperRef.current) {
      setIsInView(true);
      return;
    }

    const timer = setTimeout(() => {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinWrapperRef.current,
        pinSpacing: true,
        start: 'top top',
        end: `+=${(sectionsCount - 1) * 100}%`,
        scrub: 0.5,
        onUpdate: (self) => {
          // Игнорируем обновления во время программного скролла
          if (isScrollingRef.current) return;

          const progress = self.progress;
          const sectionIndex = Math.min(
            Math.floor(progress * sectionsCount),
            sectionsCount - 1
          );

          // Проверяем изменение секции (фичи не трогаем!)
          if (sectionIndex !== activeSectionRef.current) {
            setPrevSectionIndex(activeSectionRef.current);
            setPrevFeatureIndex(activeFeatureRef.current);
            setActiveSectionIndex(sectionIndex);
            setActiveFeatureIndex(0); // Сбрасываем на первую фичу при смене секции
            setAnimationKey((prev) => prev + 1);
            setAutoplayPaused(false); // Запускаем автоплей в новой секции
          }
        },
        onEnter: () => setIsInView(true),
        onLeave: () => setIsInView(false),
        onEnterBack: () => setIsInView(true),
        onLeaveBack: () => setIsInView(false),
      });

      setIsInView(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      // Очищаем GSAP анимации
      Object.values(imagesRef.current).forEach((img) => {
        if (img) gsap.killTweensOf(img);
      });
    };
  }, [isMobile, sectionsCount]);

  // Инициализация картинок
  useLayoutEffect(() => {
    if (isInitializedRef.current) return;

    const refs = Object.entries(imagesRef.current);
    if (refs.length === 0) return;

    refs.forEach(([key, img]) => {
      if (img) {
        const isActive = key === `${activeSectionIndex}-${activeFeatureIndex}`;
        gsap.set(img, { opacity: isActive ? 1 : 0, y: 0 });
      }
    });
    isInitializedRef.current = true;
  });

  // Анимация картинок при переключении
  // Вариант 1: Crossfade (Apple-style) — только opacity
  useEffect(() => {
    if (prevSectionIndex === null && prevFeatureIndex === null) return;

    const prevKey = `${prevSectionIndex}-${prevFeatureIndex}`;
    const activeKey = `${activeSectionIndex}-${activeFeatureIndex}`;

    if (prevKey === activeKey) return;

    const prevImage = imagesRef.current[prevKey];
    const activeImage = imagesRef.current[activeKey];

    if (prevImage) {
      gsap.killTweensOf(prevImage);
      gsap.to(prevImage, { opacity: 0, duration: 0.5, ease: 'power2.inOut' });
    }

    if (activeImage) {
      gsap.killTweensOf(activeImage);
      gsap.fromTo(activeImage, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.inOut' });
    }
  }, [activeSectionIndex, activeFeatureIndex, prevSectionIndex, prevFeatureIndex]);

  // Анимация левой части при смене секции
  useEffect(() => {
    if (prevSectionIndex === null || prevSectionIndex === activeSectionIndex) return;
    if (!leftContentRef.current) return;

    gsap.fromTo(
      leftContentRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
  }, [activeSectionIndex, prevSectionIndex]);

  // Автоплей (только внутри секции)
  useEffect(() => {
    if (currentFeaturesCount <= 1 || !isInView || autoplayPaused || isMobile) return;

    timerRef.current = setTimeout(() => {
      // Переключаем только внутри текущей секции
      const nextFeatureIndex = (activeFeatureIndex + 1) % currentFeaturesCount;
      setPrevSectionIndex(activeSectionIndex);
      setPrevFeatureIndex(activeFeatureIndex);
      setActiveFeatureIndex(nextFeatureIndex);
      setAnimationKey((prev) => prev + 1);
    }, autoplayInterval);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeFeatureIndex, activeSectionIndex, autoplayInterval, currentFeaturesCount, isInView, autoplayPaused, animationKey, isMobile]);

  // Клик по фиче — переключаем фичу, останавливаем автоплей
  const handleFeatureClick = useCallback((featureIndex) => {
    if (featureIndex === activeFeatureRef.current) return;
    setAutoplayPaused(true);
    setPrevSectionIndex(activeSectionRef.current);
    setPrevFeatureIndex(activeFeatureRef.current);
    setActiveFeatureIndex(featureIndex);
    setAnimationKey((prev) => prev + 1);
  }, []);

  // Клик по точке секции
  const handleSectionDotClick = useCallback((sectionIndex) => {
    if (sectionIndex === activeSectionRef.current) return;
    setAutoplayPaused(false); // Запускаем автоплей
    setPrevSectionIndex(activeSectionRef.current);
    setPrevFeatureIndex(activeFeatureRef.current);
    setActiveSectionIndex(sectionIndex);
    setActiveFeatureIndex(0); // Начинаем с первой фичи секции
    setAnimationKey((prev) => prev + 1);

    // Скролл к началу секции
    if (scrollTriggerRef.current && !isMobile) {
      isScrollingRef.current = true;
      const trigger = scrollTriggerRef.current;
      const targetProgress = sectionIndex / (sectionsCount - 1 || 1);
      const targetScroll = trigger.start + (trigger.end - trigger.start) * targetProgress;

      gsap.to(window, {
        scrollTo: targetScroll,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => { isScrollingRef.current = false; }
      });
    }
  }, [isMobile, sectionsCount]);


  // Рендер контента
  const renderContent = () => (
    <div className={styles.v2Container}>
      {/* Левая часть: текст + кнопка + аккордеон */}
      <div className={styles.v2Content} ref={leftContentRef}>
        <div className={styles.v2Header}>
          <div className={styles.v2TextBlock}>
            <h2 className={styles.v2Title}>{currentSection.title}</h2>
            <p className={styles.v2Description}>{currentSection.description}</p>
          </div>
          <Button href={currentSection.buttonHref || '#form'} variant="primary" size="medium">
            {currentSection.buttonText || 'Оставить заявку'}
          </Button>
        </div>

        {/* Аккордеон с фичами текущей секции */}
        <div className={styles.v2Features}>
          {currentFeatures.map((feature, index) => {
            const isActive = index === activeFeatureIndex;
            const isLast = index === currentFeatures.length - 1;

            return (
              <div
                key={index}
                className={`${styles.v2Feature} ${isActive ? styles.v2FeatureActive : ''} ${isLast ? styles.v2FeatureLast : ''}`}
                onClick={() => handleFeatureClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleFeatureClick(index);
                  }
                }}
                aria-expanded={isActive}
              >
                <div className={styles.v2ProgressBar}>
                  {isActive && !isMobile && !autoplayPaused && (
                    <div
                      key={animationKey}
                      className={styles.v2ProgressFill}
                      style={{ '--duration': `${autoplayInterval}ms` }}
                    />
                  )}
                </div>

                <div className={styles.v2FeatureHeader}>
                  {feature.icon && <span className={styles.v2FeatureIcon}>{feature.icon}</span>}
                  <div className={styles.v2FeatureContent}>
                    <p className={styles.v2FeatureTitle}>{feature.title}</p>
                    {isActive && feature.description && (
                      <p className={styles.v2FeatureDescription}>{feature.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Правая часть: изображения всех секций */}
      <div className={styles.v2ImageWrapper}>
        {sections.map((section, sIdx) =>
          section.features?.map((feature, fIdx) => {
            const isActive = sIdx === activeSectionIndex && fIdx === activeFeatureIndex;
            return (
              <div
                key={`${sIdx}-${fIdx}`}
                ref={(el) => (imagesRef.current[`${sIdx}-${fIdx}`] = el)}
                className={`${styles.v2Image} ${isActive ? styles.v2ImageActive : ''}`}
              >
                {/* Фоновый градиент */}
                {feature.background && (
                  <div className={styles.v2ImageBg}>
                    <img src={feature.background} alt="" className={styles.v2ImageBgImg} />
                  </div>
                )}
                {/* Скриншот поверх градиента */}
                <div className={styles.v2ImageSlide}>
                  <img src={feature.image} alt={feature.title} className={styles.v2ImageImg} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );

  // SSR или мобильная версия
  if (isMobile === null || isMobile) {
    return (
      <section className={styles.v2Section}>
        {sections.map((section, sIdx) => {
          // Берём первую картинку и фон из фич секции
          const firstFeature = section.features?.[0];
          const firstImage = firstFeature?.image;
          const firstBackground = firstFeature?.background;

          return (
            <div key={sIdx} className={styles.v2MobileSection}>
              {/* Изображение сверху на мобильных */}
              {firstImage && (
                <div className={styles.v2MobileImage}>
                  {firstBackground && (
                    <div className={styles.v2MobileImageBg}>
                      <img src={firstBackground} alt="" className={styles.v2MobileImageBgImg} />
                    </div>
                  )}
                  <div className={styles.v2MobileImageSlide}>
                    <img src={firstImage} alt={section.title || ''} />
                  </div>
                </div>
              )}

              <div className={styles.v2Header}>
                <div className={styles.v2TextBlock}>
                  <h2 className={styles.v2Title}>{section.title}</h2>
                  <p className={styles.v2Description}>{section.description}</p>
                </div>
                <Button href={section.buttonHref || '#form'} variant="primary" size="medium">
                  {section.buttonText || 'Оставить заявку'}
                </Button>
              </div>

              <div className={styles.v2Features}>
                {section.features?.map((feature, fIdx) => (
                  <div key={fIdx} className={`${styles.v2Feature} ${styles.v2FeatureActive}`}>
                    <div className={styles.v2ProgressBar} />
                    <div className={styles.v2FeatureHeader}>
                      {feature.icon && <span className={styles.v2FeatureIcon}>{feature.icon}</span>}
                      <div className={styles.v2FeatureContent}>
                        <p className={styles.v2FeatureTitle}>{feature.title}</p>
                        {feature.description && <p className={styles.v2FeatureDescription}>{feature.description}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    );
  }

  // Десктоп — с GSAP ScrollTrigger
  return (
    <div
      ref={containerRef}
      className={styles.v2Container2}
    >
      <section ref={pinWrapperRef} className={styles.v2Section}>
        {/* Точки секций слева — вне v2Container для позиционирования относительно viewport */}
        {sectionsCount > 1 && (
          <nav className={styles.v2SectionDots} aria-label="Навигация по секциям">
            {sections.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.v2SectionDot} ${index === activeSectionIndex ? styles.v2SectionDotActive : ''}`}
                onClick={() => handleSectionDotClick(index)}
                aria-label={`Секция ${index + 1}`}
                aria-pressed={index === activeSectionIndex}
              />
            ))}
          </nav>
        )}
        {renderContent()}
      </section>
    </div>
  );
}

export default FeatureSliderGroup;
