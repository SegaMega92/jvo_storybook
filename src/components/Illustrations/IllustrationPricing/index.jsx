import { useState, useEffect, useRef } from 'react';
import styles from '../IllustrationCommunications/IllustrationCommunications.module.css';
import { typograph } from '../../../utils/typograph';

import agentLogo from '../../../assets/illustrations/communications/agent-logo.svg';
import { ChartStep } from './ChartStep';

// Timing (same as communications)
const STEP1_TYPING = 1500;
const STEP1_REPLY = 750;
const STEP1_LOADER = 3250;
const STEP2_MESSAGE = 1500;
const STEP2_SCENARIO = 4500;
const STEP3_HOLD = 7500;
const PAUSE = 2000;

// Texts
const USER_MSG = typograph('Держи цену -1 рубль от конкурента');
const AGENT_REPLY = typograph('Хорошо, запускаю сценарий безопасного снижения цен: Репрайсинг; минус 1 ₽ от конкурента.');
const LOADER_TEXT = typograph('Формирую сценарий автоматизации');
const SCENARIO_TITLE = typograph('Сценарий готов, запускаем?');
const CARD_TITLE = typograph('Репрайсинг -1 ₽ от конкурента');
const SCENARIO_STEPS = [
  typograph('Получаем актуальные цены на аналогичные товары'),
  typograph('Проверяем цена конкурента по товару < текущей нашей цены'),
  typograph('Вычисляем целевую цену:\n→ Новая цена = цена конкурента − 1 ₽\n→ Но не ниже минимальной границы (2790 ₽)'),
  typograph('Если рассчитанная цена > 2790 ₽: Обновляем цену товара в системе'),
];

/**
 * IllustrationPricing — 3-step animated illustration for Pricing Agent
 * Steps 1 & 2 reuse IllustrationCommunications styles, step 3 = placeholder for chart
 */
export function IllustrationPricing({ isActive = true }) {
  const [step, setStep] = useState(0);
  const [subStep, setSubStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const wasActiveRef = useRef(false);

  // Reset only on first activation or re-activation
  useEffect(() => {
    if (isActive && !wasActiveRef.current) {
      setStep(0);
      setSubStep(0);
      setTypedText('');
    }
    wasActiveRef.current = isActive;
  }, [isActive]);

  // Typing effect
  useEffect(() => {
    if (step !== 0 || subStep !== 0) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(USER_MSG.slice(0, i));
      if (i >= USER_MSG.length) clearInterval(interval);
    }, STEP1_TYPING / USER_MSG.length);
    return () => clearInterval(interval);
  }, [step, subStep]);

  // Timeline
  useEffect(() => {
    let timeout;
    if (step === 0) {
      if (subStep === 0) timeout = setTimeout(() => setSubStep(1), STEP1_TYPING);
      else if (subStep === 1) timeout = setTimeout(() => setSubStep(2), STEP1_REPLY);
      else if (subStep === 2) timeout = setTimeout(() => { setStep(1); setSubStep(0); }, STEP1_LOADER);
    } else if (step === 1) {
      if (subStep === 0) timeout = setTimeout(() => setSubStep(1), STEP2_MESSAGE);
      else if (subStep === 1) timeout = setTimeout(() => { setStep(2); setSubStep(0); }, STEP2_SCENARIO);
    } else if (step === 2) {
      timeout = setTimeout(() => { setStep(0); setSubStep(0); setTypedText(''); }, STEP3_HOLD);
    }
    return () => clearTimeout(timeout);
  }, [step, subStep]);

  const AgentIcon = () => (
    <div className={styles.agentIcon}>
      <img src={agentLogo} alt="" className={styles.agentLogoImg} />
    </div>
  );

  return (
    <div className={styles.container}>
      {/* ===== STEP 1: Chat ===== */}
      <div className={`${styles.scene} ${step === 0 ? styles.sceneActive : styles.sceneHidden}`}>
        <div className={styles.chat}>
          <div className={`${styles.userBubble} ${subStep >= 0 ? styles.fadeIn : ''}`}>
            {typedText}{typedText.length < USER_MSG.length && <span className={styles.cursor}>|</span>}
          </div>
          <div className={`${styles.agentRow} ${subStep >= 1 ? styles.fadeIn : styles.hidden}`}>
            <AgentIcon />
            <div className={styles.agentText}>{AGENT_REPLY}</div>
          </div>
          <div className={`${styles.loaderRow} ${subStep >= 2 ? styles.fadeIn : styles.hidden}`}>
            <span className={styles.dots}>
              <span className={styles.dot} /><span className={styles.dot} /><span className={styles.dot} />
            </span>
            <span className={styles.loaderText}>{LOADER_TEXT}</span>
          </div>
        </div>
      </div>

      {/* ===== STEP 2: Scenario ===== */}
      <div className={`${styles.scene} ${step === 1 ? styles.sceneActive : styles.sceneHidden}`}>
        <div className={styles.scenarioWrap}>
          <div className={`${styles.agentRow} ${styles.agentRowCenter} ${styles.fadeInAuto}`}>
            <AgentIcon />
            <span className={styles.scenarioTitle}>{SCENARIO_TITLE}</span>
          </div>
          <div className={`${styles.scenarioCard} ${subStep >= 1 ? styles.fadeIn : styles.hidden}`}>
            <div className={styles.scenarioCardHeader}>{CARD_TITLE}</div>
            <div className={styles.scenarioSteps}>
              <div className={styles.stepList}>
                {SCENARIO_STEPS.map((text, i) => (
                  <div key={i} className={styles.stepItem}>
                    <span className={styles.stepNumber}>{i + 1}</span>
                    <p className={styles.stepText} style={{ whiteSpace: 'pre-line' }}>{text}</p>
                  </div>
                ))}
                <div className={styles.stepItem}>
                  <span className={styles.stepCheck}>✓</span>
                  <p className={styles.stepTextDone}>Готово</p>
                </div>
              </div>
              <div className={styles.rateBar}>
                <span className={styles.rateText}>Вам нравится алгоритм?</span>
                <button type="button" className={styles.rateBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
                  </svg>
                </button>
                <button type="button" className={styles.rateBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10zM17 2h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== STEP 3: Chart ===== */}
      <div className={`${styles.scene} ${step === 2 ? styles.sceneActive : styles.sceneHidden}`}>
        <div style={{ width: '100%', maxWidth: 562, height: 374 }}>
          <ChartStep isActive={step === 2} />
        </div>
      </div>

    </div>
  );
}

export default IllustrationPricing;
