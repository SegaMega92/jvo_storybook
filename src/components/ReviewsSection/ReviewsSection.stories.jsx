import { ReviewsSection } from './index';
import { typograph } from '../../utils/typograph';

export default {
  title: 'Sections/ReviewsSection',
  component: ReviewsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Секция "Что говорят наши клиенты" - отзывы в masonry-раскладке.

На десктопе — три колонки с CSS columns (masonry).
На мобильном — горизонтальный слайдер с навигацией.

Карточки появляются с анимацией при скролле.`,
      },
    },
  },
  tags: ['autodocs'],
};

// Отзывы про Агента коммуникаций (ответы на отзывы) — без аватаров
const reviewsAgentReviews = [
  {
    title: typograph('Больше не нужно вручную подбирать ключевые слова'),
    text: typograph('Модуль берёт на себя всю сложную аналитическую работу. Система сама формирует готовые, технически грамотные задачи для оптимизации карточек.'),
    name: 'Константин',
    description: typograph('Владелец интернет-магазина'),
  },
  {
    title: typograph('Агент обрабатывает 90% обращений автоматически'),
    text: typograph('Раньше отвечал на отзывы сам по вечерам. Теперь кросс-продажи приносят дополнительные заказы. Вырос в 2 раза за год без нового сотрудника.'),
    name: 'Дмитрий',
    description: typograph('Поставщик на Wildberries'),
  },
  {
    title: typograph('Экономия на ФОТ окупила систему за месяц'),
    text: typograph('При масштабировании до 15 000 SKU объём отзывов вырос втрое. Раньше пришлось бы нанимать ещё 4 человека — теперь Агент закрывает этот объём.'),
    name: 'Анна',
    description: typograph('Директор по развитию бренда'),
  },
  {
    title: typograph('Агент видит остатки в реальном времени'),
    text: typograph('Самое ценное — он не предложит товар, которого нет в наличии. Подбирает подходящий артикул исходя из контекста отзыва и текущего склада.'),
    name: 'Сергей',
    description: typograph('Категорийный менеджер'),
  },
  {
    title: typograph('Удалось поднять средний рейтинг бренда'),
    text: typograph('Агент сам замечает, когда покупатель ставит низкую оценку при хорошем отзыве, и вежливо просит её пересмотреть. Исправляем случайные ошибки автоматически.'),
    name: 'Мария',
    description: typograph('Менеджер маркетплейсов'),
  },
  {
    title: typograph('Порог входа для новых сотрудников снизился'),
    text: typograph('Система формирует готовые задачи для оптимизации карточек товаров, которые остаётся только применить. Новички быстро входят в работу.'),
    name: 'Алексей',
    description: typograph('Руководитель отдела e-commerce'),
  },
];

// Версия с placeholder аватарами
const reviewsWithPlaceholders = reviewsAgentReviews.map((review, index) => ({
  ...review,
  placeholderColor: ['#ff8fda', '#425222', '#1755ef', '#098acf', '#8dd999', '#15181f'][index],
}));

// Базовый пример (только карточки)
export const Default = {
  args: {
    reviews: reviewsAgentReviews,
  },
};

// С заголовком
export const WithHeader = {
  args: {
    showHeader: true,
    title: typograph('Что говорят наши клиенты'),
    subtitle: typograph('Делегируйте управление личным кабинетом или пользуйтесь консультациями от экспертов'),
    reviews: reviewsAgentReviews,
  },
};

// С placeholder аватарами
export const WithPlaceholders = {
  args: {
    reviews: reviewsWithPlaceholders,
  },
};

// С фото аватарами
export const WithAvatars = {
  args: {
    reviews: reviewsAgentReviews.map((review, index) => ({
      ...review,
      avatar: `https://i.pravatar.cc/96?img=${index + 10}`,
    })),
  },
};

// Меньше отзывов (4 штуки)
export const FewReviews = {
  args: {
    reviews: reviewsAgentReviews.slice(0, 4),
  },
};

// Много отзывов (9 штук)
export const ManyReviews = {
  args: {
    reviews: [
      ...reviewsAgentReviews,
      {
        title: typograph('Автоматизация сэкономила 20 часов в неделю'),
        text: typograph('Раньше вручную отвечали на каждый отзыв. Теперь Агент делает это за секунды, а мы фокусируемся на развитии бизнеса.'),
        name: 'Елена',
        description: typograph('Владелец магазина косметики'),
      },
      {
        title: typograph('Кросс-продажи работают отлично'),
        text: typograph('Агент предлагает релевантные товары в каждом ответе. Конверсия в повторные покупки выросла на 35%.'),
        name: 'Павел',
        description: typograph('Директор по продажам'),
      },
      {
        title: typograph('Отчёты помогают улучшать продукт'),
        text: typograph('Аналитика по отзывам выявила проблему с упаковкой, которую мы не замечали. Исправили — возвраты снизились вдвое.'),
        name: 'Ольга',
        description: typograph('Продакт-менеджер'),
      },
    ],
  },
};

// Без подзаголовка
export const WithoutSubtitle = {
  args: {
    showHeader: true,
    title: typograph('Отзывы наших клиентов'),
    reviews: reviewsAgentReviews.slice(0, 3),
  },
};


// Для SEO-агента (другой контекст)
export const SEOAgentReviews = {
  args: {
    reviews: [
      {
        title: typograph('Карточки вышли в топ за 2 недели'),
        text: typograph('Агент проанализировал конкурентов и подобрал ключевые слова. Органический трафик вырос на 150%.'),
        name: 'Виктор',
        description: typograph('Селлер на Ozon'),
      },
      {
        title: typograph('Автоматическая оптимизация экономит время'),
        text: typograph('Раньше тратил 3 часа на анализ одной карточки. Теперь Агент делает это за минуты и даёт готовые рекомендации.'),
        name: 'Наталья',
        description: typograph('Менеджер по контенту'),
      },
      {
        title: typograph('Позиции стабильно растут'),
        text: typograph('За 3 месяца средняя позиция по основным запросам улучшилась с 50 до 12. ROI окупился за первый месяц.'),
        name: 'Игорь',
        description: typograph('Владелец бренда одежды'),
      },
      {
        title: typograph('Понятные отчёты для команды'),
        text: typograph('Агент формирует задачи, которые сразу понятны копирайтерам и дизайнерам. Не нужно объяснять, что делать.'),
        name: 'Светлана',
        description: typograph('Руководитель маркетинга'),
      },
    ],
  },
};
