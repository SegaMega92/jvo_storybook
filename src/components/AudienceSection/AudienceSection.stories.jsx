import { AudienceSection } from './index';

export default {
  title: 'Sections/AudienceSection',
  component: AudienceSection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: 'Секция "Кому необходим Агент". Табы с аудиториями (поставщики, бренды, менеджеры), отзывы. На мобильном — навигация стрелками.',
      },
    },
  },
  tags: ['autodocs'],
};

/**
 * Стандартный вид с табами
 */
export const Default = {
  args: {},
};

/**
 * Мобильный вид — навигация стрелками вместо табов
 */
export const Mobile = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
};
