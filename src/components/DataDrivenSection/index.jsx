import PropTypes from 'prop-types';
import styles from './DataDrivenSection.module.css';
import { typograph } from '../../utils/typograph';

const metrics = [
  { id: 'cpo', label: 'CPO', x: 217, y: 0 },
  { id: 'drr', label: 'ДРР', x: 20, y: 30, active: true },
  { id: 'ctr', label: 'CTR', x: 417, y: 30 },
  { id: 'cpm', label: 'CPM', x: 20, y: 236 },
  { id: 'cpc', label: 'CPC', x: 420, y: 236 },
  { id: 'conversion', label: 'Конверсия', x: 186, y: 266 },
];

export function DataDrivenSection({ className = '' }) {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          {typograph('Data-driven подход в принятии решений')}
        </h2>

        <div className={styles.diagram}>
          {metrics.map((m) => (
            <div
              key={m.id}
              className={`${styles.pill} ${m.active ? styles.pillActive : ''}`}
              style={{ left: m.x, top: m.y }}
            >
              {m.label}
            </div>
          ))}
          <div className={styles.drrCard}>
            <p className={styles.drrFormula}>{typograph('Расходы / Выручка × 100%')}</p>
            <p className={styles.drrDesc}>
              {typograph('Агент следит за ДРР кампании и артикула. При превышении порога — снижает лимит или ставит РК на паузу.')}
            </p>
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
