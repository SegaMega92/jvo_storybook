import { MainPage } from './index';

export default {
  title: 'Pages/Новая главная',
  component: MainPage,
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
};
