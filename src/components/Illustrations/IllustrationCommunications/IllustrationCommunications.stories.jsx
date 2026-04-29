import { IllustrationCommunications } from './index';

export default {
  title: 'Illustrations/IllustrationCommunications',
  component: IllustrationCommunications,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '3-шаговая анимированная иллюстрация для ИИ-агента Коммуникаций',
      },
    },
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
        width: 375,
        height: 375,
        borderRadius: 16,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #fff 0%, #f7f0ff 30%, #ead7fe 70%, #ffdbf1 100%)',
      }}>
        <Story />
      </div>
    ),
  ],
};
