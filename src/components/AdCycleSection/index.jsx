import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AdCycleSection.module.css';
import { typograph } from '../../utils/typograph';
import imgCycleBg from '../../assets/ad-cycle/cycle-bg.webp';

const actions = [
  {
    id: 'rate',
    title: 'Изменить ставку',
    description: 'Держит нужную позицию без переплаты',
  },
  {
    id: 'pause',
    title: 'Остановить / запустить РК',
    description: 'При срабатывании условия — пауза; при восстановлении — автозапуск',
  },
  {
    id: 'remove',
    title: 'Убрать товар из РК',
    description: 'Не останавливает всю кампанию — убирает только конкретный убыточный артикул',
  },
  {
    id: 'cluster',
    title: 'Исключить кластер',
    description: 'Убирает неэффективный поисковый запрос из рекламы на WB (после 100 показов)',
  },
  {
    id: 'limit',
    title: 'Изменить дневной лимит',
    description: 'Снижает или повышает дневной бюджет в зависимости от ДРР',
  },
  {
    id: 'test-pos',
    title: 'Тестировать позиции',
    description: 'Перебирает топ-10, замеряет конверсию и фиксирует лучшую',
  },
  {
    id: 'test-rate',
    title: 'Тестировать ставку',
    description: 'Безопасно поднимает ставку, проверяет результат, откатывает если нет роста',
  },
];

export function AdCycleSection({ className = '' }) {
  const [activeId, setActiveId] = useState('rate');

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{typograph('Непрерывный цикл управления рекламой')}</h2>
        <p className={styles.subtitle}>
          {typograph('ИИ-агент 24/7 проверяет метрики через заданные интервалы и работает по условиям вида «если X → то Y». Если что-то вышло за рамки правил — сразу вносит изменение. Если данных не хватает — пропускает шаг и ничего не меняет.')}
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.accordion}>
          {actions.map((action) => {
            const isActive = action.id === activeId;
            return (
              <div
                key={action.id}
                className={`${styles.accordionItem} ${isActive ? styles.active : ''}`}
                onClick={() => setActiveId(action.id)}
              >
                <div className={styles.divider} />
                <div className={styles.accordionRow}>
                  <span className={`${styles.dot} ${isActive ? styles.dotVisible : ''}`} />
                  <div className={styles.accordionText}>
                    <span className={styles.accordionTitle}>{typograph(action.title)}</span>
                    {isActive && (
                      <span className={styles.accordionDesc}>{typograph(action.description)}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.visual}>
          <img src={imgCycleBg} alt="" className={styles.bgImg} />

          <div className={styles.eventCard}>
            <div className={styles.eventLeft}>
              <p className={styles.eventName}>Изменение ставки</p>
              <p className={styles.eventLink}>Данные анализа, на основе которых совершено действие</p>
            </div>
            <div className={styles.eventRight}>
              <div className={styles.eventRightTop}>
                <span className={styles.badge}>Успешно</span>
              </div>
              <div className={styles.eventRightBottom}>
                <span className={styles.eventStatusText}>Ставка обновлена</span>
                <span className={styles.badge}>18 кластеров</span>
              </div>
            </div>
          </div>

          <div className={styles.tooltip}>
            <div className={styles.tooltipArrow} />
            <div className={styles.tooltipBody}>
              <div className={styles.tooltipRows}>
                {[
                  { name: 'теплая шапка', from: '120', to: '80' },
                  { name: 'вязаная шапка', from: '95', to: '75' },
                  { name: 'теплая шапка на зиму', from: '135', to: '96' },
                ].map((row) => (
                  <div key={row.name} className={styles.tooltipRow}>
                    <span className={styles.tooltipProduct}>{row.name}</span>
                    <span className={styles.tooltipDots} />
                    <span className={styles.tooltipPrice}>
                      {row.from} ₽{' '}
                      <span className={styles.tooltipArrowChar}>→</span>
                      {' '}<span className={styles.priceNew}>{row.to} ₽</span>
                    </span>
                  </div>
                ))}
              </div>
              <span className={styles.tooltipLink}>Подробнее ↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

AdCycleSection.propTypes = {
  className: PropTypes.string,
};

export default AdCycleSection;
