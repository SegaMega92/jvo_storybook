import{r as o,j as s}from"./iframe-BqwCuukD.js";import{P as i}from"./index-CW_be3JN.js";import{c as z}from"./chevron-left-BqLDjSPE.js";import{c as D}from"./chevron-right-CwMpT2Px.js";import{t as e}from"./typograph-BZ_HRgl2.js";import"./preload-helper-D7k33qEn.js";const F="_section_15y81_3",U="_header_15y81_16",K="_title_15y81_25",G="_subtitle_15y81_35",J="_cardsWrapper_15y81_49",Q="_cards_15y81_49",X="_card_15y81_49",Y="_cardsVisible_15y81_82",Z="_reviewContent_15y81_91",ee="_reviewTitle_15y81_98",te="_reviewText_15y81_107",re="_cardExpanded_15y81_123",se="_expandButton_15y81_130",ae="_expandButtonText_15y81_151",ne="_expandButtonIcon_15y81_157",oe="_author_15y81_172",ie="_authorInfo_15y81_178",ce="_authorName_15y81_186",le="_authorDescription_15y81_198",de="_avatar_15y81_212",pe="_avatarImage_15y81_222",ue="_avatarPlaceholder_15y81_228",me="_navigation_15y81_251",he="_navButton_15y81_255",ve="_navIcon_15y81_277",r={section:F,header:U,title:K,subtitle:G,cardsWrapper:J,cards:Q,card:X,cardsVisible:Y,reviewContent:Z,reviewTitle:ee,reviewText:te,cardExpanded:re,expandButton:se,expandButtonText:ae,expandButtonIcon:ne,author:oe,authorInfo:ie,authorName:ce,authorDescription:le,avatar:de,avatarImage:pe,avatarPlaceholder:ue,navigation:me,navButton:he,navIcon:ve};function E({title:m="Что говорят наши клиенты",subtitle:p="Делегируйте управление личным кабинетом или пользуйтесь консультациями от экспертов",reviews:h=[],showHeader:C=!1,className:q=""}){const[L,k]=o.useState(!1),[v,P]=o.useState(!1),[u,R]=o.useState(null),[A,V]=o.useState(new Set),I=o.useRef(null),j=o.useRef(null),T=o.useRef([]);o.useEffect(()=>{const t=()=>P(window.innerWidth<=768);return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),o.useEffect(()=>{const t=new IntersectionObserver(a=>{a.forEach(n=>{n.isIntersecting&&(k(!0),t.unobserve(n.target))})},{threshold:.1});return I.current&&t.observe(I.current),()=>t.disconnect()},[]);const B=o.useCallback(t=>{const a=j.current;if(!a)return;const n=a.querySelector(`.${r.card}`);if(!n)return;const c=n.offsetWidth,l=12,g=a.scrollLeft,O=Math.round(g/(c+l)),$=Math.max(0,Math.min(h.length-1,O+t))*(c+l);R(null),a.scrollTo({left:$,behavior:"smooth"})},[h.length]),H=()=>B(1),M=()=>B(-1);o.useEffect(()=>{const t=j.current;if(!t||!v)return;let a;const n=()=>{u!==null&&(clearTimeout(a),a=setTimeout(()=>{R(null)},50))};return t.addEventListener("scroll",n),()=>{t.removeEventListener("scroll",n),clearTimeout(a)}},[v,u]);const W=t=>{R(u===t?null:t)};return o.useLayoutEffect(()=>{const t=()=>{const n=new Set;T.current.forEach((c,l)=>{l!==u&&c&&c.scrollHeight>c.clientHeight+1&&n.add(l)}),V(n)},a=setTimeout(t,50);return window.addEventListener("resize",t),()=>{clearTimeout(a),window.removeEventListener("resize",t)}},[h,v,u]),s.jsxs("section",{ref:I,className:`${r.section} ${q}`,"aria-labelledby":"reviews-title",children:[C&&s.jsxs("div",{className:r.header,children:[s.jsx("h2",{id:"reviews-title",className:r.title,children:m}),p&&s.jsx("p",{className:r.subtitle,children:p})]}),s.jsxs("div",{className:r.cardsWrapper,children:[s.jsx("div",{ref:j,className:`${r.cards} ${L?r.cardsVisible:""}`,children:h.map((t,a)=>{const n=u===a,c=A.has(a),l=c&&!n;return s.jsxs("article",{className:`${r.card} ${n?r.cardExpanded:""}`,style:{"--animation-delay":`${a*.1}s`},onClick:()=>v&&c&&W(a),children:[s.jsxs("div",{className:r.reviewContent,children:[t.title&&s.jsxs("h3",{className:r.reviewTitle,children:["«",t.title,"»"]}),s.jsx("p",{ref:g=>T.current[a]=g,className:r.reviewText,children:t.text}),l&&s.jsxs("button",{type:"button",className:r.expandButton,onClick:g=>{g.stopPropagation(),W(a)},children:[s.jsx("span",{className:r.expandButtonText,children:"Показать полностью"}),s.jsx("svg",{className:r.expandButtonIcon,viewBox:"0 0 10 10",fill:"none",children:s.jsx("path",{d:"M2 3.5L5 6.5L8 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),s.jsxs("div",{className:r.author,children:[s.jsxs("div",{className:r.authorInfo,children:[s.jsx("span",{className:r.authorName,children:t.name}),t.description&&s.jsx("span",{className:r.authorDescription,children:t.description})]}),(t.avatar||t.placeholderColor)&&s.jsx("div",{className:r.avatar,children:t.avatar?s.jsx("img",{src:t.avatar,alt:"",className:r.avatarImage,loading:"lazy"}):s.jsx("div",{className:r.avatarPlaceholder,style:{"--placeholder-color":t.placeholderColor}})})]})]},a)})}),v&&h.length>1&&s.jsxs("div",{className:r.navigation,children:[s.jsx("button",{type:"button",className:r.navButton,onClick:M,"aria-label":"Предыдущий отзыв",children:s.jsx("img",{src:z,alt:"",className:r.navIcon})}),s.jsx("button",{type:"button",className:r.navButton,onClick:H,"aria-label":"Следующий отзыв",children:s.jsx("img",{src:D,alt:"",className:r.navIcon})})]})]})]})}E.propTypes={title:i.string,subtitle:i.string,showHeader:i.bool,reviews:i.arrayOf(i.shape({title:i.string.isRequired,text:i.string.isRequired,name:i.string.isRequired,description:i.string,avatar:i.string,placeholderColor:i.string})),className:i.string};E.__docgenInfo={description:`ReviewsSection - секция "Что говорят наши клиенты"
Masonry-раскладка на десктопе, горизонтальный слайдер на мобильном
Анимация появления при скролле`,methods:[],displayName:"ReviewsSection",props:{title:{defaultValue:{value:"'Что говорят наши клиенты'",computed:!1},description:"Заголовок секции",type:{name:"string"},required:!1},subtitle:{defaultValue:{value:"'Делегируйте управление личным кабинетом или пользуйтесь консультациями от экспертов'",computed:!1},description:"Подзаголовок",type:{name:"string"},required:!1},reviews:{defaultValue:{value:"[]",computed:!1},description:"Массив отзывов",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",description:"Заголовок отзыва (будет обёрнут в «кавычки»)",required:!0},text:{name:"string",description:"Текст отзыва (до 300 символов)",required:!0},name:{name:"string",description:"Имя клиента",required:!0},description:{name:"string",description:"Описание (должность, компания)",required:!1},avatar:{name:"string",description:"URL аватара",required:!1},placeholderColor:{name:"string",description:"Цвет placeholder (если нет аватара)",required:!1}}}},required:!1},showHeader:{defaultValue:{value:"false",computed:!1},description:"Показывать ли заголовок и подзаголовок",type:{name:"bool"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"Дополнительный CSS-класс",type:{name:"string"},required:!1}}};const Se={title:"Sections/ReviewsSection",component:E,parameters:{layout:"fullscreen",docs:{description:{component:`Секция "Что говорят наши клиенты" - отзывы в masonry-раскладке.

На десктопе — три колонки с CSS columns (masonry).
На мобильном — горизонтальный слайдер с навигацией.

Карточки появляются с анимацией при скролле.`}}},tags:["autodocs"]},d=[{title:e("Больше не нужно вручную подбирать ключевые слова"),text:e("Модуль берёт на себя всю сложную аналитическую работу. Система сама формирует готовые, технически грамотные задачи для оптимизации карточек."),name:"Константин",description:e("Владелец интернет-магазина")},{title:e("Агент обрабатывает 90% обращений автоматически"),text:e("Раньше отвечал на отзывы сам по вечерам. Теперь кросс-продажи приносят дополнительные заказы. Вырос в 2 раза за год без нового сотрудника."),name:"Дмитрий",description:e("Поставщик на Wildberries")},{title:e("Экономия на ФОТ окупила систему за месяц"),text:e("При масштабировании до 15 000 SKU объём отзывов вырос втрое. Раньше пришлось бы нанимать ещё 4 человека — теперь Агент закрывает этот объём."),name:"Анна",description:e("Директор по развитию бренда")},{title:e("Агент видит остатки в реальном времени"),text:e("Самое ценное — он не предложит товар, которого нет в наличии. Подбирает подходящий артикул исходя из контекста отзыва и текущего склада."),name:"Сергей",description:e("Категорийный менеджер")},{title:e("Удалось поднять средний рейтинг бренда"),text:e("Агент сам замечает, когда покупатель ставит низкую оценку при хорошем отзыве, и вежливо просит её пересмотреть. Исправляем случайные ошибки автоматически."),name:"Мария",description:e("Менеджер маркетплейсов")},{title:e("Порог входа для новых сотрудников снизился"),text:e("Система формирует готовые задачи для оптимизации карточек товаров, которые остаётся только применить. Новички быстро входят в работу."),name:"Алексей",description:e("Руководитель отдела e-commerce")}],ge=d.map((m,p)=>({...m,placeholderColor:["#ff8fda","#425222","#1755ef","#098acf","#8dd999","#15181f"][p]})),x={args:{reviews:d}},_={args:{showHeader:!0,title:e("Что говорят наши клиенты"),subtitle:e("Делегируйте управление личным кабинетом или пользуйтесь консультациями от экспертов"),reviews:d}},f={args:{reviews:ge}},y={args:{reviews:d.map((m,p)=>({...m,avatar:`https://i.pravatar.cc/96?img=${p+10}`}))}},w={args:{reviews:d.slice(0,4)}},b={args:{reviews:[...d,{title:e("Автоматизация сэкономила 20 часов в неделю"),text:e("Раньше вручную отвечали на каждый отзыв. Теперь Агент делает это за секунды, а мы фокусируемся на развитии бизнеса."),name:"Елена",description:e("Владелец магазина косметики")},{title:e("Кросс-продажи работают отлично"),text:e("Агент предлагает релевантные товары в каждом ответе. Конверсия в повторные покупки выросла на 35%."),name:"Павел",description:e("Директор по продажам")},{title:e("Отчёты помогают улучшать продукт"),text:e("Аналитика по отзывам выявила проблему с упаковкой, которую мы не замечали. Исправили — возвраты снизились вдвое."),name:"Ольга",description:e("Продакт-менеджер")}]}},N={args:{showHeader:!0,title:e("Отзывы наших клиентов"),reviews:d.slice(0,3)}},S={args:{reviews:[{title:e("Карточки вышли в топ за 2 недели"),text:e("Агент проанализировал конкурентов и подобрал ключевые слова. Органический трафик вырос на 150%."),name:"Виктор",description:e("Селлер на Ozon")},{title:e("Автоматическая оптимизация экономит время"),text:e("Раньше тратил 3 часа на анализ одной карточки. Теперь Агент делает это за минуты и даёт готовые рекомендации."),name:"Наталья",description:e("Менеджер по контенту")},{title:e("Позиции стабильно растут"),text:e("За 3 месяца средняя позиция по основным запросам улучшилась с 50 до 12. ROI окупился за первый месяц."),name:"Игорь",description:e("Владелец бренда одежды")},{title:e("Понятные отчёты для команды"),text:e("Агент формирует задачи, которые сразу понятны копирайтерам и дизайнерам. Не нужно объяснять, что делать."),name:"Светлана",description:e("Руководитель маркетинга")}]}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: reviewsAgentReviews
  }
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    showHeader: true,
    title: typograph('Что говорят наши клиенты'),
    subtitle: typograph('Делегируйте управление личным кабинетом или пользуйтесь консультациями от экспертов'),
    reviews: reviewsAgentReviews
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: reviewsWithPlaceholders
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: reviewsAgentReviews.map((review, index) => ({
      ...review,
      avatar: \`https://i.pravatar.cc/96?img=\${index + 10}\`
    }))
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: reviewsAgentReviews.slice(0, 4)
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    showHeader: true,
    title: typograph('Отзывы наших клиентов'),
    reviews: reviewsAgentReviews.slice(0, 3)
  }
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const Re=["Default","WithHeader","WithPlaceholders","WithAvatars","FewReviews","ManyReviews","WithoutSubtitle","SEOAgentReviews"];export{x as Default,w as FewReviews,b as ManyReviews,S as SEOAgentReviews,y as WithAvatars,_ as WithHeader,f as WithPlaceholders,N as WithoutSubtitle,Re as __namedExportsOrder,Se as default};
