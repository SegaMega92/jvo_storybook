import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MainHero.module.css';

// Default icons
import tabCommunicationsIcon from '../../assets/icons/main-hero/tab-communications.svg';
import tabPricingIcon from '../../assets/icons/main-hero/tab-pricing.svg';
import tabAdvertisingIcon from '../../assets/icons/main-hero/tab-advertising.svg';

// Illustrations
import { HeroCommunications } from '../Illustrations/HeroCommunications';

/**
 * MainHero - Hero section with tabs for the main page
 * Two-column header (title left, description right)
 * Gradient showcase card with tabs inside (top-left)
 */
export function MainHero({
  title = 'ИИ-агенты для автоматизации на маркетплейсах',
  description = 'Автоматизируйте управление ценами, рекламой, коммуникациями, SEO и поставками в единой системе ИИ-агентов — соберите свой набор инструментов «Дживио» и платите только за нужные функции.',
  tabs,
  defaultActiveTab = 'communications',
}) {
  const tabsData = tabs || getDefaultTabs();
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header: Title left + Description right */}
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>

        {/* Gradient showcase card */}
        <div className={styles.showcase}>
          <div className={styles.showcaseInner}>
            {/* Tabs inside the card */}
            <div className={styles.tabs}>
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <img src={tab.icon} alt="" className={styles.tabIcon} />
                  <span className={styles.tabLabel}>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Content area */}
            <div className={styles.contentArea}>
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className={`${styles.contentPane} ${activeTab === tab.id ? styles.contentPaneActive : ''}`}
                >
                  {activeTab === tab.id && tab.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default tabs data with illustrations
const getDefaultTabs = () => [
  {
    id: 'communications',
    label: 'Коммуникации',
    icon: tabCommunicationsIcon,
    description: 'Ответы на отзывы, вопросы и кросс-продажи с глубокой аналитикой для бизнеса',
    content: <HeroCommunications />,
  },
  {
    id: 'pricing',
    label: 'Управление ценами',
    icon: tabPricingIcon,
    description: 'Автоматическое ценообразование на основе анализа конкурентов и спроса',
    content: null,
  },
  {
    id: 'advertising',
    label: 'Реклама',
    icon: tabAdvertisingIcon,
    description: 'Оптимизация рекламных кампаний с максимальной отдачей от бюджета',
    content: null,
  },
];

MainHero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content: PropTypes.node,
    })
  ),
  defaultActiveTab: PropTypes.string,
};

export default MainHero;
