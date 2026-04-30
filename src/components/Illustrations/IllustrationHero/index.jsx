import { useState, useEffect, useRef } from 'react';
import styles from './IllustrationHero.module.css';
import { typograph } from '../../../utils/typograph';
import agentIconSvg from '../../../assets/illustrations/hero-agent-icon.svg';
import iconFrequency from '../../../assets/illustrations/hero-icons/frequency.png';
import iconFeedback from '../../../assets/illustrations/hero-icons/feedback.png';
import iconFinances from '../../../assets/illustrations/hero-icons/finances.png';
import iconPromo from '../../../assets/illustrations/hero-icons/promo.png';
import iconDone from '../../../assets/illustrations/hero-icons/done.png';
import iconSettings from '../../../assets/illustrations/hero-icons/settings.png';
import iconWb from '../../../assets/illustrations/hero-icons/wb.png';
import iconOzon from '../../../assets/illustrations/hero-icons/ozon.png';
import iconEnterRight from '../../../assets/illustrations/hero-icons/enter-right.png';

const RESULTS_LABEL = typograph('Результаты:');

const SCENARIOS = [
  {
    id: 'communications',
    commands: [
      { label: 'Отвечай на негатив', target: 0 },
      { label: 'Управляй ценами', target: 1 },
      { label: 'Оптимизируй расходы на рекламу', target: 2 },
    ],
    userMsg: typograph('Отвечай на все негативные отзывы и вопросы'),
    analysisIcon: iconFrequency,
    analysisLabel: typograph('Анализ матрицы товаров'),
    analysisResult: typograph('Найдено 14 789 не отвеченных отзывов и 283 вопроса'),
    scenarioIcon: iconFeedback,
    scenarioLoading: typograph('Создание сценария'),
    scenarioDone: typograph('Создание сценария ответов'),
    scenarioTitle: typograph('Ответы на вопросы и негатив'),
    scenarioMeta: typograph('347 артикулов • Каждый день в 00:00'),
    scenarioMpIcons: [iconWb, iconOzon],
    results: [
      { label: 'Отвечено отзывов:', value: '27 456' },
      { label: 'Закрыто вопросов:', value: '468' },
      { label: 'Время ответа:', value: '1 минута' },
    ],
  },
  {
    id: 'pricing',
    commands: [
      { label: 'Отвечай на негатив', target: 0 },
      { label: 'Управляй ценами', target: 1 },
      { label: 'Оптимизируй расходы на рекламу', target: 2 },
    ],
    userMsg: typograph('Оптимизируй стоимость товара, найди самую эффективную'),
    analysisIcon: iconFrequency,
    analysisLabel: typograph('Анализ воронки продаж'),
    analysisResult: typograph('Найдено 32 SKU подходящие для оптимизации'),
    scenarioIcon: iconFinances,
    scenarioLoading: typograph('Создание сценария'),
    scenarioDone: typograph('Создание сценария'),
    scenarioTitle: typograph('Поиск эффективной стоимости'),
    scenarioMeta: typograph('32 артикулов • Каждый день в 00:00'),
    scenarioMpIcons: [iconWb],
    results: [
      { label: 'Маржинальность', value: '+7%' },
      { label: 'Маржа', value: '+473 498 ₽' },
      { label: '% Выкупа', value: '+4%' },
    ],
  },
  {
    id: 'advertising',
    commands: [
      { label: 'Отвечай на негатив', target: 0 },
      { label: 'Управляй ценами', target: 1 },
      { label: 'Оптимизируй расходы на рекламу', target: 2 },
    ],
    userMsg: typograph('Оптимизируй расходы на рекламу'),
    analysisIcon: iconFrequency,
    analysisLabel: typograph('Анализ действующих рекламных компаний'),
    analysisResult: typograph('Обнаружены артикулы, которые не укладываются в стратегию'),
    scenarioIcon: iconPromo,
    scenarioLoading: typograph('Создание сценария'),
    scenarioDone: typograph('Создание сценария'),
    scenarioTitle: typograph('CPM Рекламной компании'),
    scenarioMeta: typograph('147 артикулов • Каждый день в 00:00'),
    scenarioMpIcons: [iconWb],
    results: [
      { label: 'Расходы на РК', value: '-16%' },
      { label: 'CPO', value: '-24%' },
    ],
  },
];

// Sub-steps timeline
// 0: input + typing
// 1: message sent + loader "Анализ"
// 2: ✓ Анализ + typing result
// 3: result done + loader "Создание сценария"
// 4: scenario card appears (ghost) + typing inside
// 5: card normalizes + ✓ scenario done
// 6: ✓ Результаты label
// 7: badge "Отзывы" fade
// 8: badge "Вопросы" fade
// 9: badge "Время ответа" fade
// 10: hold, then restart

const TYPING_SPEED = 35;
const DELAYS = [0, 2300, 1500, 1700, 1500, 2000, 1500, 1100, 1100, 1100, 3500];

export function IllustrationHero({ isActive = true, onCommandClick, onAgentClick }) {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [typedUser, setTypedUser] = useState('');
  const [typedResult, setTypedResult] = useState('');
  const [typedScenario, setTypedScenario] = useState('');
  const [typedMeta, setTypedMeta] = useState('');
  const [showCard, setShowCard] = useState(false);
  const wasActiveRef = useRef(false);

  const sc = SCENARIOS[scenarioIndex];

  // Reset
  useEffect(() => {
    if (isActive && !wasActiveRef.current) {
      setScenarioIndex(0); setSub(0); setTypedUser(''); setTypedResult(''); setTypedScenario(''); setTypedMeta(''); setShowCard(false);
    }
    wasActiveRef.current = isActive;
  }, [isActive]);

  // Typing user message (sub 0)
  useEffect(() => {
    if (sub !== 0) return;
    let i = 0; setTypedUser('');
    const iv = setInterval(() => {
      i++; setTypedUser(sc.userMsg.slice(0, i));
      if (i >= sc.userMsg.length) clearInterval(iv);
    }, TYPING_SPEED);
    return () => clearInterval(iv);
  }, [sub, sc]);

  // Typing analysis result (sub 2)
  useEffect(() => {
    if (sub !== 2) return;
    let i = 0; setTypedResult('');
    const iv = setInterval(() => {
      i++; setTypedResult(sc.analysisResult.slice(0, i));
      if (i >= sc.analysisResult.length) clearInterval(iv);
    }, TYPING_SPEED);
    return () => clearInterval(iv);
  }, [sub, sc]);

  // Typing scenario title then meta (sub 4)
  useEffect(() => {
    if (sub !== 4) return;
    let i = 0; setTypedScenario(''); setTypedMeta(''); setShowCard(false);
    // Show card after 800ms delay (title appears first)
    const cardTimer = setTimeout(() => setShowCard(true), 800);
    // Start typing after card appears
    const typingTimer = setTimeout(() => {
      const iv = setInterval(() => {
        i++; setTypedScenario(sc.scenarioTitle.slice(0, i));
        if (i >= sc.scenarioTitle.length) {
          clearInterval(iv);
          setTimeout(() => {
            let j = 0;
            const iv2 = setInterval(() => {
              j++; setTypedMeta(sc.scenarioMeta.slice(0, j));
              if (j >= sc.scenarioMeta.length) clearInterval(iv2);
            }, TYPING_SPEED);
          }, 300);
        }
      }, TYPING_SPEED);
    }, 900);
    return () => { clearTimeout(cardTimer); clearTimeout(typingTimer); };
  }, [sub, sc]);

  // Auto-advance
  useEffect(() => {
    let delay = DELAYS[sub] || 2000;
    if (sub === 0) delay = sc.userMsg.length * TYPING_SPEED + 1800;
    if (sub === 2) delay = sc.analysisResult.length * TYPING_SPEED + 500;
    if (sub === 4) delay = sc.scenarioTitle.length * TYPING_SPEED + 300 + sc.scenarioMeta.length * TYPING_SPEED + 800;
    const t = setTimeout(() => {
      if (sub >= 10) {
        // Next scenario
        setScenarioIndex(i => (i + 1) % SCENARIOS.length);
        setSub(0);
        setTypedUser(''); setTypedResult(''); setTypedScenario(''); setTypedMeta(''); setShowCard(false);
      } else {
        setSub(s => s + 1);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [sub]);

  const show = (minSub) => sub >= minSub;

  return (
    <div className={styles.container}>
      <div className={styles.chatWrap}>
       <div className={styles.chatInner}>
        {/* Agent icon — click to restart */}
        <div
          className={styles.agentIcon}
          onClick={() => { setScenarioIndex(0); setSub(0); setTypedUser(''); setTypedResult(''); setTypedScenario(''); setTypedMeta(''); setShowCard(false); }}
          style={{ cursor: 'pointer' }}
        >
          <img src={agentIconSvg} alt="" className={styles.agentIconImg} />
        </div>

        <div className={styles.chatContent}>
          {/* Sub 0: command tags + input with typing */}
          {sub === 0 && (
            <div className={styles.inputGroup}>
              <div className={styles.commandTags}>
                {sc.commands.map((cmd, i) => (
                  <button key={i} type="button" className={styles.commandTag} onClick={() => {
                    if (cmd.target !== scenarioIndex) {
                      setScenarioIndex(cmd.target);
                      setSub(0);
                      setTypedUser(''); setTypedResult(''); setTypedScenario(''); setTypedMeta(''); setShowCard(false);
                    }
                    onCommandClick?.(SCENARIOS[cmd.target]?.id);
                  }}>
                    {typograph(cmd.label)}
                  </button>
                ))}
              </div>
              <div className={styles.inputWrap}>
                <div className={styles.input}>
                  <span className={styles.inputText}>{typedUser}</span>
                  {typedUser.length < sc.userMsg.length && <span className={styles.inputCursor}>|</span>}
                </div>
                <div className={styles.sendBtn}>
                  <img src={iconEnterRight} alt="" className={styles.sendBtnIcon} />
                </div>
              </div>
            </div>
          )}

          {/* Sub 1+: user bubble */}
          {show(1) && (
            <div className={styles.userBubble}>{sc.userMsg}</div>
          )}



          {/* Section 1: Анализ матрицы */}
          {show(1) && (
            <div className={styles.sectionGroup}>
              {/* Заголовок: лоадер или ✓ */}
              {sub === 1 ? (
                <div className={styles.loaderRow}>
                  <span className={styles.dots}><span className={styles.dot}/><span className={styles.dot}/><span className={styles.dot}/></span>
                  <span className={styles.loaderText}>{sc.analysisLabel}</span>
                </div>
              ) : (
                <div className={styles.doneRow}>
                  <img src={sc.analysisIcon} alt="" className={styles.doneIcon} />
                  <span className={styles.doneText} style={{ color: '#7c3aed' }}>{sc.analysisLabel}</span>
                </div>
              )}
              {/* Контент под заголовком */}
              {sub === 2 && (
                <p className={styles.resultText}>{typedResult}<span className={styles.inputCursor}>|</span></p>
              )}
              {show(3) && (
                <p className={styles.resultTextBlack}>{sc.analysisResult}</p>
              )}
            </div>
          )}

          {/* Section 2: Создание сценария */}
          {show(3) && (
            <div className={styles.sectionGroup}>
              {/* Заголовок: лоадер → ✓ */}
              {sub === 3 ? (
                <div className={styles.loaderRow}>
                  <span className={styles.dots}><span className={styles.dot}/><span className={styles.dot}/><span className={styles.dot}/></span>
                  <span className={styles.loaderText}>{sc.scenarioLoading}</span>
                </div>
              ) : (
                <div className={styles.doneRow}>
                  <img src={sc.scenarioIcon} alt="" className={styles.doneIcon} />
                  <span className={styles.doneText} style={{ color: '#7c3aed' }}>{sc.scenarioDone}</span>
                </div>
              )}
              {/* Контент: ghost или normal карточка */}
              {sub === 4 && showCard && (
                <div className={`${styles.scenarioCard} ${styles.scenarioCardGhost}`}>
                  <div className={styles.scenarioCardTop}>
                    <span className={styles.scenarioCardTitle}>{typedScenario}{typedScenario.length < sc.scenarioTitle.length && <span className={styles.inputCursor}>|</span>}</span>
                    <img src={iconSettings} alt="" className={styles.scenarioCardSettingsIcon} />
                  </div>
                  <div className={styles.scenarioCardBottom}>
                    <div className={styles.scenarioCardIcons}>
                      {sc.scenarioMpIcons.map((icon, i) => (
                        <img key={i} src={icon} alt="" className={i > 0 ? styles.mpIconOverlap : styles.mpIcon} />
                      ))}
                    </div>
                    <span className={styles.scenarioCardMeta}>{typedMeta || '\u00A0'}</span>
                  </div>
                </div>
              )}
              {show(5) && (
                <div className={styles.scenarioCard}>
                  <div className={styles.scenarioCardTop}>
                    <span className={styles.scenarioCardTitle}>{sc.scenarioTitle}</span>
                    <img src={iconSettings} alt="" className={styles.scenarioCardSettingsIcon} />
                  </div>
                  <div className={styles.scenarioCardBottom}>
                    <div className={styles.scenarioCardIcons}>
                      {sc.scenarioMpIcons.map((icon, i) => (
                        <img key={i} src={icon} alt="" className={i > 0 ? styles.mpIconOverlap : styles.mpIcon} />
                      ))}
                    </div>
                    <span className={styles.scenarioCardMeta}>{sc.scenarioMeta}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Section 3: Результаты */}
          {show(6) && (
            <div className={styles.sectionGroup}>
              <div className={`${styles.doneRow} ${styles.fadeIn}`}>
                <img src={iconDone} alt="" className={styles.doneIcon} />
                <span className={styles.doneText} style={{ color: '#7c3aed' }}>{RESULTS_LABEL}</span>
              </div>
              {show(7) && (
                <div className={styles.resultsRow}>
                  {sc.results.map((r, i) => (
                    show(7 + i) && (
                      <span key={i} className={`${styles.resultItem} ${styles.fadeIn}`}>
                        <span className={styles.resultLabel}>{r.label}</span>
                        <span className={styles.resultValue} style={{ background: '#d1fae5' }}>{r.value}</span>
                      </span>
                    )
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
       </div>
      </div>

    </div>
  );
}

export default IllustrationHero;
