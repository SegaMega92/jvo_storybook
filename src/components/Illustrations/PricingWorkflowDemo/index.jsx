import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './PricingWorkflowDemo.module.css';
import automateIcon from '../../../assets/icons/agent-icon.svg';
import agentLogo from '../../../assets/icons/agent-logo.svg';

/**
 * PricingWorkflowDemo - интерактивная иллюстрация для Агента ценообразования
 * По макету Figma (node 3-120)
 *
 * Последовательность:
 * 1. Кнопка "Автоматизировать" по центру (ожидание клика)
 * 2. Клик → crossfade к чату с печатающимся текстом
 * 3. Задержка → crossfade к пошаговому алгоритму
 * 4. Шаги появляются последовательно
 * 5. Кнопка "Запустить" перезапускает анимацию
 */
export function PricingWorkflowDemo({
  typingSpeed = 25,
  stepDelay = 400,
  className = '',
  onStart,
  onComplete,
  onReset,
}) {
  // Состояния: 'idle' | 'typing1' | 'steps' | 'complete'
  const [stage, setStage] = useState('idle');
  const [displayedText, setDisplayedText] = useState('');
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [showLaunchButton, setShowLaunchButton] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  // Текст для состояния 2
  const chatText = 'Запускаю сценарий безопасного снижения цен: Репрайсинг: минус 1₽ от конкурента.';

  // Шаги алгоритма
  const steps = [
    { number: '1', text: 'Получаем актуальные цены на аналогичные товары' },
    { number: '2', text: 'Проверяем цена конкурента по товару < текущей нашей цены' },
    {
      number: '3',
      lines: [
        'Вычисляем целевую цену:',
        '— Новая цена = цена конкурента – 1 ₽',
        '— Но не ниже минимальной границы (2790 ₽)'
      ],
      multiline: true
    },
    { number: '4', text: 'Если рассчитанная цена > 2790 ₽: Обновляем цену товара в системе' },
    { number: '✓', text: 'Готово', done: true },
  ];

  // Сброс состояния
  const reset = useCallback(() => {
    setStage('idle');
    setDisplayedText('');
    setVisibleSteps(0);
    setShowLaunchButton(false);
    setShowCursor(false);
    onReset?.();
  }, [onReset]);

  // Запуск анимации
  const startAnimation = useCallback(() => {
    if (stage !== 'idle') return;
    setStage('typing1');
    setShowCursor(true);
    onStart?.();
  }, [stage, onStart]);

  // Эффект печатания первого сообщения
  useEffect(() => {
    if (stage !== 'typing1') return;

    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < chatText.length) {
        setDisplayedText(chatText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setShowCursor(false);
        // Задержка перед переходом к шагам
        setTimeout(() => {
          setStage('steps');
        }, 800);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [stage, typingSpeed]);

  // Эффект появления шагов
  useEffect(() => {
    if (stage !== 'steps') return;

    let stepIndex = 0;

    const interval = setInterval(() => {
      if (stepIndex < steps.length) {
        setVisibleSteps(stepIndex + 1);
        stepIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowLaunchButton(true);
          setStage('complete');
          onComplete?.();
        }, 300);
      }
    }, stepDelay);

    return () => clearInterval(interval);
  }, [stage, stepDelay, steps.length, onComplete]);

  // Иконка лайка
  const ThumbIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 5.5V10.5H2C1.72386 10.5 1.5 10.2761 1.5 10V6C1.5 5.72386 1.72386 5.5 2 5.5H3.5Z" stroke="currentColor" strokeWidth="0.75"/>
      <path d="M3.5 5.5L5.5 1.5C6.05228 1.5 6.5 1.94772 6.5 2.5V4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V6.5L9.5 10.5H5C4.44772 10.5 4 10.0523 4 9.5V5.5" stroke="currentColor" strokeWidth="0.75"/>
    </svg>
  );

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
            {displayedText}
            {showCursor && <span className={styles.cursor} />}
          </div>
        </div>

        {/* Состояние 3: Пошаговый алгоритм */}
        <div className={`${styles.state} ${stage === 'steps' || stage === 'complete' ? styles.stateVisible : ''}`}>
          <div className={`${styles.chatBubble} ${styles.chatBubbleExpanded}`}>
            <div className={styles.agentTag}>
              <span className={styles.agentDot} />
              <span className={styles.agentName}>Агент ценообразования</span>
            </div>

            <div className={styles.stepsContent}>
              <div className={styles.stepsList}>
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={styles.stepItem}
                    style={{
                      opacity: visibleSteps > index ? 1 : 0,
                      transform: visibleSteps > index ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'opacity 0.3s ease, transform 0.3s ease'
                    }}
                  >
                    <div className={`${styles.stepCounter} ${step.done ? styles.stepCounterDone : ''}`}>
                      <span className={styles.stepNumber}>{step.number}</span>
                    </div>

                    {step.multiline ? (
                      <div className={`${styles.stepText} ${styles.stepTextMultiline}`}>
                        {step.lines.map((line, i) => (
                          <span key={i}>{line}</span>
                        ))}
                      </div>
                    ) : (
                      <span className={styles.stepText}>{step.text}</span>
                    )}

                    {/* Коннектор между шагами */}
                    {index < steps.length - 1 && <div className={styles.stepConnector} />}
                  </div>
                ))}
              </div>

              {/* Блок оценки */}
              <div
                className={styles.rateBlock}
                style={{
                  opacity: visibleSteps >= steps.length ? 1 : 0,
                  transition: 'opacity 0.3s ease 0.2s'
                }}
              >
                <span className={styles.rateText}>Вам нравится алгоритм?</span>
                <button className={styles.rateButton} aria-label="Нравится">
                  <ThumbIcon />
                </button>
                <button className={styles.rateButton} aria-label="Не нравится">
                  <span className={styles.rateIconDown}>
                    <ThumbIcon />
                  </span>
                </button>
              </div>
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

PricingWorkflowDemo.propTypes = {
  typingSpeed: PropTypes.number,
  stepDelay: PropTypes.number,
  className: PropTypes.string,
  onStart: PropTypes.func,
  onComplete: PropTypes.func,
  onReset: PropTypes.func,
};

export default PricingWorkflowDemo;
