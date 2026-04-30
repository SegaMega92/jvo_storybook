import { useState, useEffect } from 'react';
import styles from './ChartStep.module.css';
import { typograph } from '../../../utils/typograph';

import gridSvg from '../../../assets/illustrations/pricing/grid.svg';
import hatchSvg from '../../../assets/illustrations/pricing/hatch.svg';
import dashedLineSvg from '../../../assets/illustrations/pricing/dashed-line.svg';
import lockSvg from '../../../assets/illustrations/pricing/lock.svg';
import arrowDownSvg from '../../../assets/illustrations/pricing/arrow-down.svg';

/**
 * ChartStep — Animated pricing chart (step 3 of IllustrationPricing)
 * Graph line draws left→right, event dot pulses, tooltip appears
 */
export function ChartStep({ isActive = true }) {
  const [phase, setPhase] = useState(0);
  // 0: line draws to event point (~2s)
  // 1: dot pulse + tooltip + "↓ 24 ₽" appear (~2s)
  // 2: line continues drawing (~2s)

  useEffect(() => {
    if (!isActive) { setPhase(0); return; }
    // Auto-advance phases
    // Line reaches x=180 (34% of path) at ~1.7s of 5s animation
    const t1 = setTimeout(() => setPhase(1), 1700);
    const t2 = setTimeout(() => setPhase(2), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isActive]);

  return (
    <div className={styles.chart}>
      {/* Title */}
      <div className={styles.chartTitle}>
        {typograph('Изменение цены ₽')}
      </div>

      {/* Grid background */}
      <img src={gridSvg} alt="" className={styles.grid} />

      {/* Yellow zone */}
      <div className={styles.yellowZone}>
        <div className={styles.yellowBg} />
        <img src={hatchSvg} alt="" className={styles.hatch} />
        <img src={dashedLineSvg} alt="" className={styles.dashedLine} />
      </div>

      {/* Min price badge */}
      <div className={styles.minBadge}>
        <img src={lockSvg} alt="" className={styles.lockIcon} />
        <span>{typograph('2 790 ₽')}</span>
      </div>

      {/* Date labels */}
      <div className={styles.dates}>
        {Array.from({ length: 30 }, (_, i) => (
          <span key={i} className={styles.dateLabel}>
            {String(i + 1).padStart(2, '0')}
          </span>
        ))}
      </div>

      {/* Graph line + event dot — all inside SVG for correct scaling */}
      <svg className={styles.graphSvg} viewBox="0 0 523 126" fill="none">
        <path
          className={`${styles.graphLine} ${isActive ? styles.graphLineAnimate : styles.graphLineReset}`}
          d="M0 30 L180 30 L200 96 L220 96 L240 66 L280 66 L320 86 L360 86 L400 76 L440 76 L480 80 L523 80"
          stroke="#C16FFB"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Pulse + dot at the drop point (x=200, y=96) */}
        <circle cx="200" cy="96" r="12" fill="#f2e7fe" opacity={phase >= 1 ? 1 : 0}>
          {phase >= 1 && <animate attributeName="r" values="6;16;6" dur="2s" repeatCount="indefinite" />}
          {phase >= 1 && <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />}
        </circle>
        <circle cx="200" cy="96" r="5" fill="#C16FFB" className={phase >= 1 ? styles.svgDotVisible : styles.svgDotHidden} />
      </svg>

      {/* Price drop badge — positioned relative to graphSvg via percentages */}
      <div className={styles.graphOverlay}>
        <div className={`${styles.dropBadge} ${phase >= 1 ? styles.dropBadgeVisible : ''}`}>
          <img src={arrowDownSvg} alt="" className={styles.arrowIcon} />
          <span>{typograph('24 ₽')}</span>
        </div>

        <div className={`${styles.tooltip} ${phase >= 1 ? styles.tooltipVisible : ''}`}>
          <div className={styles.tooltipHeader}>
            <span className={styles.tooltipDot} />
            <span className={styles.tooltipLabel}>{typograph('Агент ценообразования')}</span>
          </div>
          <p className={styles.tooltipText}>
            {typograph('Конкурент снизил стоимость\nдо 3 199 ₽, новая стоимость: 3 198 ₽')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChartStep;
