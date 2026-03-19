import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './BentoGrid.module.css';

// Feature images
import imgScenarios from '../../assets/bento/scenarios.png';
import imgStrategies from '../../assets/bento/strategies.png';
import imgControl from '../../assets/bento/control.png';
import imgBadge50k from '../../assets/bento/badge-50k.png';
import imgSettings from '../../assets/bento/settings.png';
import imgMultibrand from '../../assets/bento/multibrand.png';
import imgCenterIcon from '../../assets/bento/center-icon.png';

/**
 * BentoGrid - сетка фич в стиле bento
 * 7 блоков в сетке 3x3 с различными span'ами
 */
export function BentoGrid({ className = '' }) {
  const gridRef = useRef(null);

  // Анимация появления при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const blocks = gridRef.current?.querySelectorAll(`.${styles.block}`);
    blocks?.forEach((block, index) => {
      block.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(block);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.grid} ref={gridRef}>
        {/* Block 1: Лёгкий старт (row 1, col 1-2) */}
        <div className={`${styles.block} ${styles.block1}`}>
          <div className={styles.illustrationLarge}>
            <img src={imgScenarios} alt="" className={styles.illustrationImg} />
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Лёгкий старт с готовыми сценариями</h3>
            <p className={styles.description}>
              запускайте Агента в пару кликов, используя проверенную библиотеку промптов и сценариев от лидеров рынка
            </p>
          </div>
        </div>

        {/* Block 2: Мультистратегии (row 1, col 3) */}
        <div className={`${styles.block} ${styles.block2}`}>
          <div className={styles.iconWrapper}>
            <img src={imgStrategies} alt="" className={styles.icon} />
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Уникальные мультистратегии</h3>
            <p className={styles.description}>
              настраивайте собственные сценарии любой сложности, комбинируя правила и условия под задачи своего бренда
            </p>
          </div>
        </div>

        {/* Block 3: Два режима контроля (row 2, col 1) */}
        <div className={`${styles.block} ${styles.block3}`}>
          <div className={styles.illustrationControl}>
            <img src={imgControl} alt="" className={styles.illustrationImg} />
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Два режима контроля</h3>
            <p className={styles.description}>
              используйте «Автопилот» для полной автоматизации или «Полуавтомат» для подтверждения действий Агента
            </p>
          </div>
        </div>

        {/* Block 4: Центральный заголовок (row 2, col 2) */}
        <div className={`${styles.block} ${styles.blockCenter}`}>
          <div className={styles.centerIconWrapper}>
            <img src={imgCenterIcon} alt="" className={styles.centerIcon} />
          </div>
          <h2 className={styles.centerTitle}>
            Гибкость<br />и безопасность управления
          </h2>
        </div>

        {/* Block 5: 50К знаков (row 2, col 3) */}
        <div className={`${styles.block} ${styles.block5}`}>
          <div className={styles.badge50k}>
            <img src={imgBadge50k} alt="50К" className={styles.badge50kImg} />
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Промт до 50 000 знаков</h3>
            <p className={styles.description}>
              прописывайте в промте все технические нюансы и спецификации, чтобы Агент отвечал на уровне эксперта
            </p>
          </div>
        </div>

        {/* Block 6: Мгновенная настройка (row 3, col 1) */}
        <div className={`${styles.block} ${styles.block6}`}>
          <div className={styles.iconWrapper}>
            <img src={imgSettings} alt="" className={styles.icon} />
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Мгновенная настройка</h3>
            <p className={styles.description}>
              меняйте логику работы простыми промтами, Агент сразу применит изменения к выбранным товарам
            </p>
          </div>
        </div>

        {/* Block 7: Мультибрендовость (row 3, col 2-3) */}
        <div className={`${styles.block} ${styles.block7}`}>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Мультибрендовость</h3>
            <p className={styles.description}>
              работайте с несколькими брендами одновременно, Агент автоматически определяет бренд при коммуникации
            </p>
          </div>
          <div className={styles.illustrationMultibrand}>
            <img src={imgMultibrand} alt="" className={styles.illustrationImg} />
          </div>
        </div>
      </div>
    </section>
  );
}

BentoGrid.propTypes = {
  className: PropTypes.string,
};

export default BentoGrid;
