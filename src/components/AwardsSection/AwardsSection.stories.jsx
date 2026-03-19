import { AwardsSection } from './index';

// Пример импорта картинок для бейджей:
// import startechBadge from '../../assets/awards/startech.svg';
// import oborotBadge from '../../assets/awards/oborot.svg';

export default {
  title: 'Sections/AwardsSection',
  component: AwardsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Секция наград и достижений. Карточки с источником, описанием и бейджем.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
};

export const WithIcons = {
  args: {
    awards: [
      {
        source: 'Startech.Base',
        description: 'Победители премии «Startech/awards 2025»',
        badge: '1 место',
        // icon: startechBadge, // раскомментировать когда будет картинка
      },
      {
        source: 'Oborot.ru',
        description: 'Победители премии «Startech/awards 2025»',
        badge: '1 место',
        // icon: oborotBadge, // раскомментировать когда будет картинка
      },
      {
        source: 'РБК 2025',
        description: 'Участник рейтинга работодателей',
        badge: 'Участник',
      },
    ],
  },
};

export const CustomAwards = {
  args: {
    title: 'Наши достижения',
    awards: [
      {
        source: 'Forbes',
        description: 'Лучшие технологические компании',
        badge: 'ТОП-50',
      },
      {
        source: 'TechCrunch',
        description: 'Самые инновационные стартапы',
        badge: 'Победитель',
      },
      {
        source: 'RBC',
        description: 'Лидеры цифровой трансформации',
        badge: '1 место',
      },
    ],
  },
};

export const Mobile = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
