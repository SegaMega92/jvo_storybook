import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './AgentIllustration.module.css';

// Card images
import cardCommunications from '../../assets/agents/card-communications.webp';
import cardPricing from '../../assets/agents/card-pricing.webp';
import cardAdvertising from '../../assets/agents/card-advertising.webp';

// Emoji
import emojiWave from '../../assets/agents/emoji-wave.svg';

/**
 * AgentIllustration - Animated illustration for agent showcase
 * Features gradient background, typing effect, and animated scrollbar
 */
export function AgentIllustration({
  activeAgent = 'communications',
  scrollProgress = 0,
  isActive = false,
  onAnimationComplete,
}) {
  const [typedText, setTypedText] = useState('');
  const [showUserMessage, setShowUserMessage] = useState(false);
  const [showAgentResponse, setShowAgentResponse] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typingRef = useRef(null);
  const animationStartedRef = useRef(false);

  // Agent data
  const agentsData = {
    communications: {
      userMessage: 'Отвечай на все негативные отзывы',
      agentResponse: 'Хорошо, буду отвечать на все негативные отзывы используя tone of voice бренда, только по делу и без воды.',
      stats: 'Автоматических ответов: 642',
      card: cardCommunications,
      scrollPosition: 0.15,
      gradient: {
        colors: ['#E2BBFF', '#FF8FDA', '#CF6BB0', '#9F4885', '#874070', '#6F245B', '#571245', '#3F0030'],
        stops: [0, 20, 32, 45, 51, 57, 64, 70],
      },
    },
    pricing: {
      userMessage: 'Удерживай уровень оборачиваемости',
      agentResponse: 'Понял. Тогда я буду изменять цену в зависимости от динамики изменений с сохранением оборачиваемости.',
      stats: 'Выбрано: 243 артикула',
      card: cardPricing,
      scrollPosition: 0.5,
      gradient: {
        colors: ['#D8F995', '#AEED8D', '#84E084', '#5AD47C', '#2FC774', '#299E58', '#23743C', '#1D4B20', '#1A3612', '#172104'],
        stops: [0, 5, 10, 15, 20, 33, 45, 57, 63, 70],
      },
    },
    advertising: {
      userMessage: 'Подними CPM в эффективных кластерах',
      agentResponse: 'Буду повышать CPM в кластерах с подтверждённым спросом и потенциалом роста видимости, сдерживая рост затрат.',
      stats: 'Выбрано: 64 артикула',
      card: cardAdvertising,
      scrollPosition: 0.85,
      gradient: {
        colors: ['#FF8FDA', '#C16FFB', '#300247'],
        stops: [0, 20, 70],
      },
    },
  };

  const currentAgent = agentsData[activeAgent] || agentsData.communications;

  // Calculate interpolated scroll position based on progress
  // Moves from top (0.15) to bottom (0.85) as scroll progresses
  const getInterpolatedScrollPosition = () => {
    const positions = {
      communications: 0.15,  // top
      pricing: 0.5,          // middle
      advertising: 0.85,     // bottom
    };

    // Map scroll progress to position (top to bottom)
    if (scrollProgress <= 0.33) {
      const t = scrollProgress / 0.33;
      return positions.communications + (positions.pricing - positions.communications) * t;
    } else if (scrollProgress <= 0.66) {
      const t = (scrollProgress - 0.33) / 0.33;
      return positions.pricing + (positions.advertising - positions.pricing) * t;
    } else {
      return positions.advertising;
    }
  };

  // Calculate interpolated gradient
  const getInterpolatedGradient = () => {
    const gradients = {
      communications: 'linear-gradient(180deg, #E2BBFF 0%, #FF8FDA 20%, #3F0030 70%)',
      pricing: 'linear-gradient(180deg, #D8F995 0%, #2FC774 20%, #172104 70%)',
      advertising: 'linear-gradient(180deg, #FF8FDA 0%, #C16FFB 20%, #300247 70%)',
    };

    // Smooth transition based on scroll progress
    if (scrollProgress <= 0.33) {
      return gradients.communications;
    } else if (scrollProgress <= 0.66) {
      return gradients.pricing;
    } else {
      return gradients.advertising;
    }
  };

  // Start animation when becoming active
  useEffect(() => {
    if (isActive && !animationStartedRef.current) {
      animationStartedRef.current = true;

      // Reset state
      setShowUserMessage(false);
      setShowAgentResponse(false);
      setTypedText('');
      setIsTyping(false);

      // Step 1: Show user message
      const userMsgTimer = setTimeout(() => {
        setShowUserMessage(true);
      }, 300);

      // Step 2: Start typing agent response
      const typingTimer = setTimeout(() => {
        setShowAgentResponse(true);
        setIsTyping(true);
      }, 800);

      return () => {
        clearTimeout(userMsgTimer);
        clearTimeout(typingTimer);
      };
    }

    if (!isActive) {
      animationStartedRef.current = false;
    }
  }, [isActive, activeAgent]);

  // Typing effect
  useEffect(() => {
    if (!isTyping || !showAgentResponse) return;

    const text = currentAgent.agentResponse;
    let currentIndex = 0;

    const typeChar = () => {
      if (currentIndex < text.length) {
        setTypedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        typingRef.current = setTimeout(typeChar, 20 + Math.random() * 30);
      } else {
        setIsTyping(false);
        onAnimationComplete?.();
      }
    };

    typingRef.current = setTimeout(typeChar, 200);

    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, [isTyping, showAgentResponse, currentAgent.agentResponse, onAnimationComplete]);

  const scrollbarPosition = getInterpolatedScrollPosition();

  return (
    <div
      className={styles.illustration}
      style={{ background: getInterpolatedGradient() }}
    >
      {/* Dialog area */}
      <div className={styles.dialogArea}>
        {/* User message */}
        <div className={`${styles.userMessage} ${showUserMessage ? styles.visible : ''}`}>
          <span className={styles.userMessageText}>{currentAgent.userMessage}</span>
        </div>

        {/* Agent response with emoji */}
        <div className={`${styles.agentResponse} ${showAgentResponse ? styles.visible : ''}`}>
          <img src={emojiWave} alt="" className={styles.emoji} />
          <span className={styles.agentResponseText}>
            {typedText}
            {isTyping && <span className={styles.cursor}>|</span>}
          </span>
        </div>
      </div>

      {/* Stats line */}
      <p className={styles.stats}>{currentAgent.stats}</p>

      {/* Card content */}
      <div className={styles.cardWrapper}>
        <img
          src={currentAgent.card}
          alt=""
          className={styles.card}
        />
      </div>

      {/* Scrollbar */}
      <div className={styles.scrollbar}>
        <div className={styles.scrollbarTrack} />
        <div
          className={styles.scrollbarThumb}
          style={{ top: `${scrollbarPosition * 100}%` }}
        />
      </div>

      {/* Glass effect at bottom */}
      <div className={styles.glassOverlay} />
    </div>
  );
}

AgentIllustration.propTypes = {
  activeAgent: PropTypes.oneOf(['communications', 'pricing', 'advertising']),
  scrollProgress: PropTypes.number,
  isActive: PropTypes.bool,
  onAnimationComplete: PropTypes.func,
};

export default AgentIllustration;
