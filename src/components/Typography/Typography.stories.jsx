import { Typography } from './index';

export default {
  title: 'Foundations/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
    docs: {
      description: {
        component: 'Компонент типографики. Поддерживает варианты от h1 до caption с настройками выравнивания и ширины.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'subtitle', 'bodyLarge', 'body', 'bodySmall', 'caption'],
    },
    secondary: { control: 'boolean' },
    center: { control: 'boolean' },
    maxWidth: {
      control: 'select',
      options: [undefined, 'sm', 'md', 'lg'],
    },
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="h1">H1 — Продажи на маркетплейсах</Typography>
      <Typography variant="h2">H2 — Автоматизация карточек</Typography>
      <Typography variant="h3">H3 — Умное ценообразование</Typography>
      <Typography variant="subtitle">
        Subtitle — JVO Агент — ваш персональный AI-менеджер, который управляет ценами
      </Typography>
      <Typography variant="bodyLarge">
        Body Large — Анализирует данные и формирует стратегии исходя из заданных правил
      </Typography>
      <Typography variant="body">
        Body — Работает 24/7, не ошибается и не устаёт
      </Typography>
      <Typography variant="bodySmall">
        Body Small — Дополнительная информация о сервисе
      </Typography>
      <Typography variant="caption">Caption — Мелкий текст</Typography>
    </div>
  ),
};

export const H1 = {
  args: {
    children: 'Продажи на маркетплейсах под контролем. Всегда.',
    variant: 'h1',
  },
};

export const H2 = {
  args: {
    children: 'Автоматическое заполнение карточек с помощью AI',
    variant: 'h2',
  },
};

export const H3 = {
  args: {
    children: 'Умное ценообразование',
    variant: 'h3',
  },
};

export const Subtitle = {
  args: {
    children:
      'JVO Агент — ваш персональный AI-менеджер, который управляет ценами, отзывами, отвечает на вопросы и анализирует данные.',
    variant: 'subtitle',
    center: true,
    maxWidth: 'md',
  },
};

export const BodyLarge = {
  args: {
    children:
      'Загрузите изображения или артикулы конкурентов — JVO Агент сам заполнит все поля карточки на основе лучших практик.',
    variant: 'bodyLarge',
  },
};

export const Body = {
  args: {
    children: 'Работает 24/7, не ошибается и не устаёт.',
    variant: 'body',
  },
};

export const BodySecondary = {
  args: {
    children: '✔ Автоматический ответ на отзывы',
    variant: 'bodyLarge',
    secondary: true,
  },
};
