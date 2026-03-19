import { Button } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: 'Основная кнопка. Поддерживает варианты primary, secondary, outline, ghost и три размера.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Primary = {
  args: {
    children: 'Оставить заявку',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary = {
  args: {
    children: 'Оставить заявку на демо',
    variant: 'secondary',
    size: 'large',
  },
};

export const Outline = {
  args: {
    children: 'Войти',
    variant: 'outline',
    size: 'medium',
  },
};

export const Small = {
  args: {
    children: 'Кнопка',
    variant: 'primary',
    size: 'small',
  },
};

export const Large = {
  args: {
    children: 'Оставить заявку на демо',
    variant: 'primary',
    size: 'large',
  },
};

export const Disabled = {
  args: {
    children: 'Недоступно',
    variant: 'primary',
    disabled: true,
  },
};

export const FullWidth = {
  args: {
    children: 'Оставить заявку',
    variant: 'primary',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AsLink = {
  args: {
    children: 'Перейти на страницу',
    variant: 'secondary',
    size: 'large',
    href: '#demo',
  },
};

export const PrimaryLink = {
  args: {
    children: 'Оставить заявку',
    variant: 'primary',
    size: 'medium',
    href: '#contact',
  },
};
