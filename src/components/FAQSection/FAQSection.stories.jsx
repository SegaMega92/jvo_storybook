import { FAQSection } from './index';

export default {
  title: 'Sections/FAQSection',
  component: FAQSection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Секция FAQ (часто задаваемые вопросы). Тёмный фон #15181F, аккордеон с вопросами, иконка продукта.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
};

export const WithIcon = {
  args: {
    icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"%3E%3Crect width="72" height="72" rx="16" fill="%23C16FFB"/%3E%3C/svg%3E',
  },
};

export const CustomFAQs = {
  args: {
    faqs: [
      {
        id: 1,
        question: 'Первый вопрос?',
        answer: 'Ответ на первый вопрос.',
      },
      {
        id: 2,
        question: 'Второй вопрос?',
        answer: 'Ответ на второй вопрос.',
      },
    ],
  },
};
