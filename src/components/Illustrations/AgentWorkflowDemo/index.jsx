import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './AgentWorkflowDemo.module.css';
import automateIcon from '../../../assets/icons/agent-icon.svg';
import agentLogo from '../../../assets/icons/agent-logo.svg';

/**
 * AgentWorkflowDemo - интерактивная иллюстрация рабочего процесса агента
 * Pixel-perfect по макету Figma (node 244-10344)
 *
 * Последовательность:
 * 1. Кнопка "Автоматизировать" по центру (ожидание клика)
 * 2. Клик → crossfade к состоянию 2 с печатающимся текстом
 * 3. Задержка 0.5 сек → crossfade к состоянию 3
 * 4. Печатается текст, появляется кнопка "Запустить"
 * 5. "Запустить" перезапускает анимацию
 */
export function AgentWorkflowDemo({
  typingSpeed = 25,
  className = '',
  onStart,
  onComplete,
  onReset,
}) {
  // Состояния: 'idle' | 'typing1' | 'typing2' | 'complete'
  const [stage, setStage] = useState('idle');
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [showLaunchButton, setShowLaunchButton] = useState(false);
  const [cursorPosition, setCursorPosition] = useState('none');

  // Текст для состояния 2
  const fullText1 = 'Будет анализировать вопросы и генерировать информативные ответы на них, чтобы повысить лояльность клиентов.';

  // Текст для состояния 3
  const fullText2 = 'Начинаем автоматизацию ответов на отзывы и вопросы.\n\nУкажите товары, для которых нужно создать сценарий работы с вопросами.';

  // Сброс состояния
  const reset = useCallback(() => {
    setStage('idle');
    setDisplayedText1('');
    setDisplayedText2('');
    setShowLaunchButton(false);
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

  // Эффект печатания первого сообщения (состояние 2)
  useEffect(() => {
    if (stage !== 'typing1') return;

    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < fullText1.length) {
        setDisplayedText1(fullText1.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setCursorPosition('none');
        // Задержка 0.5 сек перед переходом к состоянию 3
        setTimeout(() => {
          setStage('typing2');
          setCursorPosition('text2');
        }, 500);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [stage, typingSpeed]);

  // Эффект печатания второго сообщения (состояние 3)
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
          setShowLaunchButton(true);
          setStage('complete');
          onComplete?.();
        }, 300);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [stage, typingSpeed, onComplete]);

  // Рендер текста с переносами строк
  const renderTextWithBreaks = (text) => {
    return text.split('\n').map((line, index, array) => (
      <span key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.container}>
        {/* Состояние 1: Кнопка "Автоматизировать" */}
        <div className={`${styles.state} ${stage === 'idle' ? styles.stateVisible : ''}`}>
          <button
            className={styles.automateButton}
            onClick={startAnimation}
          >
            <span className={styles.automateIconWrapper}>
              <img src={automateIcon} alt="" className={styles.automateIcon} />
            </span>
            <span className={styles.automateText}>Автоматизировать</span>
          </button>
        </div>

        {/* Состояние 2: Логотип агента + текст */}
        <div className={`${styles.state} ${stage === 'typing1' ? styles.stateVisible : ''}`}>
          <div className={styles.agentHeader}>
            <img src={agentLogo} alt="Агент" className={styles.agentLogo} />
          </div>
          <div className={styles.agentDescription}>
            {displayedText1}
            {cursorPosition === 'text1' && <span className={styles.cursor} />}
          </div>
        </div>

        {/* Состояние 3: Чат-пузырь + кнопка "Запустить" */}
        <div className={`${styles.state} ${stage === 'typing2' || stage === 'complete' ? styles.stateVisible : ''}`}>
          <div className={styles.chatBubble}>
            <div className={styles.agentTag}>
              <span className={styles.agentDot} />
              <span className={styles.agentName}>Агент коммуникаций</span>
            </div>
            <div className={styles.chatText}>
              {renderTextWithBreaks(displayedText2)}
              {cursorPosition === 'text2' && <span className={styles.cursor} />}
            </div>
          </div>

          <button
            className={`${styles.launchButton} ${showLaunchButton ? styles.launchButtonVisible : ''}`}
            onClick={reset}
          >
            <span className={styles.launchIconWrapper}>
              <img src={automateIcon} alt="" className={styles.launchIcon} />
            </span>
            <span className={styles.launchText}>Запустить</span>
          </button>
        </div>
      </div>
    </div>
  );
}

AgentWorkflowDemo.propTypes = {
  typingSpeed: PropTypes.number,
  className: PropTypes.string,
  onStart: PropTypes.func,
  onComplete: PropTypes.func,
  onReset: PropTypes.func,
};

export default AgentWorkflowDemo;
