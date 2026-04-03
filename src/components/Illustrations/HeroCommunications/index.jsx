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
import playButton from '../../../assets/illustrations/hero-communications/play-button.svg';
import checkmarkCircle from '../../../assets/illustrations/hero-communications/checkmark-circle.svg';
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
  const [step, setStep] = useState(1);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0); // Characters typed in current agent message
  const [isTyping, setIsTyping] = useState(false);
  const [visibleScenarioItems, setVisibleScenarioItems] = useState(0);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [playProgress, setPlayProgress] = useState(0);
  const [checkedItems, setCheckedItems] = useState(0); // Number of items with checkmarks
  const [showFinalStep, setShowFinalStep] = useState(false);
  const [activeTone, setActiveTone] = useState('attentive');
  const [hoveredTone, setHoveredTone] = useState(null);
  const [mobileTab, setMobileTab] = useState('response'); // 'review' or 'response'
  const [sliderWidth, setSliderWidth] = useState(250); // Default width for slider
  const sliderRef = useRef(null);
  const startXRef = useRef(0);
  const playTimerRef = useRef(null);

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
    } else if (!showPlayButton) {
      // All items shown, show play button after small delay
      const timer = setTimeout(() => {
        setShowPlayButton(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [step, visibleScenarioItems, showPlayButton]);

  // Play button loading animation (10 seconds)
  useEffect(() => {
    if (!showPlayButton) return;
    if (playProgress >= 100) return;

    playTimerRef.current = setInterval(() => {
      setPlayProgress((prev) => {
        if (prev >= 100) {
          clearInterval(playTimerRef.current);
          // TODO: Trigger next step when ready
          return 100;
        }
        return prev + 0.4; // 0.4% per 40ms = 100% in 10 seconds
      });
    }, 40);

    return () => {
      if (playTimerRef.current) {
        clearInterval(playTimerRef.current);
      }
    };
  }, [showPlayButton]);

  const handlePlayClick = () => {
    if (playTimerRef.current) {
      clearInterval(playTimerRef.current);
    }
    setPlayProgress(100);
  };

  // Start checkmark animation when play completes
  useEffect(() => {
    if (playProgress < 100) return;
    if (checkedItems >= scenarioSteps.length) return;

    // Hide play button and start replacing numbers with checkmarks
    setShowPlayButton(false);

    const timer = setTimeout(() => {
      setCheckedItems((prev) => prev + 1);
    }, 300); // 300ms interval between replacements

    return () => clearTimeout(timer);
  }, [playProgress, checkedItems]);

  // Show final step (step 5) after all checkmarks
  useEffect(() => {
    if (checkedItems < scenarioSteps.length) return;
    if (showFinalStep) return;

    const timer = setTimeout(() => {
      setShowFinalStep(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, [checkedItems, showFinalStep]);

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

          {/* Review card with shadow cards behind */}
          <div className={styles.reviewCardWrapper}>
            <div className={styles.reviewCardShadow1} />
            <div className={styles.reviewCardShadow2} />
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
            // Determine visibility and text to show
            const isVisible = index < visibleMessages || (index === visibleMessages && isTyping);
            const isCurrentlyTyping = index === visibleMessages && isTyping && message.type === 'agent';
            const displayText = isCurrentlyTyping ? message.text.slice(0, typingIndex) : message.text;

            return (
              <div
                key={index}
                className={`
                  ${styles.chatMessage}
                  ${message.type === 'user' ? styles.chatMessageUser : styles.chatMessageAgent}
                  ${isVisible ? styles.chatMessageVisible : ''}
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
                <div className={styles.scenarioIconWrapper}>
                  {/* Number */}
                  <div className={`${styles.scenarioNumber} ${isChecked ? styles.scenarioNumberHidden : ''}`}>
                    <span>{index + 1}</span>
                  </div>
                  {/* Checkmark */}
                  <img
                    src={checkmarkCircle}
                    alt=""
                    className={`${styles.scenarioCheckmark} ${isChecked ? styles.scenarioCheckmarkVisible : ''}`}
                  />
                </div>
                <div className={styles.scenarioText}>
                  <span>{text}</span>
                </div>
              </div>
            );
          })}
          <button
            type="button"
            className={`${styles.playButton} ${showPlayButton ? styles.playButtonVisible : ''} ${playProgress >= 100 ? styles.playButtonHiding : ''}`}
            onClick={handlePlayClick}
            aria-label="Запустить"
          >
            <svg className={styles.playButtonProgress} viewBox="0 0 68 68">
              <circle
                cx="34"
                cy="34"
                r="32"
                fill="none"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="5"
              />
              <circle
                cx="34"
                cy="34"
                r="32"
                fill="none"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 32}`}
                strokeDashoffset={`${2 * Math.PI * 32 * (1 - playProgress / 100)}`}
                transform="rotate(-90 34 34)"
              />
            </svg>
            <img src={playButton} alt="" className={styles.playButtonIcon} />
          </button>
        </div>
      </div>

      {/* Step 5: Final - Review and Agent Response */}
      <div className={`${styles.step} ${styles.step5} ${showFinalStep ? styles.stepActive : styles.stepHidden}`}>
        <div className={styles.finalContainer}>
          {/* Mobile tabs */}
          <div className={styles.mobileTabs}>
            <button
              type="button"
              className={`${styles.mobileTab} ${mobileTab === 'review' ? styles.mobileTabActive : ''}`}
              onClick={() => setMobileTab('review')}
            >
              Отзыв
            </button>
            <button
              type="button"
              className={`${styles.mobileTab} ${mobileTab === 'response' ? styles.mobileTabActive : ''}`}
              onClick={() => setMobileTab('response')}
            >
              Ответ
            </button>
          </div>

          <div className={styles.finalCards}>
            {/* Review card (same as step 1) */}
            <div className={`${styles.reviewCard} ${styles.finalReviewCard} ${mobileTab === 'review' ? styles.mobileCardActive : ''}`}>
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

            {/* Agent response card */}
            <div className={`${styles.agentCardWrapper} ${mobileTab === 'response' ? styles.mobileCardActive : ''}`}>
            <div className={styles.agentCard}>
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
          </div>

          {/* CTA Button */}
          <a href="#form" className={styles.ctaButton}>
            Оставить заявку
          </a>
        </div>
      </div>
    </div>
  );
}

HeroCommunications.propTypes = {
  /** Callback when drag slider completes */
  onComplete: PropTypes.func,
};

export default HeroCommunications;
