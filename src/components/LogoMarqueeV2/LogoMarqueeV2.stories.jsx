import { LogoMarqueeV2 } from './index';

export default {
  title: 'Components/LogoMarqueeV2',
  component: LogoMarqueeV2,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['fixed', 'fluid', 'centered'],
    },
    speed: {
      control: { type: 'range', min: 5, max: 60, step: 5 },
    },
  },
};

export const Fluid = {
  args: {
    title: 'Нам доверяют',
    variant: 'fluid',
    speed: 20,
  },
};

export const Fixed = {
  args: {
    title: 'Нам доверяют',
    variant: 'fixed',
    speed: 20,
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#f5f5f5', padding: '40px 20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SlowSpeed = {
  args: {
    title: 'Наши клиенты',
    variant: 'fluid',
    speed: 40,
  },
};

export const FastSpeed = {
  args: {
    title: 'Партнёры',
    variant: 'fluid',
    speed: 10,
  },
};

export const Centered = {
  args: {
    title: 'Используется ведущими брендами',
    variant: 'centered',
    speed: 120,
  },
};
