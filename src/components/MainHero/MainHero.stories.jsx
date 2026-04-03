import { MainHero } from './index';
import { HeroCommunications } from '../Illustrations/HeroCommunications';

// Import icons for custom tabs
import tabCommunicationsIcon from '../../assets/icons/main-hero/tab-communications.svg';
import tabPricingIcon from '../../assets/icons/main-hero/tab-pricing.svg';
import tabAdvertisingIcon from '../../assets/icons/main-hero/tab-advertising.svg';

export default {
  title: 'Sections/MainHero',
  component: MainHero,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Main heading text',
    },
    description: {
      control: 'text',
      description: 'Description text',
    },
    defaultActiveTab: {
      control: 'select',
      options: ['communications', 'pricing', 'advertising'],
      description: 'Default active tab',
    },
  },
};

// Placeholder content for tabs
const PlaceholderContent = ({ label, color }) => (
  <div
    style={{
      width: '80%',
      height: '80%',
      background: `linear-gradient(135deg, ${color}22 0%, ${color}44 100%)`,
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `2px dashed ${color}`,
    }}
  >
    <span
      style={{
        fontFamily: 'var(--font-family-primary)',
        fontSize: '18px',
        fontWeight: 600,
        color: color,
      }}
    >
      {label} — интерактивная иллюстрация
    </span>
  </div>
);

// Tabs with placeholder content
const tabsWithContent = [
  {
    id: 'communications',
    label: 'Коммуникации',
    icon: tabCommunicationsIcon,
    description: 'Ответы на\u00A0отзывы, вопросы и\u00A0кросс-продажи с\u00A0глубокой аналитикой для\u00A0бизнеса',
    content: <PlaceholderContent label="Коммуникации" color="#c16ffb" />,
  },
  {
    id: 'pricing',
    label: 'Управление ценами',
    icon: tabPricingIcon,
    description: 'Автоматическое ценообразование на\u00A0основе анализа конкурентов и\u00A0спроса',
    content: <PlaceholderContent label="Управление ценами" color="#2fc774" />,
  },
  {
    id: 'advertising',
    label: 'Реклама',
    icon: tabAdvertisingIcon,
    description: 'Оптимизация рекламных кампаний с\u00A0максимальной отдачей от\u00A0бюджета',
    content: <PlaceholderContent label="Реклама" color="#ff8fda" />,
  },
];

/**
 * Default MainHero with placeholder content
 */
export const Default = {
  args: {
    tabs: tabsWithContent,
    defaultActiveTab: 'communications',
  },
};

/**
 * MainHero with Pricing tab active
 */
export const PricingActive = {
  args: {
    tabs: tabsWithContent,
    defaultActiveTab: 'pricing',
  },
};

/**
 * MainHero with Advertising tab active
 */
export const AdvertisingActive = {
  args: {
    tabs: tabsWithContent,
    defaultActiveTab: 'advertising',
  },
};

/**
 * MainHero with custom title and description
 */
export const CustomText = {
  args: {
    title: 'Умные инструменты для\u00A0вашего бизнеса',
    description: 'Полная автоматизация рутинных задач с\u00A0помощью искусственного интеллекта. Экономьте время и\u00A0увеличивайте прибыль.',
    tabs: tabsWithContent,
    defaultActiveTab: 'communications',
  },
};

/**
 * MainHero without content (empty tabs)
 */
export const EmptyContent = {
  args: {
    defaultActiveTab: 'communications',
  },
};

// Tabs with real HeroCommunications illustration
const tabsWithRealContent = [
  {
    id: 'communications',
    label: 'Коммуникации',
    icon: tabCommunicationsIcon,
    description: 'Ответы на\u00A0отзывы, вопросы и\u00A0кросс-продажи с\u00A0глубокой аналитикой для\u00A0бизнеса',
    content: <HeroCommunications onComplete={() => console.log('Communications complete!')} />,
  },
  {
    id: 'pricing',
    label: 'Управление ценами',
    icon: tabPricingIcon,
    description: 'Автоматическое ценообразование на\u00A0основе анализа конкурентов и\u00A0спроса',
    content: <PlaceholderContent label="Управление ценами" color="#2fc774" />,
  },
  {
    id: 'advertising',
    label: 'Реклама',
    icon: tabAdvertisingIcon,
    description: 'Оптимизация рекламных кампаний с\u00A0максимальной отдачей от\u00A0бюджета',
    content: <PlaceholderContent label="Реклама" color="#ff8fda" />,
  },
];

/**
 * MainHero with real Communications illustration
 */
export const WithCommunicationsIllustration = {
  args: {
    tabs: tabsWithRealContent,
    defaultActiveTab: 'communications',
  },
};
