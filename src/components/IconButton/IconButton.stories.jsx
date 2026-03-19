import { IconButton } from './index';
import chevronRight from '../../assets/icons/chevron-right.svg';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Кнопка с иконкой. Варианты: default, primary, ghost. Размеры: small, medium, large.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

// Стрелка вправо - default
export const ChevronRight = {
  args: {
    icon: chevronRight,
    ariaLabel: 'Следующий',
    variant: 'default',
    size: 'medium',
  },
};

// Primary вариант
export const Primary = {
  args: {
    icon: chevronRight,
    ariaLabel: 'Следующий',
    variant: 'primary',
    size: 'medium',
  },
};

// Ghost вариант
export const Ghost = {
  args: {
    icon: chevronRight,
    ariaLabel: 'Следующий',
    variant: 'ghost',
    size: 'medium',
  },
};

// Большой размер
export const Large = {
  args: {
    icon: chevronRight,
    ariaLabel: 'Следующий',
    variant: 'default',
    size: 'large',
  },
};

// Маленький размер
export const Small = {
  args: {
    icon: chevronRight,
    ariaLabel: 'Следующий',
    variant: 'default',
    size: 'small',
  },
};
