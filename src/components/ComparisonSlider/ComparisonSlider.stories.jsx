import { ComparisonSlider } from './index';

export default {
  title: 'Sections/ComparisonSlider',
  component: ComparisonSlider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Слайдер сравнения "Агент vs Конкуренты". Показывает преимущества решения в виде сменяющихся карточек.',
      },
    },
  },
  tags: ['autodocs'],
};

// Дефолтный вариант с 10 слайдами
export const Default = {
  args: {
    title: 'Преимущества использования Агента Дживио',
    subtitle: 'для автоматизации ответов на отзывы на маркетплейсах',
  },
};

// Кастомные слайды (пример)
export const CustomSlides = {
  args: {
    title: 'Сравнение решений',
    subtitle: 'Почему клиенты выбирают нас',
    slides: [
      {
        title: 'Скорость ответа',
        agent: {
          text: 'Мгновенный ответ в течение секунд благодаря ИИ-обработке.',
        },
        competitor: {
          text: 'Ответ в течение нескольких часов или дней.',
        },
      },
      {
        title: 'Качество ответов',
        agent: {
          text: 'Персонализированные ответы с учётом контекста и истории.',
        },
        competitor: {
          text: 'Шаблонные ответы без учёта специфики.',
        },
      },
      {
        title: 'Стоимость',
        agent: {
          text: 'Фиксированная подписка без скрытых платежей.',
        },
        competitor: {
          text: 'Оплата за каждое действие или скрытые комиссии.',
        },
      },
    ],
  },
};
