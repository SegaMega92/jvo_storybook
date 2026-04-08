import { HomePage } from './index';

export default {
  title: 'Pages/Главная страница',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {},
};

export const Embedded = {
  args: {
    embedded: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Версия без Header для встраивания в другие контексты',
      },
    },
  },
};
