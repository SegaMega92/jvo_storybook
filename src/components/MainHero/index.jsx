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
 * Features gradient container with switchable content tabs
 */
export function MainHero({
  title = 'ИИ-агенты для\u00A0автоматизации на\u00A0маркетплейсах',
  description = 'Автоматизируйте управление ценами, рекламой, коммуникациями, SEO и\u00A0поставками в\u00A0единой системе ИИ-агентов\u00A0— соберите свой набор инструментов «Дживио» и\u00A0платите только за\u00A0нужные функции.',
  tabs,
  defaultActiveTab = 'communications',
}) {
  // Use provided tabs or default
  const tabsData = tabs || getDefaultTabs();
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const activeTabData = tabsData.find((tab) => tab.id === activeTab) || tabsData[0];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header: Title + Description */}
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>

        {/* Main gradient container */}
        <div className={styles.showcase}>
          <div className={styles.showcaseInner}>
            {/* Tabs navigation */}
            <div className={styles.tabsWrapper}>
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

              {/* Tab description - right side */}
              <p className={styles.tabDescription}>{activeTabData.description}</p>
            </div>

            {/* Content area */}
            <div className={styles.contentArea}>
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className={`${styles.contentPane} ${activeTab === tab.id ? styles.contentPaneActive : ''}`}
                >
                  {/* Render content only when active - resets state on tab switch */}
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
    description: 'Ответы на\u00A0отзывы, вопросы и\u00A0кросс-продажи с\u00A0глубокой аналитикой для\u00A0бизнеса',
    content: <HeroCommunications />,
  },
  {
    id: 'pricing',
    label: 'Управление ценами',
    icon: tabPricingIcon,
    description: 'Автоматическое ценообразование на\u00A0основе анализа конкурентов и\u00A0спроса',
    content: null, // TODO: HeroPricing
  },
  {
    id: 'advertising',
    label: 'Реклама',
    icon: tabAdvertisingIcon,
    description: 'Оптимизация рекламных кампаний с\u00A0максимальной отдачей от\u00A0бюджета',
    content: null, // TODO: HeroAdvertising
  },
];

MainHero.propTypes = {
  /** Main heading text */
  title: PropTypes.string,
  /** Description text below heading */
  description: PropTypes.string,
  /** Array of tab objects */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content: PropTypes.node,
    })
  ),
  /** ID of the default active tab */
  defaultActiveTab: PropTypes.string,
};

export default MainHero;
