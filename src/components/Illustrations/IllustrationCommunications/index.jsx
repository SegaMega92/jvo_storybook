import { useState, useEffect, useRef } from 'react';
import styles from './IllustrationCommunications.module.css';
import { typograph } from '../../../utils/typograph';

import agentLogo from '../../../assets/illustrations/communications/agent-logo.svg';
import buyerAvatar from '../../../assets/illustrations/communications/avatar.png';
import photo1 from '../../../assets/illustrations/communications/photo1.png';
import photo2 from '../../../assets/illustrations/communications/photo2.png';

// Timing (×1.5)
const STEP1_TYPING = 1500;
const STEP1_REPLY = 750;
const STEP1_LOADER = 3250;
const STEP2_MESSAGE = 1500;
const STEP2_SCENARIO = 4500;
const STEP3_REVIEW = 2250;
const STEP3_REPLY = 5500;
const PAUSE = 2000;

// Texts
const USER_MSG = typograph('Отвечай на все негативные отзывы');
const AGENT_REPLY = typograph('Хорошо, буду отвечать на все негативные отзывы используя tone of voice бренда, только по делу и без воды.');
const LOADER_TEXT = typograph('Формирую сценарий автоматизации');
const SCENARIO_TITLE = typograph('Сценарий готов, запускаем?');
const CARD_TITLE = typograph('Ответы на отзывы с оценкой\n1–4 звезды');
const SCENARIO_STEPS = [
  typograph('Получить все неотвеченные отзывы'),
  typograph('Определить оценку и найти ключевые слова: «сломано», «плохо», «не работает», «не соответствует», «разочарован»'),
  typograph('Если оценка меньше 4 и есть ключевые слова, то сформировать ответ в вежливом и участливом тоне, конструктивно разобрать причину.'),
  typograph('Отправить ответ пользователю'),
];
const REVIEW_TEXT = typograph('Машинка стирает нормально, но сильно дребезжит и шумит при отжиме, разочарован покупкой.');
const SELLER_REPLY = typograph('Спасибо за ваш отзыв. Описанная ситуация чаще всего возникает, если не сняты транспортировочные болты перед началом эксплуатации — это указано в инструкции и карточке товара. Рекомендуем проверить этот момент: после их удаления машинка работает значительно тише и стабильнее.');


export function IllustrationCommunications({ isActive = true }) {
  const [step, setStep] = useState(0);
  const [subStep, setSubStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const wasActiveRef = useRef(false);

  // Reset only on first activation or re-activation after being inactive
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
      if (subStep === 0) timeout = setTimeout(() => setSubStep(1), STEP3_REVIEW);
      else if (subStep === 1) timeout = setTimeout(() => { setStep(0); setSubStep(0); setTypedText(''); }, STEP3_REPLY);
    }
    return () => clearTimeout(timeout);
  }, [step, subStep]);

  // Agent icon component (white circle + logo 16px)
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
                    <p className={styles.stepText}>{text}</p>
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

      {/* ===== STEP 3: Review ===== */}
      <div className={`${styles.scene} ${step === 2 ? styles.sceneActive : styles.sceneHidden}`}>
        <div className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <img src={buyerAvatar} alt="" className={styles.reviewAvatar} />
            <div className={styles.reviewMeta}>
              <div className={styles.reviewAuthorRow}>
                <span className={styles.reviewAuthor}>Покупатель</span>
                <span className={styles.reviewStars}>
                  {[1,2,3,4,5].map(n => (
                    <svg key={n} width="13.5" height="13.5" viewBox="0 0 24 24" fill={n <= 2 ? '#f59e0b' : '#e5e7eb'}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </span>
              </div>
              <div className={styles.reviewSubMeta}>
                <span>✓ Выкупили · Стиральная машина · WASH202</span>
                <span>Сегодня в 17:29</span>
              </div>
            </div>
          </div>
          <p className={styles.reviewText}><strong>Комментарий:</strong> {REVIEW_TEXT}</p>
          <div className={styles.reviewPhotos}>
            <img src={photo1} alt="" className={styles.reviewPhoto} />
            <img src={photo2} alt="" className={styles.reviewPhoto} />
          </div>
          {subStep >= 1 && (
            <div className={styles.sellerReply}>
              <div className={styles.sellerReplyHeader}>
                <span>↪ Ответ продавца</span>
                <span className={styles.menuDots}>
                  <span className={styles.menuDot} />
                  <span className={styles.menuDot} />
                  <span className={styles.menuDot} />
                </span>
              </div>
              <p className={styles.sellerReplyText}>{SELLER_REPLY}</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default IllustrationCommunications;
