import { AgentsShowcaseV2 } from './index';

export default {
  title: 'Sections/AgentsShowcaseV2',
  component: AgentsShowcaseV2,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Scroll-driven витрина ИИ-агентов v2. Карточки с текстом слева и иллюстрацией справа, переключение по скроллу или табам.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
};

export const Mobile = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
};

export const Tablet = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};
