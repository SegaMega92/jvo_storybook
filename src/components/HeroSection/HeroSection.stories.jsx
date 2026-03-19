import { HeroSection } from './index';

export default {
  title: 'Sections/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: 'Главный экран лендинга с заголовком, подзаголовком, CTA-кнопкой и декоративными элементами (aurora, badge, interface preview).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    buttonText: { control: 'text' },
    showBadge: { control: 'boolean' },
    showInterface: { control: 'boolean' },
    showAurora: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    title: 'Продажи на маркетплейсах под контролем. Всегда.',
    subtitle: 'JVO Агент — ваш персональный AI-менеджер, который управляет ценами, отзывами, отвечает на вопросы и анализирует данные. Работает 24/7, не ошибается и не устаёт. Формирует стратегии сам — исходя из заданных вами правил.',
    buttonText: 'Оставить заявку на демо',
    buttonHref: '#demo',
    showBadge: true,
    showInterface: true,
    showAurora: true,
  },
};

export const WithoutAurora = {
  args: {
    ...Default.args,
    showAurora: false,
  },
};

export const WithoutInterface = {
  args: {
    ...Default.args,
    showInterface: false,
  },
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
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const Tablet = {
  args: Default.args,
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop = {
  args: Default.args,
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
