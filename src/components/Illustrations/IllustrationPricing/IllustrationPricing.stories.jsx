import { IllustrationPricing } from './index';

export default {
  title: 'Illustrations/IllustrationPricing',
  component: IllustrationPricing,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  decorators: [
    (Story) => (
      <div style={{
        width: 630,
        height: 630,
        borderRadius: 24,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f0fde0 0%, #d8f995 40%, #84e084 70%, #299e58 100%)',
      }}>
        <Story />
      </div>
    ),
  ],
};
