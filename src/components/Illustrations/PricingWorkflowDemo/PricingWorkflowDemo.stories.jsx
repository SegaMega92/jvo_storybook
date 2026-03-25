import { PricingWorkflowDemo } from './index';

export default {
  title: 'Illustrations/PricingWorkflowDemo',
  component: PricingWorkflowDemo,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'violet-light' },
    docs: {
      description: {
        component: 'Интерактивная иллюстрация для Агента ценообразования. Показывает процесс автоматизации: клик на кнопку → печатающийся текст → пошаговый алгоритм репрайсинга.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    typingSpeed: {
      control: { type: 'range', min: 10, max: 100, step: 5 },
      description: 'Скорость печати текста (мс на символ)',
    },
    stepDelay: {
      control: { type: 'range', min: 100, max: 1000, step: 50 },
      description: 'Задержка между появлением шагов (мс)',
    },
  },
};

/**
 * Стандартный вид — кликните "Автоматизировать" для запуска
 */
export const Default = {
  args: {
    typingSpeed: 25,
    stepDelay: 400,
  },
  decorators: [
    (Story) => (
      <div style={{
        width: '400px',
        height: '400px',
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(255, 143, 218, 0.3) 0%, rgba(231, 161, 253, 0.2) 50%, rgba(246, 243, 254, 1) 100%)',
        borderRadius: '16px',
      }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Быстрая анимация — для тестирования
 */
export const Fast = {
  args: {
    typingSpeed: 10,
    stepDelay: 150,
  },
  decorators: [
    (Story) => (
      <div style={{
        width: '400px',
        height: '400px',
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(255, 143, 218, 0.3) 0%, rgba(231, 161, 253, 0.2) 50%, rgba(246, 243, 254, 1) 100%)',
        borderRadius: '16px',
      }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Медленная анимация — для демонстрации
 */
export const Slow = {
  args: {
    typingSpeed: 50,
    stepDelay: 800,
  },
  decorators: [
    (Story) => (
      <div style={{
        width: '400px',
        height: '400px',
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(255, 143, 218, 0.3) 0%, rgba(231, 161, 253, 0.2) 50%, rgba(246, 243, 254, 1) 100%)',
        borderRadius: '16px',
      }}>
        <Story />
      </div>
    ),
  ],
};
