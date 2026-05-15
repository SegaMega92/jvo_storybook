import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './DataDrivenSection.module.css';
import { typograph } from '../../utils/typograph';
import bgImg from '../../assets/data-driven-bg.webp';

const CLOCKWISE = ['drr', 'cpo', 'ctr', 'cpc', 'conversion', 'cpm'];

const metrics = [
  {
    id: 'drr', label: 'ДРР',
    formula: 'Расходы / Выручка × 100%',
    desc: 'Агент следит за ДРР кампании и артикула. При превышении порога — снижает лимит или ставит РК на паузу.',
    x: 20, y: 30,
  },
  {
    id: 'cpo', label: 'CPO',
    formula: 'Расходы / Кол-во заказов',
    desc: 'Агент останавливает РК или убирает артикул при превышении заданного порога в течение нескольких дней.',
    x: 217, y: 0,
  },
  {
    id: 'ctr', label: 'CTR',
    formula: 'Клики / Показы × 100%',
    desc: 'Низкий CTR сигнализирует о непривлекательном главном фото. Агент может исключать кластеры с низким CTR.',
    x: 417, y: 30,
  },
  {
    id: 'cpc', label: 'CPC',
    formula: 'Расходы / Клики',
    desc: 'Тип оплаты для CPC-кампаний WB и всего OZON. Агент управляет ставкой CPC с учётом динамики заказов и CTR.',
    x: 420, y: 236,
  },
  {
    id: 'conversion', label: 'Конверсия',
    formula: 'Заказы / Клики × 100%',
    desc: 'Агент замеряет конверсию при тестировании позиций — выбирает и фиксирует позицию с наилучшим результатом.',
    x: 186, y: 266,
  },
  {
    id: 'cpm', label: 'CPM',
    formula: 'Расходы / Показы × 1 000',
    desc: 'Основной тип оплаты на WB. Агент управляет CPM-ставкой в ручных кампаниях с контролем на уровне кластеров.',
    x: 20, y: 236,
  },
];

const metricsById = Object.fromEntries(metrics.map((m) => [m.id, m]));

export function DataDrivenSection({ className = '' }) {
  const [activeId, setActiveId] = useState('drr');
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (paused) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setActiveId((prev) => {
        const i = CLOCKWISE.indexOf(prev);
        return CLOCKWISE[(i + 1) % CLOCKWISE.length];
      });
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const active = metricsById[activeId];

  return (
    <section className={`${styles.section} ${className}`}>
      <div
        className={styles.card}
        onMouseLeave={() => setPaused(false)}
      >
        <img src={bgImg} alt="" className={styles.cardBg} />

        <h2 className={styles.title}>
          {typograph('Data-driven подход в принятии решений')}
        </h2>

        <div className={styles.diagram}>
          {metrics.map((m) => (
            <div
              key={m.id}
              className={`${styles.pill} ${m.id === activeId ? styles.pillActive : ''}`}
              style={{ left: m.x, top: m.y }}
              onMouseEnter={() => { setActiveId(m.id); setPaused(true); }}
            >
              {m.label}
            </div>
          ))}

          <div className={styles.metricCard}>
            <div key={activeId} className={styles.metricContent}>
              <p className={styles.metricFormula}>{typograph(active.formula)}</p>
              <p className={styles.metricDesc}>{typograph(active.desc)}</p>
            </div>
          </div>
        </div>

        <p className={styles.subtitle}>
          {typograph('ИИ-агент анализирует десятки ключевых метрик в режиме реального времени — контролирует остатки, рекламные показатели, воронку продаж и оборачиваемость, чтобы быстро находить точки роста и повышать эффективность бизнеса.')}
        </p>
      </div>
    </section>
  );
}

DataDrivenSection.propTypes = {
  className: PropTypes.string,
};

export default DataDrivenSection;
