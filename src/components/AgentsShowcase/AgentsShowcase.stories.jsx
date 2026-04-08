import { AgentsShowcase } from './index';

export default {
  title: 'Sections/AgentsShowcase',
  component: AgentsShowcase,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    title: 'Для каждого процесса свой инструмент',
  },
};

export const CustomTitle = {
  args: {
    title: 'Наши ИИ-агенты для маркетплейсов',
  },
};

// Story with scroll simulation hint
export const ScrollDemo = {
  args: {
    title: 'Для каждого процесса свой инструмент',
  },
  parameters: {
    docs: {
      description: {
        story: 'На десктопе секция "залипает" при скролле. Прокрутите страницу вниз, чтобы увидеть смену слайдов.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <div style={{ height: '50vh', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>Прокрутите вниз...</p>
        </div>
        <Story />
        <div style={{ height: '100vh', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>Контент после секции</p>
        </div>
      </div>
    ),
  ],
};
