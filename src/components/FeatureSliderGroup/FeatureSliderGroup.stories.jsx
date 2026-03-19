import { FeatureSliderGroup } from './index';

export default {
  title: 'Sections/FeatureSliderGroup',
  component: FeatureSliderGroup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Группа слайдеров с pinned-навигацией. Табы переключают между секциями, каждая секция — отдельный FeatureSlider.',
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
