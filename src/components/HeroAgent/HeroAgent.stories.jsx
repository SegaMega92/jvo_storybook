import { HeroAgent } from './index';

export default {
  title: 'Sections/HeroAgent',
  component: HeroAgent,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component:
          'Hero-секция с ИИ-агентом. Заголовок, подзаголовок, CTA-кнопка и контейнер для анимированной иллюстрации с градиентным фоном.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    badgeText: { control: 'text' },
    buttonText: { control: 'text' },
    buttonHref: { control: 'text' },
    showBadge: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    title: 'ИИ-агенты для победы\nна маркетплейсах',
    subtitle:
      'Находим утечки и точки роста, превращаем их в задачи и выполняем автоматически с помощью ИИ-агентов — 24/7.',
    badgeText: 'Решение № 1 для управления бизнесом в е-commerce *',
    buttonText: 'Получить демо',
    buttonHref: '#form',
    showBadge: true,
  },
};

export const WithPlaceholder = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <HeroAgent {...args}>
      <div
        style={{
          width: 672,
          maxWidth: '100%',
          padding: 36,
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 24,
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          color: '#999',
          fontFamily: 'var(--font-family-primary)',
        }}
      >
        Иллюстрация будет здесь
      </div>
    </HeroAgent>
  ),
};

export const WithoutBadge = {
  args: {
    ...Default.args,
    showBadge: false,
  },
};

export const Mobile = {
  args: Default.args,
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
};

export const Tablet = {
  args: Default.args,
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};
