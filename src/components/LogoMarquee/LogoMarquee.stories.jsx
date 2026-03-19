import { LogoMarquee } from './index';

export default {
  title: 'Components/LogoMarquee',
  component: LogoMarquee,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Бегущая строка с логотипами партнёров/клиентов. Бесконечная анимация, настраиваемая скорость и направление.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ padding: '40px 0' }}>
        <Story />
      </div>
    ),
  ],
};

export const SlowSpeed = {
  args: {
    speed: 60,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '40px 0' }}>
        <Story />
      </div>
    ),
  ],
};

export const FastSpeed = {
  args: {
    speed: 15,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '40px 0' }}>
        <Story />
      </div>
    ),
  ],
};

export const ReverseDirection = {
  args: {
    direction: 'right',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '40px 0' }}>
        <Story />
      </div>
    ),
  ],
};
