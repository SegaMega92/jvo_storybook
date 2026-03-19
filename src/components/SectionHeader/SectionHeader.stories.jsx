import { SectionHeader } from './index';
import tagIconAgent from '../../assets/icons/tag-agent.svg';

export default {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Заголовок секции. Поддерживает тег с иконкой, заголовок (h1/h2/h3), подзаголовок, кнопку и кастомный контент.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3'],
    },
    buttonVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    centered: {
      control: 'boolean',
    },
  },
};

// Агент коммуникаций - как в макете
export const Default = {
  args: {
    tag: 'Агент коммуникаций',
    tagIcon: tagIconAgent,
    title: 'Ответы на отзывы, вопросы и кросс-продажи',
    subtitle: 'Автоматизируйте общение с покупателями, превращайте отзывы в повторные продажи и получайте готовую аналитику для бизнеса',
  },
};

// Без иконки в теге
export const WithoutIcon = {
  args: {
    tag: 'Новая функция',
    title: 'Автоматизируйте продажи в социальных сетях',
    subtitle: 'Превращайте комментарии и сообщения в продажи с помощью умных автоответов и персонализированных воронок.',
  },
};

// С кнопкой
export const WithButton = {
  args: {
    tag: 'Начните сегодня',
    title: 'Готовы увеличить продажи?',
    subtitle: 'Присоединяйтесь к тысячам компаний, которые уже используют JVO для автоматизации продаж.',
    buttonText: 'Попробовать бесплатно',
    buttonHref: '#demo',
    buttonVariant: 'primary',
  },
};

// Без тега
export const WithoutTag = {
  args: {
    title: 'Почему выбирают JVO?',
    subtitle: 'Простая интеграция, мощные инструменты и результаты с первого дня.',
  },
};

// H2 заголовок (для вложенных секций)
export const AsH2 = {
  args: {
    tag: 'Возможности',
    title: 'Всё что нужно для роста',
    subtitle: 'Полный набор инструментов для автоматизации маркетинга и продаж в социальных сетях.',
    as: 'h2',
  },
};

// Не центрированный
export const LeftAligned = {
  args: {
    tag: 'Кейс',
    title: 'Как магазин одежды увеличил продажи на 340%',
    subtitle: 'История успеха нашего клиента и пошаговый разбор стратегии.',
    centered: false,
  },
};

// С кастомным контентом в слоте
export const WithCustomContent = {
  args: {
    tag: 'Интеграции',
    title: 'Работает с вашими любимыми инструментами',
    subtitle: 'Подключите JVO к CRM, мессенджерам и другим сервисам за пару кликов.',
  },
  render: (args) => (
    <SectionHeader {...args}>
      <div style={{
        display: 'flex',
        gap: '24px',
        justifyContent: 'center',
        marginTop: '16px',
        flexWrap: 'wrap'
      }}>
        {['Instagram', 'Telegram', 'WhatsApp', 'VK'].map((name) => (
          <div
            key={name}
            style={{
              padding: '12px 24px',
              background: '#f3f4f6',
              borderRadius: '8px',
              fontFamily: 'var(--font-family-primary)',
              fontSize: '14px',
              fontWeight: 500,
              color: '#6b7280',
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </SectionHeader>
  ),
};

// Темная тема (через className)
export const DarkTheme = {
  args: {
    tag: 'Premium',
    title: 'Эксклюзивные возможности',
    subtitle: 'Получите доступ к продвинутым инструментам аналитики и автоматизации.',
    buttonText: 'Узнать больше',
    buttonHref: '#premium',
    buttonVariant: 'outline',
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#300247' }}>
        <style>{`
          .dark-section { background: transparent !important; }
          .dark-section h1, .dark-section h2, .dark-section h3 { color: #ffffff !important; }
          .dark-section p { color: rgba(255, 255, 255, 0.8) !important; }
        `}</style>
        <div className="dark-section">
          <Story />
        </div>
      </div>
    ),
  ],
};
