import { IllustrationHero } from './index';

export default {
  title: 'Illustrations/IllustrationHero',
  component: IllustrationHero,
  parameters: { layout: 'centered' },
};

export const Default = {
  decorators: [
    (Story) => (
      <div style={{
        width: 960,
        height: 540,
        borderRadius: 24,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #fff 0%, #f7f0ff 30%, #ead7fe 70%, #ffdbf1 100%)',
      }}>
        <Story />
      </div>
    ),
  ],
};

export const Small = {
  decorators: [
    (Story) => (
      <div style={{
        width: 600,
        height: 340,
        borderRadius: 16,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #fff 0%, #f7f0ff 30%, #ead7fe 70%, #ffdbf1 100%)',
      }}>
        <Story />
      </div>
    ),
  ],
};
