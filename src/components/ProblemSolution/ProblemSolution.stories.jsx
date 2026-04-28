import { ProblemSolution } from './index';

export default {
  title: 'Sections/ProblemSolution',
  component: ProblemSolution,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Двухсостояная секция «Проблема → Решение». Тёмный фон с авто-каруселью бизнес-проблем, переключается на светлый с решениями через toggle или скролл.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
  decorators: [
    (Story) => (
      <div>
        <div style={{ height: '100vh', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: 24, color: '#999' }}>Скролл вниз ↓</p>
        </div>
        <Story />
        <div style={{ height: '100vh', background: '#f5f5f5' }} />
      </div>
    ),
  ],
};
