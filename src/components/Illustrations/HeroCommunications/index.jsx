import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './HeroCommunications.module.css';

// Assets
import productPhoto from '../../../assets/illustrations/hero-communications/product-photo.png';
import avatarImg from '../../../assets/illustrations/hero-communications/avatar.svg';
import starFilled from '../../../assets/illustrations/hero-communications/star-filled.svg';
import starEmpty from '../../../assets/illustrations/hero-communications/star-empty.svg';
import arrowUp from '../../../assets/illustrations/hero-communications/arrow-up.svg';
import chevronRight from '../../../assets/illustrations/hero-communications/chevron-right.svg';
import agentAvatar from '../../../assets/illustrations/hero-communications/agent-avatar.svg';
import toneAttentive from '../../../assets/illustrations/hero-communications/tone-attentive.svg';
import toneExpert from '../../../assets/illustrations/hero-communications/tone-expert.svg';
import toneFriendly from '../../../assets/illustrations/hero-communications/tone-friendly.svg';

// Chat messages for step 2
const chatMessages = [
  { type: 'user', text: 'Отвечай на\u00A0негативные отзывы за\u00A0последние 7\u00A0дней. Информацию бери из\u00A0карточки товара.' },
  { type: 'agent', text: 'Понял, принял. Буду обрабатывать только отрицательные отзывы. Отвечать по\u00A0всем товарам или по\u00A0определённой группе?' },
  { type: 'user', text: 'По\u00A0всем' },
  { type: 'agent', text: 'Выберите Tone of\u00A0Voice для ответов: Экспертный, Дружелюбный или Внимательный?' },
  { type: 'user', text: 'Отвечай с\u00A0вниманием к\u00A0деталям' },
  { type: 'agent', text: 'Хотите проверять ответы перед публикацией, или я\u00A0могу публиковать их без подтверждения?' },
  { type: 'user', text: 'Без подтверждения' },
  { type: 'agent', text: 'Отлично, создаю сценарий.' },
];

// Scenario steps for step 3
const scenarioSteps = [
  'Собираем все отзывы без ответа за\u00A0последнюю неделю.',
  'Определяем настроение\u00A0— положительный, нейтральный или негативный',
  'Отвечаем только на\u00A0негативные\u00A0— они требуют реакции',
  'Аргументируем ответ, информацию берем из\u00A0описания товара и\u00A0частых вопросов',
  'Предлагаем написать нам если ответ не\u00A0помог',
];

// Tone options for step 5
const toneOptions = [
  {
    id: 'attentive',
    icon: toneAttentive,
    label: 'Внимательный',
    response: 'Здравствуйте!\n\nПерегрев через 5\u00A0минут\u00A0— это срабатывание встроенной термозащиты. Почти всегда причина в\u00A0засорённой решётке воздухозаборника на\u00A0задней части фена: пыль и\u00A0волосы ограничивают поток воздуха, и\u00A0датчик отключает нагрев.\n\nПопробуйте аккуратно её очистить\u00A0— в\u00A0большинстве случаев это полностью решает проблему. Если не\u00A0поможет\u00A0— напишите нам, разберёмся.',
  },
  {
    id: 'expert',
    icon: toneExpert,
    label: 'Экспертный',
    response: 'Здравствуйте.\n\nОписанное вами поведение\u00A0— штатная работа системы термозащиты. В\u00A095% случаев причина\u00A0— загрязнение решётки воздухозаборника: недостаточный приток воздуха вызывает перегрев, и\u00A0датчик отключает нагрев.\n\nОчистите заднюю сетку фена\u00A0— проблема уйдёт. Если нет\u00A0— обращайтесь, проведём диагностику.',
  },
  {
    id: 'friendly',
    icon: toneFriendly,
    label: 'Дружелюбный',
    response: 'Привет!\n\nПонимаем разочарование, но не\u00A0спешите расстраиваться\u00A0— фен в\u00A0порядке! Он просто перестраховывается 😊 Сзади на\u00A0корпусе есть сеточка-воздухозаборник\u00A0— если она забилась пылью или волосами, воздуху некуда проходить, и\u00A0фен сам себя выключает от\u00A0перегрева.\n\nПочистите её, и\u00A0всё заработает как надо. А\u00A0если вдруг нет\u00A0— пишите, поможем!',
  },
];

/**
 * HeroCommunications - Interactive illustration for Communications tab
 * Step 1: Shows review card, counter, product photo and drag slider
 * Step 2: Shows chat messages appearing one by one
 */
export function HeroCommunications({ onComplete }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const [reviewCount, setReviewCount] = useState(724);
  const [cardCycle, setCardCycle] = useState(0); // Triggers card animation cycle
  const [isCardAnimating, setIsCardAnimating] = useState(false); // Controls when animation plays
  const [currentRating, setCurrentRating] = useState(4.9); // Product rating
  const [ratingFlash, setRatingFlash] = useState(false); // Flash effect for rating
  const [step, setStep] = useState(1);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [exitingMessageIndex, setExitingMessageIndex] = useState(null); // Message currently fading out
  const [typingIndex, setTypingIndex] = useState(0); // Characters typed in current agent message
  const [isTyping, setIsTyping] = useState(false);
  const [visibleScenarioItems, setVisibleScenarioItems] = useState(0);
  const [checkedItems, setCheckedItems] = useState(0); // Number of items with checkmarks
  const [showFinalStep, setShowFinalStep] = useState(false);
  const [activeTone, setActiveTone] = useState('attentive');
  const [hoveredTone, setHoveredTone] = useState(null);
  const [mobileTab, setMobileTab] = useState('response'); // 'review' or 'response'
  const [answeredCount, setAnsweredCount] = useState(0); // Counter for final step
  const totalReviews = 998; // Total reviews to answer
  const [sliderWidth, setSliderWidth] = useState(250); // Default width for slider
  const sliderRef = useRef(null);
  const startXRef = useRef(0);

  // Measure slider width on mount and resize
  useEffect(() => {
    const updateSliderWidth = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.offsetWidth);
      }
    };

    updateSliderWidth();
    window.addEventListener('resize', updateSliderWidth);
    return () => window.removeEventListener('resize', updateSliderWidth);
  }, []);

  // Increment review count every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setReviewCount((prev) => {
        const increment = Math.floor(Math.random() * (28 - 9 + 1)) + 9; // 9-28
        return Math.min(prev + increment, 999);
      });

      // Trigger card conveyor animation
      setIsCardAnimating(true);
      // After animation completes, reset state and update cycle
      setTimeout(() => {
        setCardCycle((prev) => prev + 1);
        setIsCardAnimating(false);
      }, 500);

      // Flash the rating red and decrease by 0.1 (only if above 4.0)
      setCurrentRating((prev) => {
        if (prev > 4.0) {
          setRatingFlash(true);
          setTimeout(() => setRatingFlash(false), 600);
          return Math.max(prev - 0.1, 4.0);
        }
        return prev;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const triggerComplete = () => {
    setIsDragging(false);
    setDragProgress(1);
    // Transition to step 2 after slider animation completes
    setTimeout(() => {
      setStep(2);
    }, 400);
    if (onComplete) {
      onComplete();
    }
  };

  // Show chat messages one by one in step 2
  useEffect(() => {
    if (step !== 2) return;
    if (visibleMessages >= chatMessages.length) return;
    if (isTyping) return; // Wait for typing to finish

    const currentMessage = chatMessages[visibleMessages];

    const timer = setTimeout(() => {
      if (currentMessage.type === 'agent') {
        // Start typing effect for agent messages
        setIsTyping(true);
        setTypingIndex(0);
      } else {
        // User messages appear instantly
        setVisibleMessages((prev) => prev + 1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [step, visibleMessages, isTyping]);

  // Typing effect for agent messages
  useEffect(() => {
    if (!isTyping) return;

    const currentMessage = chatMessages[visibleMessages];
    if (!currentMessage || currentMessage.type !== 'agent') return;

    const textLength = currentMessage.text.length;

    if (typingIndex < textLength) {
      const timer = setTimeout(() => {
        setTypingIndex((prev) => prev + 1);
      }, 15); // Fast typing: 15ms per character
      return () => clearTimeout(timer);
    } else {
      // Typing complete, move to next message
      setIsTyping(false);
      setTypingIndex(0);
      setVisibleMessages((prev) => prev + 1);
    }
  }, [isTyping, typingIndex, visibleMessages]);

  // Handle message window (max 5 visible) - fade out first when 6th appears
  useEffect(() => {
    if (visibleMessages > 5) {
      const exitIndex = visibleMessages - 6; // Index of message to fade out
      setExitingMessageIndex(exitIndex);
      // Clear exiting state after animation (600ms)
      const timer = setTimeout(() => {
        setExitingMessageIndex(null);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [visibleMessages]);

  // Transition from step 2 to step 3 after all messages
  useEffect(() => {
    if (step !== 2) return;
    if (visibleMessages < chatMessages.length) return;
    if (isTyping) return;

    // All messages shown, wait 1.5s then go to step 3
    const timer = setTimeout(() => {
      setStep(3);
    }, 1500);

    return () => clearTimeout(timer);
  }, [step, visibleMessages, isTyping]);

  // Show scenario items one by one in step 3
  useEffect(() => {
    if (step !== 3) return;

    if (visibleScenarioItems < scenarioSteps.length) {
      const timer = setTimeout(() => {
        setVisibleScenarioItems((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [step, visibleScenarioItems]);

  // Start checkmark animation after all items are shown (with delay)
  useEffect(() => {
    if (step !== 3) return;
    if (visibleScenarioItems < scenarioSteps.length) return;
    if (checkedItems >= scenarioSteps.length) return;

    // Delay before starting execution, then replace numbers with checkmarks
    const delay = checkedItems === 0 ? 800 : 400; // Longer initial delay
    const timer = setTimeout(() => {
      setCheckedItems((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [step, visibleScenarioItems, checkedItems]);

  // Show final step (step 5) after all checkmarks
  useEffect(() => {
    if (checkedItems < scenarioSteps.length) return;
    if (showFinalStep) return;

    const timer = setTimeout(() => {
      setShowFinalStep(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, [checkedItems, showFinalStep]);

  // Fast counting animation for final step
  useEffect(() => {
    if (!showFinalStep) return;
    if (answeredCount >= totalReviews) return;

    // Fast counting: increment quickly to reach total
    const increment = Math.ceil((totalReviews - answeredCount) / 20); // Dynamic step size
    const timer = setTimeout(() => {
      setAnsweredCount((prev) => Math.min(prev + increment, totalReviews));
    }, 30); // 30ms interval for fast counting

    return () => clearTimeout(timer);
  }, [showFinalStep, answeredCount]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    startXRef.current = clientX;
  };

  const handleDragMove = (e) => {
    if (!isDragging || !sliderRef.current) return;

    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startXRef.current;

    // If dragged more than 12px — auto-complete
    if (deltaX >= 12) {
      triggerComplete();
      return;
    }

    const sliderWidth = sliderRef.current.offsetWidth - 46;
    const progress = Math.min(Math.max(deltaX / sliderWidth, 0), 1);
    setDragProgress(progress);
  };

  const handleDragEnd = () => {
    // If any progress was made, complete; otherwise reset
    if (dragProgress > 0) {
      triggerComplete();
    } else {
      setDragProgress(0);
      setIsDragging(false);
    }
  };

  const handleClick = () => {
    // Click on handle — auto-complete
    if (!isDragging) {
      triggerComplete();
    }
  };

  // Stars rating (1 filled, 4 empty)
  const renderStars = () => (
    <div className={styles.stars}>
      <img src={starFilled} alt="" className={styles.star} />
      <img src={starEmpty} alt="" className={styles.star} />
      <img src={starEmpty} alt="" className={styles.star} />
      <img src={starEmpty} alt="" className={styles.star} />
      <img src={starEmpty} alt="" className={styles.star} />
    </div>
  );

  return (
    <div className={styles.illustration}>
      {/* Step 1: Review cards and slider */}
      <div className={`${styles.step} ${styles.step1} ${step === 1 ? styles.stepActive : styles.stepHidden}`}>
        {/* Content row - centered flex container */}
        <div className={styles.contentRow}>
          {/* Counter card */}
          <div className={styles.counterCard}>
            <span className={styles.counterLabel}>Неотвеченных отзывов</span>
            <div className={styles.counterValue}>
              <span className={styles.counterNumber}>{reviewCount}</span>
              <img src={arrowUp} alt="" className={styles.counterArrow} />
            </div>
          </div>

          {/* Review card with stacked cards behind */}
          <div className={styles.reviewCardWrapper}>
            {/* Fixed 3 stacked cards with conveyor animation */}
            {[0, 1, 2].map((i) => {
              // Apply animation classes only during animation
              const animationClass = isCardAnimating
                ? (i === 0 ? styles.cardExiting : i === 2 ? styles.cardEntering : styles.cardShifting)
                : '';

              return (
                <div
                  key={`${cardCycle}-${i}`}
                  className={`${styles.reviewCardShadow} ${animationClass}`}
                  style={{
                    bottom: `${-6 * (i + 1)}px`,
                    zIndex: -1 - i, // i=0: -1, i=1: -2, i=2: -3 (top shadow card above others)
                  }}
                />
              );
            })}
            <div className={styles.reviewCard}>
              {/* Header */}
              <div className={styles.reviewHeader}>
                <div className={styles.reviewUser}>
                  <img src={avatarImg} alt="" className={styles.reviewAvatar} />
                  <span className={styles.reviewUserName}>Покупатель</span>
                </div>
                <div className={styles.reviewMeta}>
                  {renderStars()}
                  <span className={styles.reviewDate}>Сегодня в 02:34</span>
                </div>
              </div>

              {/* Content */}
              <div className={styles.reviewContent}>
                <div className={styles.reviewBlock}>
                  <span className={styles.reviewLabel}>Недостатки:</span>
                  <span className={styles.reviewText}>Перегрев</span>
                </div>
                <div className={styles.reviewBlock}>
                  <span className={styles.reviewLabel}>Комментарий:</span>
                  <span className={styles.reviewText}>
                    Ужасно! Фен перегревается уже через 5{'\u00A0'}минут, пользоваться невозможно. Деньги на{'\u00A0'}ветер.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product photo */}
          <div className={styles.productPhoto}>
            <img src={productPhoto} alt="Товар" />
            <div className={`${styles.productRating} ${ratingFlash ? styles.productRatingFlash : ''}`}>
              <span className={`${styles.productRatingText} ${ratingFlash ? styles.productRatingTextFlash : ''}`}>
                Рейтинг {currentRating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Drag slider */}
        <div
          ref={sliderRef}
          className={styles.dragSlider}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            className={styles.dragHandle}
            style={{ transform: `translateX(${dragProgress * (sliderWidth - 46)}px)` }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            onClick={handleClick}
          >
            <img src={chevronRight} alt="" className={styles.dragIcon} />
          </div>
          <div
            className={styles.dragTextWrapper}
            style={{ opacity: 1 - dragProgress }}
          >
            <span className={styles.dragText}>
              Потяните чтобы автоматизировать
            </span>
          </div>
          <div className={styles.dragShimmer} aria-hidden="true" />
        </div>
      </div>

      {/* Step 2: Chat messages */}
      <div className={`${styles.step} ${styles.step2} ${step === 2 ? styles.stepActive : styles.stepHidden}`}>
        <div className={styles.chatContainer}>
          {chatMessages.map((message, index) => {
            // Calculate visible window (max 5 messages)
            const windowStart = Math.max(0, visibleMessages - 5);
            const isInWindow = index >= windowStart && index < visibleMessages;
            const isCurrentlyTyping = index === visibleMessages && isTyping && message.type === 'agent';
            const isVisible = isInWindow || isCurrentlyTyping;

            // Check if this message is exiting (fading out)
            const isExiting = index === exitingMessageIndex;

            // Don't render messages outside the window (unless exiting or typing)
            if (!isVisible && !isExiting) return null;

            const displayText = isCurrentlyTyping ? message.text.slice(0, typingIndex) : message.text;

            return (
              <div
                key={index}
                className={`
                  ${styles.chatMessage}
                  ${message.type === 'user' ? styles.chatMessageUser : styles.chatMessageAgent}
                  ${isVisible && !isExiting ? styles.chatMessageVisible : ''}
                  ${isExiting ? styles.chatMessageExiting : ''}
                `}
              >
                {/* Hidden full text to reserve height */}
                <span className={styles.chatMessageTextHidden} aria-hidden="true">{message.text}</span>
                {/* Visible typing text */}
                <span className={styles.chatMessageText}>{displayText}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step 3: Scenario steps */}
      <div className={`${styles.step} ${styles.step3} ${step === 3 && !showFinalStep ? styles.stepActive : styles.stepHidden}`}>
        <div className={styles.scenarioContainer}>
          {scenarioSteps.map((text, index) => {
            const isChecked = index < checkedItems;

            return (
              <div
                key={index}
                className={`${styles.scenarioItem} ${index < visibleScenarioItems ? styles.scenarioItemVisible : ''}`}
              >
                <div className={`${styles.scenarioIcon} ${isChecked ? styles.scenarioIconChecked : ''}`}>
                  {isChecked ? (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10.5L8 14.5L16 6.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div className={styles.scenarioText}>
                  <span>{text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step 5: Final - Review and Agent Response */}
      <div className={`${styles.step} ${styles.step5} ${showFinalStep ? styles.stepActive : styles.stepHidden}`}>
        {/* Main row: Counter + Cards stack + Tone switcher */}
        <div className={styles.finalCardsRow}>
          {/* Counter card */}
          <div className={`${styles.finalCounterCard} ${mobileTab === 'review' ? styles.mobileCardActive : ''}`}>
            <span className={styles.finalCounterLabel}>Отвечено отзывов</span>
            <div className={styles.finalCounterValue}>
              <span className={styles.finalCounterNumber}>{answeredCount}</span>
              <svg className={styles.finalCounterArrow} width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect width="12" height="12" rx="6" fill="#22c55e" fillOpacity="0.3"/>
                <path d="M6.35355 1.64645C6.15829 1.45118 5.84171 1.45118 5.64645 1.64645L2.46447 4.82843C2.2692 5.02369 2.2692 5.34027 2.46447 5.53553C2.65973 5.7308 2.97631 5.7308 3.17157 5.53553L6 2.70711L8.82843 5.53553C9.02369 5.7308 9.34027 5.7308 9.53553 5.53553C9.7308 5.34027 9.7308 5.02369 9.53553 4.82843L6.35355 1.64645ZM6 10L6.5 10L6.5 2L6 2L5.5 2L5.5 10L6 10Z" fill="#22c55e"/>
              </svg>
            </div>
            <span className={styles.finalCounterTotal}>из {totalReviews}</span>
          </div>

          {/* Stacked cards container */}
          <div className={styles.finalCardsStack}>
            {/* Back card - Review (partially visible) */}
            <div className={styles.finalReviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewUser}>
                  <img src={avatarImg} alt="" className={styles.reviewAvatar} />
                  <span className={styles.reviewUserName}>Покупатель</span>
                </div>
                <div className={styles.reviewMeta}>
                  {renderStars()}
                  <span className={styles.reviewDate}>Сегодня в 02:34</span>
                </div>
              </div>
              <div className={styles.reviewContent}>
                <div className={styles.reviewBlock}>
                  <span className={styles.reviewLabel}>Недостатки:</span>
                  <span className={styles.reviewText}>Перегрев</span>
                </div>
                <div className={styles.reviewBlock}>
                  <span className={styles.reviewLabel}>Комментарий:</span>
                  <span className={styles.reviewText}>
                    Ужасно! Фен перегревается уже через 5{'\u00A0'}минут, пользоваться невозможно. Деньги на{'\u00A0'}ветер.
                  </span>
                </div>
              </div>
            </div>

            {/* Front card - Agent response with shadow */}
            <div className={`${styles.agentCard} ${mobileTab === 'response' ? styles.mobileCardActive : ''}`}>
              <div className={styles.agentHeader}>
                <img src={agentAvatar} alt="" className={styles.agentAvatar} />
                <span className={styles.agentName}>Агент</span>
              </div>
              <div className={styles.agentContent}>
                {toneOptions.map((tone) => (
                  <div
                    key={tone.id}
                    className={`${styles.agentResponse} ${activeTone === tone.id ? styles.agentResponseActive : ''}`}
                  >
                    {tone.response.split('\n').map((line, i) => (
                      <p key={i}>{line || '\u00A0'}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tone switcher */}
          <div className={styles.toneSwitcher}>
            {toneOptions.map((tone) => (
              <button
                key={tone.id}
                type="button"
                className={`${styles.toneButton} ${activeTone === tone.id ? styles.toneButtonActive : ''}`}
                onClick={() => setActiveTone(tone.id)}
                onMouseEnter={() => setHoveredTone(tone.id)}
                onMouseLeave={() => setHoveredTone(null)}
                aria-label={tone.label}
              >
                <img src={tone.icon} alt="" className={styles.toneIcon} />
                {hoveredTone === tone.id && (
                  <div className={styles.toneTooltip}>
                    {tone.label}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile tabs */}
        <div className={styles.mobileTabs}>
          <button
            type="button"
            className={`${styles.mobileTab} ${mobileTab === 'review' ? styles.mobileTabActive : ''}`}
            onClick={() => setMobileTab('review')}
          >
            Статистика
          </button>
          <button
            type="button"
            className={`${styles.mobileTab} ${mobileTab === 'response' ? styles.mobileTabActive : ''}`}
            onClick={() => setMobileTab('response')}
          >
            Ответ
          </button>
        </div>

        {/* CTA Button */}
        <a href="#form" className={styles.ctaButton}>
          Оставить заявку
        </a>
      </div>
    </div>
  );
}

HeroCommunications.propTypes = {
  /** Callback when drag slider completes */
  onComplete: PropTypes.func,
};

export default HeroCommunications;
