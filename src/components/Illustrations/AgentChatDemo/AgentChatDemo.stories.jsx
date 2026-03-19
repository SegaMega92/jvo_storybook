import { AgentChatDemo } from './index';

export default {
  title: 'Illustrations/AgentChatDemo',
  component: AgentChatDemo,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: 'Интерактивная демонстрация чата с AI-агентом. Показывает процесс ввода сообщения и ответа агента.',
      },
    },
  },
  tags: ['autodocs'],
};

/**
 * Интерактивный режим — кликните на кнопку для запуска анимации
 */
export const Interactive = {
  args: {
    autoPlay: false,
  },
};

/**
 * Автоматический режим — анимация запускается автоматически
 */
export const AutoPlay = {
  args: {
    autoPlay: true,
  },
};
