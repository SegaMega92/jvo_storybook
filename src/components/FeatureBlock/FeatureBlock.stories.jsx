import { FeatureBlock } from './index';

export default {
  title: 'Sections/FeatureBlock',
  component: FeatureBlock,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Секция с тремя блоками: иконка + заголовок + описание + иллюстрация. Чередующийся лейаут.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
};
