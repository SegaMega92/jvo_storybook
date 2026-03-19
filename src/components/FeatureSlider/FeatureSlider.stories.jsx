import { FeatureSlider } from './index';

export default {
  title: 'Sections/FeatureSlider',
  component: FeatureSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Слайдер с фичами на тёмном фоне. Автопрокрутка, кнопки навигации, прогресс-бар. Используется для демонстрации возможностей агента.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    autoplayInterval: {
      control: { type: 'number', min: 1000, max: 15000, step: 500 },
      description: 'Интервал автопрокрутки в миллисекундах',
    },
  },
};

// Пример иллюстрации - карточка отзыва (упрощенная версия)
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
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div>
            <p style={{ margin: 0, fontWeight: 700, fontSize: '12px', color: '#15181f' }}>
              Покупатель
            </p>
            <p style={{ margin: '4px 0 0', fontSize: '9px', color: 'rgba(21,24,31,0.4)' }}>
              Выкупили · Шуруповерт · v21M4
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#ffc107', fontSize: '14px' }}>★★★★★</div>
            <p style={{ margin: '4px 0 0', fontSize: '9px', color: 'rgba(21,24,31,0.4)' }}>
              Сегодня в 14:56
            </p>
          </div>
        </div>

        <div style={{ fontSize: '12px', color: '#15181f', lineHeight: 1.4 }}>
          <p style={{ margin: '0 0 8px' }}>
            <span style={{ color: 'rgba(21,24,31,0.4)' }}>Недостатки:</span> нет
          </p>
          <p style={{ margin: 0 }}>
            <span style={{ color: 'rgba(21,24,31,0.4)' }}>Комментарий:</span> Шуруповёрт ТОП, ремонт
            квартиры ускорился в разы
          </p>
        </div>

        <div
          style={{
            marginTop: '12px',
            background: '#f6f6f9',
            borderRadius: '9px',
            padding: '12px',
            fontSize: '12px',
          }}
        >
          <p style={{ margin: '0 0 8px', color: 'rgba(21,24,31,0.4)', fontWeight: 600 }}>
            ↪ Ответ продавца
          </p>
          <p style={{ margin: 0, color: '#15181f', lineHeight: 1.4 }}>
            Здравствуйте! Рады, что вам понравился шуруповёрт! Спасибо за отзыв.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Пример иллюстрации 2
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
    <h3 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: 700 }}>Аналитика ответов</h3>
    <div style={{ display: 'flex', gap: '16px' }}>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '32px', fontWeight: 700, color: '#c16ffb' }}>98%</p>
        <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#666' }}>Точность</p>
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '32px', fontWeight: 700, color: '#c16ffb' }}>2.5с</p>
        <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#666' }}>Время ответа</p>
      </div>
    </div>
  </div>
);

// Пример иллюстрации 3
const ChatCard = () => (
  <div
    style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '20px',
      width: '380px',
      maxWidth: '90%',
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      fontFamily: 'Manrope, sans-serif',
    }}
  >
    <div
      style={{ background: '#f0f0f0', borderRadius: '8px', padding: '12px', marginBottom: '12px' }}
    >
      <p style={{ margin: 0, fontSize: '14px' }}>Какая мощность у этого шуруповёрта?</p>
    </div>
    <div
      style={{
        background: '#c16ffb',
        borderRadius: '8px',
        padding: '12px',
        marginLeft: '40px',
        color: '#fff',
      }}
    >
      <p style={{ margin: 0, fontSize: '14px' }}>
        Мощность составляет 21В, что достаточно для большинства бытовых задач.
      </p>
    </div>
  </div>
);

// URL градиента
const GRADIENT_VIOLET = 'https://storage.yandexcloud.net/jvo-files/jvo-site/gradient_violet_1.svg';

const slides = [
  {
    title: 'Работа с тональностью',
    description:
      'Распознаёт контекст и специфику обращений, подбирая точную реакцию без использования универсальных фраз',
    media: <ReviewCard />,
    background: GRADIENT_VIOLET,
  },
  {
    title: 'Мгновенные ответы',
    description: 'Автоматически отвечает на вопросы покупателей за секунды, а не часы',
    media: <ChatCard />,
    background: GRADIENT_VIOLET,
  },
  {
    title: 'Аналитика и отчёты',
    description: 'Отслеживайте эффективность ответов и улучшайте коммуникацию с клиентами',
    media: <AnalyticsCard />,
    background: GRADIENT_VIOLET,
  },
];

export const Default = {
  args: {
    sectionTitle: 'Автоответы на вопросы и отзывы на маркетплейсах',
    sectionDescription:
      'Агент обеспечивает экспертную коммуникацию на основе полных технических данных о товаре',
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    slides: slides,
    autoplayInterval: 6000,
  },
};

export const SingleSlide = {
  args: {
    sectionTitle: 'Автоответы на отзывы',
    sectionDescription: 'Экспертная коммуникация с покупателями',
    buttonText: 'Попробовать',
    buttonHref: '#try',
    slides: [slides[0]],
    autoplayInterval: 6000,
  },
};

export const FastAutoplay = {
  args: {
    ...Default.args,
    autoplayInterval: 3000,
  },
};

export const SlowAutoplay = {
  args: {
    ...Default.args,
    autoplayInterval: 10000,
  },
};
