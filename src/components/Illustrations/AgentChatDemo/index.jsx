import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './AgentChatDemo.module.css';
import automateIcon from '../../../assets/icons/agent-icon.svg';

/**
 * AgentChatDemo - интерактивная иллюстрация с анимацией чата агента
 *
 * Последовательность анимации:
 * 1. Кнопка "Автоматизировать" по центру
 * 2. Клик → появляется чат-пузырь с эффектом печатания
 * 3. Появляется второе сообщение
 * 4. Появляются кнопки ответа
 */
export function AgentChatDemo({
  autoPlay = false,
  autoPlayDelay = 2000,
  typingSpeed = 30,
  className = '',
  onStart,
  onComplete,
  onReset,
}) {
  // Состояния анимации: 'idle' | 'typing1' | 'typing2' | 'complete'
  const [stage, setStage] = useState('idle');
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedBullets, setDisplayedBullets] = useState([]);
  const [displayedText2, setDisplayedText2] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  // Позиция курсора: 'text1' | 'bullet0' | 'bullet1' | 'bullet2' | 'text2' | 'none'
  const [cursorPosition, setCursorPosition] = useState('none');

  const fullText1 = 'Начинаем автоматизацию ответов на отзывы и вопросы. Для начала определим тон ответа:';
  const bullets = [
    'Вежливый, дружелюбный, без фамильярности',
    'Без шаблонности и «роботизированности»',
    'Естественный русский язык',
  ];
  const fullText2 = 'Здесь всё верно, можем переходить к структуре ответа?';

  // Сброс состояния
  const reset = useCallback(() => {
    setStage('idle');
    setDisplayedText1('');
    setDisplayedBullets([]);
    setDisplayedText2('');
    setShowButtons(false);
    setCursorPosition('none');
    onReset?.();
  }, [onReset]);

  // Запуск анимации
  const startAnimation = useCallback(() => {
    if (stage !== 'idle') return;
    setStage('typing1');
    setCursorPosition('text1');
    onStart?.();
  }, [stage, onStart]);

  // Эффект печатания первого сообщения
  useEffect(() => {
    if (stage !== 'typing1') return;

    let charIndex = 0;
    let bulletIndex = 0;
    let bulletCharIndex = 0;
    let phase = 'text'; // 'text' | 'bullets'

    const interval = setInterval(() => {
      if (phase === 'text') {
        if (charIndex < fullText1.length) {
          setDisplayedText1(fullText1.slice(0, charIndex + 1));
          charIndex++;
        } else {
          phase = 'bullets';
          setCursorPosition('bullet0');
        }
      } else if (phase === 'bullets') {
        if (bulletIndex < bullets.length) {
          const currentBullet = bullets[bulletIndex];
          if (bulletCharIndex < currentBullet.length) {
            setDisplayedBullets(prev => {
              const newBullets = [...prev];
              newBullets[bulletIndex] = currentBullet.slice(0, bulletCharIndex + 1);
              return newBullets;
            });
            bulletCharIndex++;
          } else {
            bulletIndex++;
            bulletCharIndex = 0;
            if (bulletIndex < bullets.length) {
              setCursorPosition(`bullet${bulletIndex}`);
            }
          }
        } else {
          clearInterval(interval);
          setCursorPosition('none');
          setTimeout(() => {
            setStage('typing2');
            setCursorPosition('text2');
          }, 500);
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [stage, typingSpeed]);

  // Эффект печатания второго сообщения
  useEffect(() => {
    if (stage !== 'typing2') return;

    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < fullText2.length) {
        setDisplayedText2(fullText2.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setCursorPosition('none');
        setTimeout(() => {
          setShowButtons(true);
          setStage('complete');
          onComplete?.();
        }, 300);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [stage, typingSpeed, onComplete]);

  // AutoPlay
  useEffect(() => {
    if (autoPlay && stage === 'idle') {
      const timeout = setTimeout(startAnimation, autoPlayDelay);
      return () => clearTimeout(timeout);
    }
  }, [autoPlay, autoPlayDelay, stage, startAnimation]);

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.container}>
        {/* Кнопка "Автоматизировать" */}
        <button
          className={`${styles.automateButton} ${stage !== 'idle' ? styles.automateButtonHidden : ''}`}
          onClick={startAnimation}
          disabled={stage !== 'idle'}
        >
          <span className={styles.automateIconWrapper}>
            <img src={automateIcon} alt="" className={styles.automateIcon} />
          </span>
          <span className={styles.automateText}>Автоматизировать</span>
        </button>

        {/* Чат-пузырь 1 */}
        <div className={`${styles.chatBubble} ${styles.chatBubble1} ${stage !== 'idle' ? styles.chatBubbleVisible : ''}`}>
          <div className={styles.agentTag}>
            <span className={styles.agentDot} />
            <span className={styles.agentName}>Агент коммуникаций</span>
          </div>
          <div className={styles.chatContent}>
            <p className={styles.chatText}>
              {displayedText1}
              {cursorPosition === 'text1' && <span className={styles.cursor} />}
            </p>
            {displayedBullets.length > 0 && (
              <ul className={styles.bulletList}>
                {displayedBullets.map((bullet, index) => (
                  <li key={index}>
                    {bullet}
                    {cursorPosition === `bullet${index}` && <span className={styles.cursor} />}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Чат-пузырь 2 */}
        <div className={`${styles.chatBubble} ${styles.chatBubble2} ${stage === 'typing2' || stage === 'complete' ? styles.chatBubbleVisible : ''}`}>
          <p className={styles.chatText}>
            {displayedText2}
            {cursorPosition === 'text2' && <span className={styles.cursor} />}
          </p>
        </div>

        {/* Кнопки ответа */}
        <div className={`${styles.responseButtons} ${showButtons ? styles.responseButtonsVisible : ''}`}>
          <button className={styles.responseButton} onClick={reset}>
            Все хорошо
          </button>
          <button className={styles.responseButton} onClick={reset}>
            Хочу внести корректировки
          </button>
        </div>
      </div>
    </div>
  );
}

AgentChatDemo.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayDelay: PropTypes.number,
  typingSpeed: PropTypes.number,
  className: PropTypes.string,
  onStart: PropTypes.func,
  onComplete: PropTypes.func,
  onReset: PropTypes.func,
};

export default AgentChatDemo;
