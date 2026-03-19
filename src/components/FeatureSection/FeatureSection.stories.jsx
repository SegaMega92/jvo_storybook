import { FeatureSection } from './index';
import featurePricingBg from '../../assets/features/feature-pricing-bg.png';

export default {
  title: 'Sections/FeatureSection',
  component: FeatureSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Секция с описанием фичи. Два колонки: текст с буллетами и медиа (видео или изображение). Поддерживает reversed layout.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    bullets: { control: 'object' },
    buttonText: { control: 'text' },
    reversed: { control: 'boolean' },
    video: { control: 'text' },
  },
};

// Default - с видео
export const Default = {
  args: {
    title: 'Автоматическое заполнение карточек',
    description: 'Загрузите изображения или артикулы конкурентов — JVO Агент сам заполнит все поля карточки на основе лучших практик.',
    bullets: [
      'Анализ конкурентов и автозаполнение',
      'SEO-оптимизация описаний',
      'Генерация продающих текстов',
    ],
    video: 'https://kinescope.io/fiCG9ns1ZgH9jMX5gGEvgm',
    buttonText: 'Попробовать',
    buttonHref: '#demo',
    reversed: false,
  },
};

// С картинкой
export const WithImage = {
  args: {
    title: 'Умное управление ценами',
    description: 'Агент управляет ценами опираясь на события — удерживает маржу, разгоняет продажи и предотвращает Out-of-stock.',
    bullets: [
      'Прямая интеграция с API Wildberries и Ozon',
      'Анализ 20+ параметров: спрос, остатки, оборачиваемость, рейтинг, отзывы, конверсия в корзину и другие',
      'Изменение цен по расписанию, вы можете подтвердить изменения или доверить их Агенту',
    ],
    image: featurePricingBg,
    imageAlt: 'Умное управление ценами',
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    reversed: false,
  },
};

// Reversed layout
export const Reversed = {
  args: {
    ...Default.args,
    reversed: true,
  },
};

// With Image Reversed
export const WithImageReversed = {
  args: {
    ...WithImage.args,
    reversed: true,
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
