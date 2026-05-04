import { ProductsSection } from './index';

export default {
  title: 'Sections/ProductsSection',
  component: ProductsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Секция с двумя карточками продуктов (SEO Pro и Планировщик поставок). Градиентные фоны, shimmer-анимация при наведении.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
};

export const CustomTitle = {
  args: {
    title: 'Наши продукты',
    subtitle: 'Выберите подходящий модуль для вашего бизнеса.',
  },
};
