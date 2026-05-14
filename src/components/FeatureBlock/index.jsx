import PropTypes from 'prop-types';
import styles from './FeatureBlock.module.css';
import { typograph } from '../../utils/typograph';

import iconPrioritization from '../../assets/features/icon-prioritization.png';
import iconSpeed from '../../assets/features/icon-speed.png';
import iconScale from '../../assets/features/icon-scale.png';
import imgPrioritization from '../../assets/features/prioritization.webp';
import imgSpeed from '../../assets/features/speed.webp';
import imgScale from '../../assets/features/scale.webp';

const defaultBlocks = [
  {
    id: 'prioritization',
    icon: iconPrioritization,
    title: 'Находим. Приоритезируем. Решаем',
    subtitle: 'Система круглосуточно анализирует весь ассортимент, находит утечки прибыли и точки роста, превращает их в приоритизированные задачи и автоматически выполняет с помощью ИИ-агентов',
    image: imgPrioritization,
    reversed: false,
    stats: [
      { value: '24/7', label: 'контроль всей матрицы' },
      { value: '3', label: 'степени критичности задач' },
      { value: '∞', label: 'количество SKU' },
    ],
  },
  {
    id: 'speed',
    icon: iconSpeed,
    title: 'Реагируем быстрее,\nчем проблема успеет навредить',
    subtitle: 'ИИ-агенты работают на опережение: предиктивно находят риски, и сразу берутся за устранение — без участия человека',
    image: imgSpeed,
    reversed: true,
    stats: [
      { value: '<1 мин', label: 'скорость реакции' },
    ],
  },
  {
    id: 'scale',
    icon: iconScale,
    title: 'Управляем любым количеством SKU',
    subtitle: 'ИИ-агенты управляют матрицей любого размера без потери контроля. Бизнес растёт — система масштабируется вместе с ним, без хаоса, дополнительного найма и рутины',
    image: imgScale,
    reversed: false,
  },
];

/**
 * FeatureBlock — Section with icon, title, subtitle and illustration
 * Alternating layout (text left/right)
 */
export function FeatureBlock({ sectionTitle = 'Решение', blocks = defaultBlocks }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {sectionTitle && (
          <h2 className={styles.sectionTitle}>
            {typograph(sectionTitle)}
          </h2>
        )}
        {blocks.map((block) => (
          <div
            key={block.id}
            className={`${styles.block} ${block.reversed ? styles.blockReversed : ''}`}
          >
            <div className={styles.textSide}>
              <img src={block.icon} alt="" className={styles.icon} />
              <h3 className={styles.title}>
                {typograph(block.title).split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </h3>
              <p className={styles.subtitle}>{typograph(block.subtitle)}</p>
              {block.stats && block.stats.length > 0 && (
                <div className={styles.stats}>
                  {block.stats.map((stat, i) => (
                    <div key={i} className={styles.stat}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{typograph(stat.label)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.imageSide}>
              <img
                src={block.image}
                alt=""
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

FeatureBlock.propTypes = {
  sectionTitle: PropTypes.string,
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      reversed: PropTypes.bool,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};

export default FeatureBlock;
