import { LaunchSection } from './index';

export default {
  title: 'Sections/LaunchSection',
  component: LaunchSection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: 'Секция "Запуск и внедрение системы Дживио". 4 карточки с иллюстрациями и градиентами, точечный паттерн.',
      },
    },
  },
  tags: ['autodocs'],
};

/**
 * Стандартный вид с 4 карточками
 */
export const Default = {
  args: {},
};

/**
 * Мобильный вид — карточки в колонку
 */
export const Mobile = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
};
