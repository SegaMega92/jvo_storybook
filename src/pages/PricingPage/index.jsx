import PropTypes from 'prop-types';
import styles from './PricingPage.module.css';
import { Header } from '../../components/Header';
import { typograph } from '../../utils/typograph';

/* Placeholder icon for Start card */
const StartIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.titleIcon}>
    <rect width="72" height="72" rx="16" fill="url(#startGrad)" />
    <path d="M24 36L32 44L48 28" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="startGrad" x1="0" y1="0" x2="72" y2="72">
        <stop stopColor="#c16ffb" />
        <stop offset="1" stopColor="#ff8fda" />
      </linearGradient>
    </defs>
  </svg>
);

/* Placeholder icon for Full card */
const FullIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.titleIcon}>
    <rect width="72" height="72" rx="16" fill="url(#fullGrad)" />
    <path d="M20 36L28 44L44 28" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 36L40 44L52 28" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="fullGrad" x1="0" y1="0" x2="72" y2="72">
        <stop stopColor="#ff965f" />
        <stop offset="1" stopColor="#facf61" />
      </linearGradient>
    </defs>
  </svg>
);

/* 24x24 icon box for module items */
const ModuleIcon = ({ children }) => (
  <span className={styles.iconBox}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  </span>
);

ModuleIcon.propTypes = { children: PropTypes.node };

/* Specific module icons */
const IconChat = () => (
  <ModuleIcon>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </ModuleIcon>
);
const IconPrice = () => (
  <ModuleIcon>
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </ModuleIcon>
);
const IconAd = () => (
  <ModuleIcon>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </ModuleIcon>
);
const IconSupply = () => (
  <ModuleIcon>
    <rect x="1" y="3" width="15" height="13" rx="2" stroke="#505050" strokeWidth="1.5" />
    <path d="M16 8h4l3 3v5h-7V8z" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="5.5" cy="18.5" r="2.5" stroke="#505050" strokeWidth="1.5" />
    <circle cx="18.5" cy="18.5" r="2.5" stroke="#505050" strokeWidth="1.5" />
  </ModuleIcon>
);
const IconSeo = () => (
  <ModuleIcon>
    <circle cx="11" cy="11" r="8" stroke="#505050" strokeWidth="1.5" />
    <path d="M21 21l-4.35-4.35" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" />
  </ModuleIcon>
);
const IconMonitoring = () => (
  <ModuleIcon>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#505050" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" stroke="#505050" strokeWidth="1.5" />
  </ModuleIcon>
);
const IconDashboard = () => (
  <ModuleIcon>
    <rect x="3" y="3" width="7" height="9" rx="1" stroke="#505050" strokeWidth="1.5" />
    <rect x="14" y="3" width="7" height="5" rx="1" stroke="#505050" strokeWidth="1.5" />
    <rect x="14" y="12" width="7" height="9" rx="1" stroke="#505050" strokeWidth="1.5" />
    <rect x="3" y="16" width="7" height="5" rx="1" stroke="#505050" strokeWidth="1.5" />
  </ModuleIcon>
);
const IconSetup = () => (
  <ModuleIcon>
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </ModuleIcon>
);
const IconExpert = () => (
  <ModuleIcon>
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="7" r="4" stroke="#505050" strokeWidth="1.5" />
  </ModuleIcon>
);

/* 24x24 checkmark box for right card */
const CheckBox = () => (
  <span className={styles.iconBox}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12l5 5L20 7" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const startModules = [
  { label: typograph('Агент Коммуникаций'), price: typograph('от\u00A030\u00A0000\u00A0₽/мес'), Icon: IconChat },
  { label: typograph('Агент Ценообразования'), price: typograph('от\u00A050\u00A0000\u00A0₽/мес'), Icon: IconPrice },
  { label: typograph('Агент Рекламы'), price: typograph('от\u00A030\u00A0000\u00A0₽/мес'), Icon: IconAd },
  { label: typograph('Планировщик поставок'), price: typograph('от\u00A09\u00A0500\u00A0₽/мес'), Icon: IconSupply },
  { label: typograph('SEO PRO (только WB)'), price: typograph('от\u00A035\u00A0000\u00A0₽/мес'), Icon: IconSeo },
  { label: typograph('Мониторинг'), price: typograph('от\u00A09\u00A0500\u00A0₽/мес'), Icon: IconMonitoring },
  { label: typograph('Дашборд'), price: typograph('от\u00A09\u00A0500\u00A0₽/мес'), Icon: IconDashboard },
];

const startExtras = [
  { label: typograph('Внедрение специалистом'), price: typograph('50\u00A0000\u00A0₽'), Icon: IconSetup },
  { label: typograph('Встреча с экспертом / час аналитика'), price: typograph('5\u00A0400\u00A0₽'), Icon: IconExpert },
];

const fullFactors = [
  typograph('Количество SKU в матрице'),
  typograph('Количество маркетплейсов'),
  typograph('Набор подключённых агентов'),
  typograph('Объём коммуникаций и отзывов'),
  typograph('Глубина аналитики и отчётности'),
];

const fullModules = [
  { label: typograph('Агент Коммуникаций'), Icon: IconChat },
  { label: typograph('Агент Ценообразования'), Icon: IconPrice },
  { label: typograph('Агент Рекламы'), Icon: IconAd },
  { label: typograph('Планировщик поставок'), Icon: IconSupply },
  { label: 'SEO PRO', Icon: IconSeo },
  { label: typograph('Мониторинг'), Icon: IconMonitoring },
  { label: typograph('Дашборд'), Icon: IconDashboard },
];

/**
 * PricingPage - Pricing page with two plan cards
 */
export function PricingPage({ className = '', embedded = false }) {
  return (
    <div className={`${styles.page} ${className}`}>
      {!embedded && <Header />}

      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.pageTitle}>{typograph('Тарифы')}</h1>
          <div className={styles.container}>
            {/* ===== Left Card: Start ===== */}
            <div className={styles.card}>
              <div className={styles.cardTitleRow}>
                <h2 className={styles.cardTitle}>
                  {typograph('Старт')}
                </h2>
                <StartIcon />
              </div>

              <p className={styles.cardSubtitle}>
                {typograph('Быстрый запуск с\u00A0нужными инструментами\u00A0— подключайте отдельных агентов, тестируйте на\u00A0своей матрице и\u00A0масштабируйтесь по\u00A0мере роста')}
              </p>

              <a href="https://jvo.ru/requestdemo" className={styles.ctaButtonPink}>
                {typograph('Запросить демо')}
              </a>

              <hr className={styles.divider} />

              <div className={styles.featureSection}>
                <span className={styles.sectionLabel}>
                  {typograph('МОДУЛИ И СТОИМОСТЬ:')}
                </span>
                <ul className={styles.featureList}>
                  {startModules.map((item, i) => (
                    <li key={i} className={styles.featureItemPrice}>
                      <span className={styles.featureItemLeft}>
                        <item.Icon />
                        <span>{item.label}</span>
                      </span>
                      <span className={styles.featureItemRight}>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.featureSection}>
                <span className={styles.sectionLabel}>
                  {typograph('ДОПОЛНИТЕЛЬНО:')}
                </span>
                <ul className={styles.featureList}>
                  {startExtras.map((item, i) => (
                    <li key={i} className={styles.featureItemPrice}>
                      <span className={styles.featureItemLeft}>
                        <item.Icon />
                        <span>{item.label}</span>
                      </span>
                      <span className={styles.featureItemRight}>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className={styles.cardNote}>
                {typograph('Стоимость за\u00A01\u00A0месяц на\u00A0одном маркетплейсе')}
              </p>
            </div>

            {/* ===== Right Card: Full ===== */}
            <div className={styles.card}>
              <div className={styles.cardTitleRow}>
                <h2 className={styles.cardTitle}>
                  {typograph('Полный')}
                </h2>
                <FullIcon />
              </div>

              <p className={styles.cardSubtitle}>
                {typograph('Стоимость полноценной автоматизации зависит от\u00A0количества SKU, маркетплейсов и\u00A0набора агентов\u00A0— собираем индивидуальный тариф под\u00A0задачи вашего бизнеса')}
              </p>

              <a href="https://jvo.ru/requestdemo" className={styles.ctaButtonDark}>
                {typograph('Рассчитать стоимость')}
              </a>

              <hr className={styles.divider} />

              <div className={styles.featureSection}>
                <span className={styles.sectionLabel}>
                  {typograph('МОДУЛИ\u00A0— ДОСТУПНЫ ВСЕ:')}
                </span>
                <ul className={styles.featureList}>
                  {fullModules.map((item, i) => (
                    <li key={i} className={styles.featureItemCheck}>
                      <item.Icon />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.featureSection}>
                <span className={styles.sectionLabel}>
                  {typograph('ЧТО ВЛИЯЕТ НА СТОИМОСТЬ:')}
                </span>
                <ul className={styles.featureList}>
                  {fullFactors.map((item, i) => (
                    <li key={i} className={styles.featureItemCheck}>
                      <CheckBox />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

PricingPage.propTypes = {
  className: PropTypes.string,
  embedded: PropTypes.bool,
};

export default PricingPage;
