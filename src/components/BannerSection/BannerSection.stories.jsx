import { BannerSection } from './index';

export default {
  title: 'Sections/BannerSection',
  component: BannerSection,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'CTA-баннер с заголовком, подзаголовком и кнопкой. Градиентный фиолетовый фон.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
};

export const CustomText = {
  args: {
    title: 'Нужна помощь с выбором?',
    subtitle: 'Наши эксперты помогут подобрать оптимальное решение',
    buttonText: 'Связаться с нами',
  },
};

export const WithLink = {
  args: {
    buttonHref: 'https://jvo.ru/consultation',
  },
};
