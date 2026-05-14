import { AdAgentPage } from './index';

export default {
  title: 'Pages/AdAgent',
  component: AdAgentPage,
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
