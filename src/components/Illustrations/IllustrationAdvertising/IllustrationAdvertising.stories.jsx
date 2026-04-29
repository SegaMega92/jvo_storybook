import { IllustrationAdvertising } from './index';

export default {
  title: 'Illustrations/IllustrationAdvertising',
  component: IllustrationAdvertising,
  parameters: { layout: 'centered' },
};

export const Default = {
  decorators: [
    (Story) => (
      <div style={{
        width: 630, height: 630, borderRadius: 24, overflow: 'hidden',
        background: 'linear-gradient(135deg, #f7f0ff 0%, #ead7fe 30%, #c16ffb 70%, #ff8fda 100%)',
      }}>
        <Story />
      </div>
    ),
  ],
};
