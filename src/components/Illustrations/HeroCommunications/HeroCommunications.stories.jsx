import { HeroCommunications } from './index';

export default {
  title: 'Illustrations/HeroCommunications',
  component: HeroCommunications,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(195deg, #ffffff 3%, #fcdaf9 45%, #e2bbff 83%)',
        },
      ],
    },
  },
};

/**
 * Default state
 */
export const Default = {
  args: {
    onComplete: () => console.log('Slider completed!'),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '960px',
          height: '466px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

/**
 * Tablet size
 */
export const Tablet = {
  args: {
    onComplete: () => console.log('Slider completed!'),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '700px',
          height: '400px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

/**
 * Mobile size
 */
export const Mobile = {
  args: {
    onComplete: () => console.log('Slider completed!'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobileM',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100%',
          minHeight: '440px',
          position: 'relative',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
