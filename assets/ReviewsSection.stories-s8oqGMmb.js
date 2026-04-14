import{R as g}from"./index-BjlB0QQK.js";import{t as e}from"./typograph-BZ_HRgl2.js";import"./iframe-BAVUJXS1.js";import"./preload-helper-D7k33qEn.js";import"./index-BEjEDMf8.js";import"./chevron-left-BqLDjSPE.js";import"./chevron-right-CwMpT2Px.js";const S={title:"Sections/ReviewsSection",component:g,parameters:{layout:"fullscreen",docs:{description:{component:`Секция "Что говорят наши клиенты" - отзывы в masonry-раскладке.

На десктопе — три колонки с CSS columns (masonry).
На мобильном — горизонтальный слайдер с навигацией.

Карточки появляются с анимацией при скролле.`}}},tags:["autodocs"]},t=[{title:e("Больше не нужно вручную подбирать ключевые слова"),text:e("Модуль берёт на себя всю сложную аналитическую работу. Система сама формирует готовые, технически грамотные задачи для оптимизации карточек."),name:"Константин",description:e("Владелец интернет-магазина")},{title:e("Агент обрабатывает 90% обращений автоматически"),text:e("Раньше отвечал на отзывы сам по вечерам. Теперь кросс-продажи приносят дополнительные заказы. Вырос в 2 раза за год без нового сотрудника."),name:"Дмитрий",description:e("Поставщик на Wildberries")},{title:e("Экономия на ФОТ окупила систему за месяц"),text:e("При масштабировании до 15 000 SKU объём отзывов вырос втрое. Раньше пришлось бы нанимать ещё 4 человека — теперь Агент закрывает этот объём."),name:"Анна",description:e("Директор по развитию бренда")},{title:e("Агент видит остатки в реальном времени"),text:e("Самое ценное — он не предложит товар, которого нет в наличии. Подбирает подходящий артикул исходя из контекста отзыва и текущего склада."),name:"Сергей",description:e("Категорийный менеджер")},{title:e("Удалось поднять средний рейтинг бренда"),text:e("Агент сам замечает, когда покупатель ставит низкую оценку при хорошем отзыве, и вежливо просит её пересмотреть. Исправляем случайные ошибки автоматически."),name:"Мария",description:e("Менеджер маркетплейсов")},{title:e("Порог входа для новых сотрудников снизился"),text:e("Система формирует готовые задачи для оптимизации карточек товаров, которые остаётся только применить. Новички быстро входят в работу."),name:"Алексей",description:e("Руководитель отдела e-commerce")}],l=t.map((m,d)=>({...m,placeholderColor:["#ff8fda","#425222","#1755ef","#098acf","#8dd999","#15181f"][d]})),r={args:{reviews:t}},s={args:{showHeader:!0,title:e("Что говорят наши клиенты"),subtitle:e("Делегируйте управление личным кабинетом или пользуйтесь консультациями от экспертов"),reviews:t}},a={args:{reviews:l}},i={args:{reviews:t.map((m,d)=>({...m,avatar:`https://i.pravatar.cc/96?img=${d+10}`}))}},n={args:{reviews:t.slice(0,4)}},o={args:{reviews:[...t,{title:e("Автоматизация сэкономила 20 часов в неделю"),text:e("Раньше вручную отвечали на каждый отзыв. Теперь Агент делает это за секунды, а мы фокусируемся на развитии бизнеса."),name:"Елена",description:e("Владелец магазина косметики")},{title:e("Кросс-продажи работают отлично"),text:e("Агент предлагает релевантные товары в каждом ответе. Конверсия в повторные покупки выросла на 35%."),name:"Павел",description:e("Директор по продажам")},{title:e("Отчёты помогают улучшать продукт"),text:e("Аналитика по отзывам выявила проблему с упаковкой, которую мы не замечали. Исправили — возвраты снизились вдвое."),name:"Ольга",description:e("Продакт-менеджер")}]}},p={args:{showHeader:!0,title:e("Отзывы наших клиентов"),reviews:t.slice(0,3)}},c={args:{reviews:[{title:e("Карточки вышли в топ за 2 недели"),text:e("Агент проанализировал конкурентов и подобрал ключевые слова. Органический трафик вырос на 150%."),name:"Виктор",description:e("Селлер на Ozon")},{title:e("Автоматическая оптимизация экономит время"),text:e("Раньше тратил 3 часа на анализ одной карточки. Теперь Агент делает это за минуты и даёт готовые рекомендации."),name:"Наталья",description:e("Менеджер по контенту")},{title:e("Позиции стабильно растут"),text:e("За 3 месяца средняя позиция по основным запросам улучшилась с 50 до 12. ROI окупился за первый месяц."),name:"Игорь",description:e("Владелец бренда одежды")},{title:e("Понятные отчёты для команды"),text:e("Агент формирует задачи, которые сразу понятны копирайтерам и дизайнерам. Не нужно объяснять, что делать."),name:"Светлана",description:e("Руководитель маркетинга")}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: reviewsAgentReviews
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    showHeader: true,
    title: typograph('Что говорят наши клиенты'),
    subtitle: typograph('Делегируйте управление личным кабинетом или пользуйтесь консультациями от экспертов'),
    reviews: reviewsAgentReviews
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: reviewsWithPlaceholders
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: reviewsAgentReviews.map((review, index) => ({
      ...review,
      avatar: \`https://i.pravatar.cc/96?img=\${index + 10}\`
    }))
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: reviewsAgentReviews.slice(0, 4)
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: [...reviewsAgentReviews, {
      title: typograph('Автоматизация сэкономила 20 часов в неделю'),
      text: typograph('Раньше вручную отвечали на каждый отзыв. Теперь Агент делает это за секунды, а мы фокусируемся на развитии бизнеса.'),
      name: 'Елена',
      description: typograph('Владелец магазина косметики')
    }, {
      title: typograph('Кросс-продажи работают отлично'),
      text: typograph('Агент предлагает релевантные товары в каждом ответе. Конверсия в повторные покупки выросла на 35%.'),
      name: 'Павел',
      description: typograph('Директор по продажам')
    }, {
      title: typograph('Отчёты помогают улучшать продукт'),
      text: typograph('Аналитика по отзывам выявила проблему с упаковкой, которую мы не замечали. Исправили — возвраты снизились вдвое.'),
      name: 'Ольга',
      description: typograph('Продакт-менеджер')
    }]
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    showHeader: true,
    title: typograph('Отзывы наших клиентов'),
    reviews: reviewsAgentReviews.slice(0, 3)
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: [{
      title: typograph('Карточки вышли в топ за 2 недели'),
      text: typograph('Агент проанализировал конкурентов и подобрал ключевые слова. Органический трафик вырос на 150%.'),
      name: 'Виктор',
      description: typograph('Селлер на Ozon')
    }, {
      title: typograph('Автоматическая оптимизация экономит время'),
      text: typograph('Раньше тратил 3 часа на анализ одной карточки. Теперь Агент делает это за минуты и даёт готовые рекомендации.'),
      name: 'Наталья',
      description: typograph('Менеджер по контенту')
    }, {
      title: typograph('Позиции стабильно растут'),
      text: typograph('За 3 месяца средняя позиция по основным запросам улучшилась с 50 до 12. ROI окупился за первый месяц.'),
      name: 'Игорь',
      description: typograph('Владелец бренда одежды')
    }, {
      title: typograph('Понятные отчёты для команды'),
      text: typograph('Агент формирует задачи, которые сразу понятны копирайтерам и дизайнерам. Не нужно объяснять, что делать.'),
      name: 'Светлана',
      description: typograph('Руководитель маркетинга')
    }]
  }
}`,...c.parameters?.docs?.source}}};const f=["Default","WithHeader","WithPlaceholders","WithAvatars","FewReviews","ManyReviews","WithoutSubtitle","SEOAgentReviews"];export{r as Default,n as FewReviews,o as ManyReviews,c as SEOAgentReviews,i as WithAvatars,s as WithHeader,a as WithPlaceholders,p as WithoutSubtitle,f as __namedExportsOrder,S as default};
