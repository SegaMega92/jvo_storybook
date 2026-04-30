import { useState, useEffect, useRef } from 'react';
import commStyles from '../IllustrationCommunications/IllustrationCommunications.module.css';
import styles from './IllustrationAdvertising.module.css';
import { typograph } from '../../../utils/typograph';

import agentLogo from '../../../assets/illustrations/communications/agent-logo.svg';

// Timing
const STEP1_TYPING = 1500;
const STEP1_REPLY = 750;
const STEP1_LOADER = 3250;
const STEP2_MESSAGE = 1500;
const STEP2_SCENARIO = 4500;
const STEP3_HOLD = 8000;
const PAUSE = 2000;

// Texts
const USER_MSG = typograph('Подними CPM в эффективных кластерах');
const AGENT_REPLY = typograph('Хорошо, буду повышать CPM в кластерах с подтверждённым спросом и потенциалом роста видимости, сдерживая рост затрат.');
const LOADER_TEXT = typograph('Формирую сценарий автоматизации');
const SCENARIO_TITLE = typograph('Сценарий готов, запускаем?');
const CARD_TITLE = typograph('CPM рекламная кампания WB:\nминимальная стоимость ставки');
const SCENARIO_STEPS = [
  typograph('Анализируем кластеры: сред. позиция >30 и CTR >3%'),
  typograph('Считаем долю расходов за 3 дня. Если текущей доли <10%, пропускаю повышение'),
  typograph('Прогнозирую долю после повышения (по ROAS-модели последних 7 дней). Если прогноз >20%, пропускаем'),
  typograph('Иначе повышаю CPM на +10 ₽'),
];

const OPERATIONS = [
  { time: '22:32', title: 'Обработка кластеров', status: 'Успешно', sub: 'Изменение ставки кластеров', value: '-20 ₽', valueColor: '#c16ffb' },
  { time: '22:32', title: 'Обработка кластеров', status: 'Успешно', sub: 'Исключение кластеров из кампании', value: '-256', valueColor: '#c16ffb' },
  { time: '22:32', title: 'Анализ бюджета кампании', status: 'Успешно' },
  { time: '22:32', title: 'Анализ рекламной кампании', status: 'Успешно' },
];

export function IllustrationAdvertising({ isActive = true }) {
  const [step, setStep] = useState(0);
  const [subStep, setSubStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [visibleOps, setVisibleOps] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const wasActiveRef = useRef(false);

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia('(max-width: 960px)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const visibleOperations = isMobile ? OPERATIONS.slice(0, 2) : OPERATIONS;

  useEffect(() => {
    if (isActive && !wasActiveRef.current) {
      setStep(0); setSubStep(0); setTypedText(''); setVisibleOps(0);
    }
    wasActiveRef.current = isActive;
  }, [isActive]);

  // Typing
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
      else if (subStep === 1) timeout = setTimeout(() => { setStep(2); setSubStep(0); setVisibleOps(0); }, STEP2_SCENARIO);
    } else if (step === 2) {
      timeout = setTimeout(() => { setStep(0); setSubStep(0); setTypedText(''); setVisibleOps(0); }, STEP3_HOLD);
    }
    return () => clearTimeout(timeout);
  }, [step, subStep]);

  // Step 3: reveal operations one by one
  useEffect(() => {
    if (step !== 2) return;
    if (visibleOps >= visibleOperations.length) return;
    const timeout = setTimeout(() => setVisibleOps(v => v + 1), 800);
    return () => clearTimeout(timeout);
  }, [step, visibleOps]);

  const AgentIcon = () => (
    <div className={commStyles.agentIcon}>
      <img src={agentLogo} alt="" className={commStyles.agentLogoImg} />
    </div>
  );

  return (
    <div className={commStyles.container}>
      {/* ===== STEP 1: Chat ===== */}
      <div className={`${commStyles.scene} ${step === 0 ? commStyles.sceneActive : commStyles.sceneHidden}`}>
        <div className={commStyles.chat}>
          <div className={`${commStyles.userBubble} ${subStep >= 0 ? commStyles.fadeIn : ''}`}>
            {typedText}{typedText.length < USER_MSG.length && <span className={commStyles.cursor}>|</span>}
          </div>
          <div className={`${commStyles.agentRow} ${subStep >= 1 ? commStyles.fadeIn : commStyles.hidden}`}>
            <AgentIcon />
            <div className={commStyles.agentText}>{AGENT_REPLY}</div>
          </div>
          <div className={`${commStyles.loaderRow} ${subStep >= 2 ? commStyles.fadeIn : commStyles.hidden}`}>
            <span className={commStyles.dots}>
              <span className={commStyles.dot} /><span className={commStyles.dot} /><span className={commStyles.dot} />
            </span>
            <span className={commStyles.loaderText}>{LOADER_TEXT}</span>
          </div>
        </div>
      </div>

      {/* ===== STEP 2: Scenario ===== */}
      <div className={`${commStyles.scene} ${step === 1 ? commStyles.sceneActive : commStyles.sceneHidden}`}>
        <div className={commStyles.scenarioWrap}>
          <div className={`${commStyles.agentRow} ${commStyles.agentRowCenter} ${commStyles.fadeInAuto}`}>
            <AgentIcon />
            <span className={commStyles.scenarioTitle}>{SCENARIO_TITLE}</span>
          </div>
          <div className={`${commStyles.scenarioCard} ${subStep >= 1 ? commStyles.fadeIn : commStyles.hidden}`}>
            <div className={commStyles.scenarioCardHeader}>{CARD_TITLE}</div>
            <div className={commStyles.scenarioSteps}>
              <div className={commStyles.stepList}>
                {SCENARIO_STEPS.map((text, i) => (
                  <div key={i} className={commStyles.stepItem}>
                    <span className={commStyles.stepNumber}>{i + 1}</span>
                    <p className={commStyles.stepText}>{text}</p>
                  </div>
                ))}
                <div className={commStyles.stepItem}>
                  <span className={commStyles.stepCheck}>✓</span>
                  <p className={commStyles.stepTextDone}>Готово</p>
                </div>
              </div>
              <div className={commStyles.rateBar}>
                <span className={commStyles.rateText}>Вам нравится алгоритм?</span>
                <button type="button" className={commStyles.rateBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
                  </svg>
                </button>
                <button type="button" className={commStyles.rateBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10zM17 2h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== STEP 3: Operations log ===== */}
      <div className={`${commStyles.scene} ${step === 2 ? commStyles.sceneActive : commStyles.sceneHidden}`}>
        <div className={styles.opsCard}>
          {/* Header section */}
          <div className={styles.opsHeaderSection}>
            <div className={styles.opsHeader}>
              <div className={styles.opsHeaderLeft}>
                <span className={styles.opsHeaderIcon}>▲</span>
                <div className={styles.opsHeaderTitle}>{typograph('CPM рекламная кампания WB: минимальная стоимость ставки')}</div>
              </div>
              <div className={styles.opsHeaderRight}>
                <span className={styles.opsHeaderMeta}>{typograph('Группа Б')}</span>
                <span className={styles.opsHeaderMeta}><span className={styles.opsHeaderMetaCount}>346 </span>артикулов</span>
              </div>
            </div>

            {/* Status row */}
            <div className={styles.opsStatusRow}>
              <div className={styles.opsStatusLeft}>
                <span className={styles.opsTagActive}>Активен</span>
                <span className={styles.opsSchedule}>{typograph('Запуск: каждый день в 00:00')}</span>
              </div>
              <div className={styles.opsStatusRight}>
                <span className={styles.opsTagTasks}>
                  <span className={styles.opsTagTasksLabel}>Задачи</span>
                  <span className={styles.opsTagTasksCount}>2</span>
                </span>
                <span className={styles.opsStatusMeta}>{typograph('Выполнялся: 27.08.2026 в 00:02')}</span>
              </div>
            </div>
          </div>

          {/* Operations list */}
          <div className={styles.opsList}>
            {visibleOperations.map((op, i) => (
              <div
                key={i}
                className={`${styles.opsRow} ${i < visibleOps ? styles.opsRowVisible : ''}`}
              >
                <div className={styles.opsRowMain}>
                  <div className={styles.opsRowMainLeft}>
                    <span className={styles.opsTime}>{op.time}</span>
                    <span className={styles.opsTitle}>{op.title}</span>
                  </div>
                  <span className={styles.opsTagSuccess}>{op.status}</span>
                </div>
                {op.sub && (
                  <div className={styles.opsRowSub}>
                    <span className={styles.opsSub}>{op.sub}</span>
                    {op.value && <span className={styles.opsValue}>{op.value}</span>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IllustrationAdvertising;
