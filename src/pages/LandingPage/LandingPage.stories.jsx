import { LandingPage } from './index';

export default {
  title: 'Pages/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Полная страница лендинга JVO. Включает все секции: Header, Hero, FeatureSliders, Monitoring, BentoGrid, Audience, Launch, Products, FAQ, Footer.',
      },
    },
  },
  tags: ['autodocs'],
};

/**
 * Полная страница лендинга
 */
export const Default = {
  args: {},
};

/**
 * Мобильный вид
 */
export const Mobile = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
};

/**
 * Планшетный вид
 */
export const Tablet = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};
