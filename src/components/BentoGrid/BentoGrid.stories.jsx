import { BentoGrid } from './index';

export default {
  title: 'Sections/BentoGrid',
  component: BentoGrid,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: 'Bento-сетка 3×3 с фичами. Блоки разного размера, центральный блок с градиентом. Тёмный фон #300247.',
      },
    },
  },
  tags: ['autodocs'],
};

/**
 * Стандартный вид bento-сетки
 */
export const Default = {
  args: {},
};

/**
 * Мобильный вид — сетка перестраивается в 2 колонки
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
