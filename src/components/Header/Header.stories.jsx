import { Header } from './index';

export default {
  title: 'Sections/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: 'Фиксированная шапка сайта с навигацией, телефоном и кнопками входа/CTA. Адаптивная — на мобильном бургер-меню.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ minHeight: '200px', paddingTop: '100px' }}>
        <Story />
        <div style={{ padding: '24px', color: '#505050' }}>
          Контент страницы под шапкой...
        </div>
      </div>
    ),
  ],
};

export const CustomLinks = {
  args: {
    navItems: [
      {
        label: 'Продукты',
        href: '#',
        dropdown: [
          { label: 'Продукт 1', href: '#product1' },
          { label: 'Продукт 2', href: '#product2' },
        ],
      },
      {
        label: 'О компании',
        href: '#about',
      },
      {
        label: 'Контакты',
        href: '#contacts',
      },
    ],
    phone: '+7 800 555-35-35',
    ctaText: 'Начать',
    loginText: 'Кабинет',
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '200px', paddingTop: '100px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Mobile = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '400px', paddingTop: '80px' }}>
        <Story />
        <div style={{ padding: '16px', color: '#505050', fontSize: '14px' }}>
          На мобильном отображается бургер-меню. Нажмите на него, чтобы открыть навигацию.
        </div>
      </div>
    ),
  ],
};

export const Tablet = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '300px', paddingTop: '80px' }}>
        <Story />
      </div>
    ),
  ],
};
