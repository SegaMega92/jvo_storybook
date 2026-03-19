import { AgentWorkflowDemo } from './index';

export default {
  title: 'Illustrations/AgentWorkflowDemo',
  component: AgentWorkflowDemo,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: 'Интерактивная демонстрация рабочего процесса агента. Показывает автоматизацию задачи с эффектом печатания.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{
        width: '420px',
        height: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: '19px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(253, 224, 255, 0.5) 0%, rgba(234, 215, 254, 0.5) 100%)',
      }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    typingSpeed: {
      control: { type: 'range', min: 10, max: 100, step: 5 },
      description: 'Скорость печатания (мс между символами)',
    },
    onStart: { action: 'started' },
    onComplete: { action: 'completed' },
    onReset: { action: 'reset' },
  },
};

/**
 * Стандартная скорость печатания (25мс)
 * Нажмите "Автоматизировать" для запуска анимации
 */
export const Default = {
  args: {
    typingSpeed: 25,
  },
};

/**
 * Медленная скорость печатания (60мс)
 */
export const SlowTyping = {
  args: {
    typingSpeed: 60,
  },
};

/**
 * Быстрая скорость печатания (15мс)
 */
export const FastTyping = {
  args: {
    typingSpeed: 15,
  },
};
