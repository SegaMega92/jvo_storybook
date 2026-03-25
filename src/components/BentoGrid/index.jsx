import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './BentoGrid.module.css';

// Default images (for backwards compatibility)
import imgScenarios from '../../assets/bento/scenarios.png';
import imgStrategies from '../../assets/bento/strategies.png';
import imgControl from '../../assets/bento/control.png';
import imgBadge50k from '../../assets/bento/badge-50k.png';
import imgSettings from '../../assets/bento/settings.png';
import imgMultibrand from '../../assets/bento/multibrand.png';
import imgCenterIcon from '../../assets/bento/center-icon.png';

// Default items for Agent Communication landing
const defaultItems = [
  {
    id: 'scenarios',
    title: 'Лёгкий старт с готовыми сценариями',
    description: 'Запускайте Агента в пару кликов, используя проверенную библиотеку промптов и сценариев от лидеров рынка',
    image: imgScenarios,
    size: 'wide',
    layout: 'image-left',
  },
  {
    id: 'strategies',
    title: 'Уникальные мультистратегии',
    description: 'Настраивайте собственные сценарии любой сложности, комбинируя правила и условия под задачи своего бренда',
    image: imgStrategies,
    imageType: 'icon',
  },
  {
    id: 'control',
    title: 'Два режима контроля',
    description: 'Используйте «Автопилот» для полной автоматизации или «Гибридный» для подтверждения действий Агента',
    image: imgControl,
    layout: 'image-left',
  },
  {
    id: 'center',
    type: 'center',
    title: 'Гибкость\nи безопасность управления',
    image: imgCenterIcon,
  },
  {
    id: 'prompt',
    title: 'Промт до 50 000 знаков',
    description: 'Прописывайте в промте все технические нюансы и спецификации, чтобы Агент отвечал на уровне эксперта',
    image: imgBadge50k,
    imageType: 'badge',
  },
  {
    id: 'settings',
    title: 'Мгновенная настройка',
    description: 'Меняйте логику работы простыми промтами, Агент сразу применит изменения к выбранным товарам',
    image: imgSettings,
    imageType: 'icon',
  },
  {
    id: 'multibrand',
    title: 'Мультибрендовость',
    description: 'Работайте с несколькими брендами одновременно, Агент автоматически определяет бренд при коммуникации',
    image: imgMultibrand,
    size: 'wide',
    layout: 'image-right',
  },
];

// Маппинг индекса блока на CSS класс для default варианта
const blockIndexToClass = {
  0: 'block1',
  1: 'block2',
  2: 'block3',
  // index 3 - center block, handled separately
  4: 'block5',
  5: 'block6',
  6: 'block7',
};

/**
 * BentoGrid - универсальная сетка фич в стиле bento
 * 7 блоков в сетке 3x3 с различными span'ами
 *
 * @param {Array} items - массив элементов для отображения
 * @param {string} variant - вариант сетки: 'default' (с центральным блоком) или 'simple' (все блоки одинаковые)
 * @param {string} className - дополнительный CSS класс
 */
export function BentoGrid({ items = defaultItems, variant = 'default', className = '' }) {
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

  // Рендер блока в зависимости от типа
  const renderBlock = (item, index) => {
    // Собираем классы для блока
    const blockClasses = [styles.block];

    // Добавляем позиционный класс для default варианта
    if (variant === 'default' && blockIndexToClass[index]) {
      blockClasses.push(styles[blockIndexToClass[index]]);
    }

    // Центральный блок со специальным оформлением
    if (item.type === 'center') {
      blockClasses.push(styles.blockCenter);

      return (
        <div key={item.id} className={blockClasses.join(' ')}>
          <div className={styles.centerIconWrapper}>
            <img src={item.image} alt="" className={styles.centerIcon} />
          </div>
          <h2 className={styles.centerTitle}>
            {item.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i < item.title.split('\n').length - 1 && <br />}</span>
            ))}
          </h2>
        </div>
      );
    }

    // Добавляем классы размера и layout
    if (item.size === 'wide') {
      blockClasses.push(styles.blockWide);
    }
    if (item.layout === 'image-left') {
      blockClasses.push(styles.blockImageLeft);
    }
    if (item.layout === 'image-right') {
      blockClasses.push(styles.blockImageRight);
    }
    if (item.imageType === 'icon') {
      blockClasses.push(styles.blockIcon);
    }

    // Определяем тип изображения
    const isIcon = item.imageType === 'icon';
    const isBadge = item.imageType === 'badge';
    const isWide = item.size === 'wide';
    const isImageRight = item.layout === 'image-right';

    // Рендер изображения
    const renderImage = () => {
      if (isIcon) {
        return (
          <div className={styles.iconWrapper}>
            <img src={item.image} alt="" className={styles.icon} />
          </div>
        );
      }

      if (isBadge) {
        return (
          <div className={styles.badge50k}>
            <img src={item.image} alt="" className={styles.badge50kImg} />
          </div>
        );
      }

      // Определяем класс обёртки для изображения
      let wrapperClass = styles.illustrationLarge;
      if (!isWide && !isImageRight) {
        wrapperClass = styles.illustrationControl;
      } else if (isWide && isImageRight) {
        wrapperClass = styles.illustrationMultibrand;
      }

      return (
        <div className={wrapperClass}>
          <img src={item.image} alt="" className={styles.illustrationImg} />
        </div>
      );
    };

    return (
      <div key={item.id} className={blockClasses.join(' ')}>
        {renderImage()}
        <div className={styles.textContent}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </div>
      </div>
    );
  };

  const gridClasses = [
    styles.section,
    variant === 'simple' ? styles.sectionSimple : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <section className={gridClasses}>
      <div className={styles.grid} ref={gridRef}>
        {items.map((item, index) => renderBlock(item, index))}
      </div>
    </section>
  );
}

BentoGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string,
      imageType: PropTypes.oneOf(['icon', 'badge', 'image']),
      type: PropTypes.oneOf(['center']),
      size: PropTypes.oneOf(['wide']),
      layout: PropTypes.oneOf(['image-left', 'image-right']),
    })
  ),
  variant: PropTypes.oneOf(['default', 'simple']),
  className: PropTypes.string,
};

export default BentoGrid;
