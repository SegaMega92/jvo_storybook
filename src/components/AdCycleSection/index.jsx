import { useState, useEffect } from 'react';
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
    description: 'Убирает неэффективный поисковый запрос из рекламы на WB (после 100 показов). Только на Wildberries',
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

const ILLUS = {
  rate: {
    eventName: 'Изменение ставки',
    badge: 'Успешно',
    action: 'Ставка обновлена',
    count: '18 кластеров',
    mobileHint: 'теплая шапка 120→80 ₽  ·  вязаная 95→75 ₽',
    tooltip: {
      type: 'price',
      rows: [
        { label: 'теплая шапка', from: '120', to: '80' },
        { label: 'вязаная шапка', from: '95', to: '75' },
        { label: 'теплая шапка на зиму', from: '135', to: '96' },
      ],
      link: 'Подробнее ↗',
    },
  },
  pause: {
    type: 'campaign',
    campaigns: [
      {
        label: 'Рекламная кампания',
        name: 'Дживио Агент от 20.11 (CPM)',
        status: 'Активна',
        statusType: 'green',
        details: 'Wildberries  ·  Единые ставки  ·  Показы в поиске, каталоге и рекомендациях',
      },
      {
        label: 'Рекламная кампания',
        name: 'Дживио Агент от 20.11 (CPM)',
        status: 'Приостановлена по условиям сценария',
        statusType: 'yellow',
        details: 'Wildberries  ·  Единые ставки  ·  Показы в поиске, каталоге и рекомендациях',
      },
    ],
  },
  remove: {
    eventName: 'Удаление товара из РК',
    badge: 'Успешно',
    action: 'Убрано из РК',
    count: '3 артикула',
    mobileHint: 'теплая шапка ДРР 67%  ·  вязаная зимняя 54%',
    tooltip: {
      type: 'remove',
      rows: [
        { label: 'теплая шапка', drr: '67%' },
        { label: 'вязаная шапка зимняя', drr: '54%' },
        { label: 'шапка утеплённая', drr: '61%' },
      ],
      link: 'Подробнее ↗',
    },
  },
  cluster: {
    eventName: 'Исключение кластеров',
    badge: 'Успешно',
    action: 'Исключено',
    count: '256 кластеров',
    mobileHint: 'красная шапочка: 124 показа / 0 заказов',
    tooltip: {
      type: 'cluster',
      keyword: 'красная шапочка',
      shows: '124',
      orders: '0',
      link: 'Подробнее по каждому кластеру ↗',
    },
  },
  limit: {
    eventName: 'Оптимизация бюджета кластеров',
    badge: 'Успешно',
    action: 'Дневной лимит снижен',
    count: '25 кластеров',
    mobileHint: 'Целевой ДРР 18%  ·  Фактический 34%',
    tooltip: {
      type: 'drr',
      target: '18%',
      actual: '34%',
    },
  },
  'test-pos': {
    eventName: 'Тестирование позиций',
    badge: 'Завершено',
    action: 'Позиция обновлена',
    count: '47 кластеров',
    mobileHint: 'теплая шапка: 4→5→6  ·  вязаная: 7→4→3',
    tooltip: {
      type: 'positions',
      rows: [
        { label: 'теплая шапка', positions: ['4', '5', '6'] },
        { label: 'вязаная шапка', positions: ['7', '4', '3'] },
        { label: 'теплая шапка на зиму', positions: ['2', '6', '5'] },
      ],
      link: 'Подробнее ↗',
    },
  },
  'test-rate': {
    eventName: 'Тестирование ставки',
    badge: 'Завершено',
    action: 'Ставка возвращена',
    count: null,
    mobileHint: '↑ 70 ₽ → рост не обнаружен → возврат ↓ 60 ₽',
    tooltip: {
      type: 'rate-test',
      rows: [
        { label: 'Повышение текущей ставки', value: '↑ 70 ₽', accent: false },
        { label: 'Рост заказов не обнаружен', value: null, accent: true },
        { label: 'Возврат ставки', value: '↓ 60 ₽', accent: false },
      ],
    },
  },
};

function TooltipBody({ tooltip }) {
  const { type } = tooltip;

  if (type === 'price') {
    return (
      <>
        <div className={styles.tooltipRows}>
          {tooltip.rows.map((row) => (
            <div key={row.label} className={styles.tooltipRow}>
              <span className={styles.tooltipProduct}>{row.label}</span>
              <span className={styles.tooltipDots} />
              <span className={styles.tooltipPrice}>
                {row.from} ₽{' '}
                <span className={styles.tooltipArrowChar}>→</span>{' '}
                <span className={styles.priceNew}>{row.to} ₽</span>
              </span>
            </div>
          ))}
        </div>
        {tooltip.link && <span className={styles.tooltipLink}>{tooltip.link}</span>}
      </>
    );
  }

  if (type === 'cluster') {
    return (
      <>
        <div className={styles.tooltipRows}>
          <div className={styles.tooltipRow}>
            <span className={styles.tooltipProduct}>{tooltip.keyword}</span>
            <span className={styles.tooltipDots} />
            <span className={styles.accentPink}>Исключён</span>
          </div>
          <div className={styles.tooltipRow}>
            <span className={styles.tooltipProduct}>Показы</span>
            <span className={styles.tooltipDots} />
            <span className={styles.tooltipPrice}>{tooltip.shows}</span>
          </div>
          <div className={styles.tooltipRow}>
            <span className={styles.tooltipProduct}>Заказы</span>
            <span className={styles.tooltipDots} />
            <span className={styles.tooltipPrice}>{tooltip.orders}</span>
          </div>
        </div>
        {tooltip.link && <span className={styles.tooltipLink}>{tooltip.link}</span>}
      </>
    );
  }

  if (type === 'drr') {
    return (
      <div className={styles.tooltipRows}>
        <div className={styles.tooltipRow}>
          <span className={styles.tooltipProduct}>Целевой ДРР</span>
          <span className={styles.tooltipDots} />
          <span className={styles.tooltipPrice}>{tooltip.target}</span>
        </div>
        <div className={styles.tooltipRow}>
          <span className={styles.accentPink}>Фактический ДРР</span>
          <span className={styles.tooltipDots} />
          <span className={styles.accentPink}>{tooltip.actual}</span>
        </div>
      </div>
    );
  }

  if (type === 'positions') {
    return (
      <>
        <div className={styles.tooltipRows}>
          {tooltip.rows.map((row) => (
            <div key={row.label} className={styles.tooltipRow}>
              <span className={styles.tooltipProduct}>{row.label}</span>
              <span className={styles.tooltipDots} />
              <span className={styles.positionSteps}>
                {row.positions.map((p, i) => (
                  <span key={i} className={styles.posStepGroup}>
                    {i > 0 && <span className={styles.posArrow}>→</span>}
                    <span className={i === row.positions.length - 1 ? styles.posFinal : styles.posStep}>
                      {p}
                    </span>
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
        {tooltip.link && <span className={styles.tooltipLink}>{tooltip.link}</span>}
      </>
    );
  }

  if (type === 'rate-test') {
    return (
      <div className={styles.tooltipRows}>
        {tooltip.rows.map((row, i) => (
          <div key={i} className={styles.tooltipRow}>
            <span className={row.accent ? styles.accentPink : styles.tooltipProduct}>
              {row.label}
            </span>
            {row.value != null && (
              <>
                <span className={styles.tooltipDots} />
                <span className={styles.tooltipPrice}>{row.value}</span>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (type === 'remove') {
    return (
      <>
        <div className={styles.tooltipRows}>
          {tooltip.rows.map((row) => (
            <div key={row.label} className={styles.tooltipRow}>
              <span className={styles.tooltipProduct}>{row.label}</span>
              <span className={styles.tooltipDots} />
              <span className={styles.tooltipPrice}>
                ДРР: <span className={styles.accentPink}>{row.drr}</span>
              </span>
            </div>
          ))}
        </div>
        {tooltip.link && <span className={styles.tooltipLink}>{tooltip.link}</span>}
      </>
    );
  }

  return null;
}

function IllustrationInner({ illus }) {
  return (
    <div className={styles.illustrationContent}>
      {illus.type === 'campaign' ? (
        <div className={styles.campaignCard}>
          <div className={styles.campaignHeader}>
            <span className={styles.scheduleBtn}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="1" y="2.5" width="12" height="10.5" rx="2" stroke="#5b5b5b" strokeWidth="1.2" />
                <path d="M1 5.5h12" stroke="#5b5b5b" strokeWidth="1.2" />
                <path d="M4.5 1v3M9.5 1v3" stroke="#5b5b5b" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              Расписание кампании
            </span>
          </div>
          {illus.campaigns.map((c, i) => (
            <div key={i} className={styles.campaignRowItem}>
              <p className={styles.campaignLabel}>{c.label}</p>
              <div className={styles.campaignRowTop}>
                <span className={styles.campaignName}>{c.name}</span>
                <span className={`${styles.campaignBadge} ${c.statusType === 'green' ? styles.campaignBadgeGreen : styles.campaignBadgeYellow}`}>
                  {c.status}
                </span>
              </div>
              <p className={styles.campaignDetails}>{c.details}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className={styles.eventCard}>
            <div className={styles.eventLeft}>
              <p className={styles.eventName}>{illus.eventName}</p>
              <p className={styles.eventLink}>Данные анализа, на основе которых совершено действие</p>
            </div>
            <div className={styles.eventRight}>
              <div className={styles.eventRightTop}>
                <span className={styles.badge}>{illus.badge}</span>
              </div>
              <div className={styles.eventRightBottom}>
                <span className={styles.eventStatusText}>{illus.action}</span>
                {illus.count && <span className={styles.badge}>{illus.count}</span>}
              </div>
            </div>
            {illus.mobileHint && (
              <p className={styles.eventMobileHint}>{illus.mobileHint}</p>
            )}
          </div>

          {illus.tooltip && (
            <div className={styles.tooltip}>
              <div className={styles.tooltipArrow} />
              <div className={styles.tooltipBody}>
                <TooltipBody tooltip={illus.tooltip} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

const DURATION = 3000;

export function AdCycleSection({ className = '' }) {
  const [activeId, setActiveId] = useState('rate');
  const [paused, setPaused] = useState(false);
  const illus = ILLUS[activeId];

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setActiveId((prev) => {
        const idx = actions.findIndex((a) => a.id === prev);
        return actions[(idx + 1) % actions.length].id;
      });
    }, DURATION);
    return () => clearTimeout(timer);
  }, [activeId, paused]);

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
                data-cycle-id={action.id}
                className={`${styles.accordionItem} ${isActive ? styles.active : ''}`}
                onMouseEnter={() => setActiveId(action.id)}
                onClick={() => { setActiveId(action.id); setPaused(true); }}
              >
                <div className={styles.divider}>
                  {isActive && !paused && (
                    <div key={activeId} className={styles.dividerFill} />
                  )}
                </div>
                <div className={styles.accordionRow}>
                  <span className={`${styles.dot} ${isActive ? styles.dotVisible : ''}`} />
                  <div className={styles.accordionText}>
                    <span className={styles.accordionTitle}>{typograph(action.title)}</span>
                    {isActive && (
                      <span className={styles.accordionDesc}>{typograph(action.description)}</span>
                    )}
                  </div>
                </div>
                {isActive && (
                  <div className={styles.inlineVisual}>
                    <img src={imgCycleBg} alt="" className={styles.bgImg} />
                    <IllustrationInner illus={illus} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.visual}>
          <img src={imgCycleBg} alt="" className={styles.bgImg} />
          <IllustrationInner key={activeId} illus={illus} />
        </div>
      </div>
    </section>
  );
}

AdCycleSection.propTypes = {
  className: PropTypes.string,
};

export default AdCycleSection;
