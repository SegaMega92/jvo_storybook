import { PricingPage } from './index';

export default {
  title: 'Pages/Pricing',
  component: PricingPage,
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
