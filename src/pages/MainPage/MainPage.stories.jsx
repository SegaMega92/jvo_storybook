import { MainPage } from './index';

export default {
  title: 'Pages/Главная Дживио v4',
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

export const MainOnly = {
  args: {
    embedded: true,
    section: 'main',
  },
};

export const FAQOnly = {
  args: {
    embedded: true,
    section: 'faq',
  },
};
