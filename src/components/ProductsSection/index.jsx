import PropTypes from 'prop-types';
import styles from './ProductsSection.module.css';
import { typograph } from '../../utils/typograph';

import iconSeoPro from '../../assets/products/icon-seo-pro@2x.png';
import iconLogistics from '../../assets/products/icon-logistics@2x.png';
import screenshotSeoPro from '../../assets/products/screenshot-seo-pro.webp';
import screenshotLogistics from '../../assets/products/screenshot-logistics.webp';
import bgSeoPro from '../../assets/products/bg-seo-pro.svg';
import bgLogistics from '../../assets/products/bg-logistics.svg';

const ArrowDiagonalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const defaultProducts = [
  {
    id: 'seo-pro',
    name: 'SEO Pro',
    description:
      'Автоматическая SEO-оптимизация на маркетплейсах с прогнозом эффективности и трекинг-контролем',
    icon: iconSeoPro,
    screenshot: screenshotSeoPro,
    bg: bgSeoPro,
    href: '/seopro',
    variant: 'light',
  },
  {
    id: 'logistics',
    name: 'Планировщик поставок',
    description:
      'Математический расчёт объёма и графика поставок на региональные склады для минимизации затрат на хранение',
    icon: iconLogistics,
    screenshot: screenshotLogistics,
    bg: bgLogistics,
    href: '/logistics',
    variant: 'dark',
  },
];

/**
 * ProductsSection — Two product cards with gradient backgrounds
 */
export function ProductsSection({
  title = 'Больше результата с другими модулями Дживио',
  subtitle = '«Дживио» в реальном времени управляет видимостью товаров и долей рынка, устраняя технологический разрыв.',
  products = defaultProducts,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{typograph(title)}</h2>
          <p className={styles.subtitle}>{typograph(subtitle)}</p>
        </div>

        <div className={styles.cards}>
          {products.map((product) => (
            <a
              key={product.id}
              className={`${styles.card} ${product.variant === 'dark' ? styles.cardDark : ''}`}
              href={product.href}
            >
              {/* Gradient background */}
              <img
                src={product.bg}
                alt=""
                className={styles.cardBg}
                aria-hidden="true"
              />

              {/* Shimmer overlay for hover */}
              <div className={styles.cardShimmer} aria-hidden="true" />

              <div className={styles.cardContent}>
                {/* Top row: tag + "Подробнее" */}
                <div className={styles.cardTopRow}>
                  <div className={styles.cardTag}>
                    <img
                      src={product.icon}
                      alt=""
                      className={styles.cardIcon}
                    />
                    <span className={styles.cardName}>{product.name}</span>
                  </div>

                  {/* "Подробнее" — visible on hover */}
                  <div className={styles.cardLink}>
                    <span className={styles.cardLinkText}>Подробнее</span>
                    <span className={styles.cardLinkArrow}>
                      <ArrowDiagonalIcon />
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={styles.cardDescription}>
                  {typograph(product.description)}
                </p>

                {/* Product screenshot */}
                <div className={styles.cardImageWrap}>
                  <img
                    src={product.screenshot}
                    alt={product.name}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

ProductsSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      screenshot: PropTypes.string.isRequired,
      bg: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      variant: PropTypes.oneOf(['light', 'dark']),
    })
  ),
};

export default ProductsSection;
