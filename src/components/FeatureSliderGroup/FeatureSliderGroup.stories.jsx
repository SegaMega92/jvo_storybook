import { FeatureSliderGroup } from './index';

export default {
  title: 'Sections/FeatureSliderGroup',
  component: FeatureSliderGroup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Группа слайдеров с двумя вариантами отображения:
- **v1 (default)**: pinned-навигация с табами-точками, секции переключаются скроллом
- **v2**: аккордеон с фичами слева и изображением справа, переключение по клику`,
      },
    },
  },
  tags: ['autodocs'],
};

// URL градиента
const GRADIENT_VIOLET = 'https://storage.yandexcloud.net/jvo-files/jvo-site/gradient_violet_1.svg';

// Пример карточки отзыва
const ReviewCard = () => (
  <div
    style={{
      background: '#ffffff',
      borderRadius: '9px',
      padding: '15px 22px 15px 15px',
      width: '450px',
      maxWidth: '90%',
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      fontFamily: 'Manrope, sans-serif',
    }}
  >
    <div style={{ display: 'flex', gap: '9px' }}>
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div>
            <p style={{ margin: 0, fontWeight: 700, fontSize: '12px', color: '#15181f' }}>
              Покупатель
            </p>
            <p style={{ margin: '4px 0 0', fontSize: '9px', color: 'rgba(21,24,31,0.4)' }}>
              Выкупили · Шуруповерт
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#ffc107', fontSize: '14px' }}>★★★★★</div>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: '12px', color: '#15181f' }}>
          Шуруповёрт ТОП, ремонт квартиры ускорился в разы!
        </p>
      </div>
    </div>
  </div>
);

// Пример карточки аналитики
const AnalyticsCard = () => (
  <div
    style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      width: '400px',
      maxWidth: '90%',
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      fontFamily: 'Manrope, sans-serif',
    }}
  >
    <h3 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: 700 }}>Аналитика</h3>
    <div style={{ display: 'flex', gap: '16px' }}>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '32px', fontWeight: 700, color: '#c16ffb' }}>98%</p>
        <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#666' }}>Точность</p>
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '32px', fontWeight: 700, color: '#c16ffb' }}>2.5с</p>
        <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#666' }}>Время</p>
      </div>
    </div>
  </div>
);

// Пример карточки интеграции
const IntegrationCard = () => (
  <div
    style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      width: '350px',
      maxWidth: '90%',
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      fontFamily: 'Manrope, sans-serif',
      textAlign: 'center',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
      <div style={{ width: '48px', height: '48px', background: '#7B1FA2', borderRadius: '12px' }} />
      <div style={{ width: '48px', height: '48px', background: '#512DA8', borderRadius: '12px' }} />
      <div style={{ width: '48px', height: '48px', background: '#303F9F', borderRadius: '12px' }} />
    </div>
    <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Ozon · Wildberries · Яндекс.Маркет</p>
  </div>
);

// Секции для примера
const sections = [
  {
    tabTitle: 'Автоответы',
    sectionTitle: 'Автоответы на вопросы и отзывы',
    sectionDescription: 'Агент обеспечивает экспертную коммуникацию на основе данных о товаре',
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    slides: [
      {
        title: 'Работа с тональностью',
        description: 'Распознаёт контекст и подбирает точную реакцию',
        media: <ReviewCard />,
        background: GRADIENT_VIOLET,
      },
      {
        title: 'Быстрые ответы',
        description: 'Отвечает за секунды, а не часы',
        media: <ReviewCard />,
        background: GRADIENT_VIOLET,
      },
    ],
  },
  {
    tabTitle: 'Аналитика',
    sectionTitle: 'Аналитика и отчёты',
    sectionDescription: 'Отслеживайте эффективность и улучшайте коммуникацию',
    buttonText: 'Попробовать',
    buttonHref: '#try',
    slides: [
      {
        title: 'Детальная статистика',
        description: 'Все метрики в одном месте',
        media: <AnalyticsCard />,
        background: GRADIENT_VIOLET,
      },
    ],
  },
  {
    tabTitle: 'Интеграции',
    sectionTitle: 'Интеграции с маркетплейсами',
    sectionDescription: 'Подключайте все площадки в один клик',
    buttonText: 'Подключить',
    buttonHref: '#connect',
    slides: [
      {
        title: 'Все маркетплейсы',
        description: 'Ozon, Wildberries, Яндекс.Маркет и другие',
        media: <IntegrationCard />,
        background: GRADIENT_VIOLET,
      },
    ],
  },
];

// Одна секция — без табов
export const SingleSection = {
  args: {
    sections: [sections[0]],
    autoplayInterval: 6000,
  },
};

// Несколько секций — с табами
export const MultipleSections = {
  args: {
    sections: sections,
    autoplayInterval: 6000,
  },
};

// Две секции
export const TwoSections = {
  args: {
    sections: [sections[0], sections[1]],
    autoplayInterval: 6000,
  },
};

// ========================================
// V2 - Аккордеон версия
// ========================================

// Иконки для фич (inline SVG)
const IconCharts = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="12" width="4" height="9" rx="1" fill="currentColor" />
    <rect x="10" y="8" width="4" height="13" rx="1" fill="currentColor" />
    <rect x="17" y="3" width="4" height="18" rx="1" fill="currentColor" />
  </svg>
);

const IconSearch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconSettings = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M12 2v2M12 20v2M22 12h-2M4 12H2M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41M19.07 19.07l-1.41-1.41M6.34 6.34L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Изображение кросс-продаж
import crossSellImage from '../../assets/pricing-agent/cross-sell-card.png';

// Placeholder изображение для примера
const PLACEHOLDER_IMAGE = 'https://storage.yandexcloud.net/jvo-files/jvo-site/gradient_violet_1.svg';

// Фичи для v2 примера
const v2Features = [
  {
    icon: <IconCharts />,
    title: 'Рекомендация до 5 артикулов',
    description: 'Агент анализирует покупку, контекст отзыва и предлагает дополняющие товары, которые действительно интересны покупателю.',
    image: crossSellImage,
  },
  {
    icon: <IconSearch />,
    title: 'Проверка остатков',
    description: 'Автоматическая проверка наличия товара на складе перед рекомендацией. Не предлагаем то, чего нет в наличии.',
    image: crossSellImage,
  },
  {
    icon: <IconSettings />,
    title: 'Настройка сценариев',
    description: 'Гибкая настройка правил кросс-продаж: категории, ценовые диапазоны, исключения и приоритеты.',
    image: crossSellImage,
  },
];

// V2 - Базовый пример
export const V2Basic = {
  args: {
    variant: 'v2',
    title: 'Умные\nкросс-продажи',
    description: 'Автоматические рекомендации релевантных товаров в ответах с учётом остатков на складах',
    buttonText: 'Оставить заявку',
    buttonHref: '#form',
    features: v2Features,
    defaultFeatureIndex: 0,
    autoplayInterval: 8000,
  },
};

// V2 - С другой активной фичей
export const V2SecondActive = {
  args: {
    variant: 'v2',
    title: 'Умные\nкросс-продажи',
    description: 'Автоматические рекомендации релевантных товаров в ответах с учётом остатков на складах',
    buttonText: 'Оставить заявку',
    buttonHref: '#form',
    features: v2Features,
    defaultFeatureIndex: 1,
    autoplayInterval: 8000,
  },
};

// V2 - Быстрый autoplay для демо
export const V2FastAutoplay = {
  args: {
    variant: 'v2',
    title: 'Умные\nкросс-продажи',
    description: 'Автоматические рекомендации релевантных товаров в ответах с учётом остатков на складах',
    buttonText: 'Оставить заявку',
    buttonHref: '#form',
    features: v2Features,
    autoplayInterval: 3000, // 3 сек для демо
  },
};

// ========================================
// V2 - Несколько секций
// ========================================

// Иконки для второй секции
const IconMessage = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Секции для примера с несколькими секциями
const v2MultipleSections = [
  {
    title: 'Умные\nкросс-продажи',
    description: 'Автоматические рекомендации релевантных товаров в ответах с учётом остатков на складах',
    buttonText: 'Оставить заявку',
    buttonHref: '#form',
    features: [
      {
        icon: <IconCharts />,
        title: 'Рекомендация до 5 артикулов',
        description: 'Агент анализирует покупку и предлагает дополняющие товары.',
        image: crossSellImage,
      },
      {
        icon: <IconSearch />,
        title: 'Проверка остатков',
        description: 'Автоматическая проверка наличия товара на складе.',
        image: crossSellImage,
      },
      {
        icon: <IconSettings />,
        title: 'Настройка сценариев',
        description: 'Гибкая настройка правил кросс-продаж.',
        image: crossSellImage,
      },
    ],
  },
  {
    title: 'Автоответы\nна отзывы',
    description: 'Мгновенные персонализированные ответы на отзывы покупателей 24/7',
    buttonText: 'Попробовать',
    buttonHref: '#demo',
    features: [
      {
        icon: <IconMessage />,
        title: 'Анализ тональности',
        description: 'Определяем настроение отзыва и подбираем правильный тон ответа.',
        image: crossSellImage,
      },
      {
        icon: <IconStar />,
        title: 'Работа с негативом',
        description: 'Превращаем негативные отзывы в возможность улучшить репутацию.',
        image: crossSellImage,
      },
    ],
  },
  {
    title: 'Защита\nот фрода',
    description: 'Автоматическое выявление подозрительных заказов и возвратов',
    buttonText: 'Узнать больше',
    buttonHref: '#fraud',
    features: [
      {
        icon: <IconShield />,
        title: 'ML-алгоритмы',
        description: 'Машинное обучение выявляет паттерны мошенничества.',
        image: crossSellImage,
      },
      {
        icon: <IconSearch />,
        title: 'Проверка покупателей',
        description: 'Автоматическая проверка истории покупателя.',
        image: crossSellImage,
      },
    ],
  },
];

// V2 - Несколько секций с точками
export const V2MultipleSections = {
  args: {
    variant: 'v2',
    sections: v2MultipleSections,
    autoplayInterval: 5000,
  },
};

// V2 - Две секции
export const V2TwoSections = {
  args: {
    variant: 'v2',
    sections: v2MultipleSections.slice(0, 2),
    autoplayInterval: 6000,
  },
};
