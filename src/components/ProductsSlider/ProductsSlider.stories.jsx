import { ProductsSlider } from './index';

export default {
  title: 'Sections/ProductsSlider',
  component: ProductsSlider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Горизонтальный слайдер продуктов JVO. Карточки с названием, описанием и бейджем "Скоро".',
      },
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
};

export const TwoProducts = {
  args: {
    products: [
      {
        id: 'pricing-agent',
        name: 'Агент ценообразования',
        description: 'Управление ценами на основе данных о воронке продаж, текущих остатках и динамике спроса',
        color: 'violet',
      },
      {
        id: 'reports-agent',
        name: 'Агент отчётов',
        description: 'Аналитика и отчёты по всем ключевым метрикам вашего бизнеса на маркетплейсах',
        color: 'gray',
      },
    ],
  },
};
