import{F as n}from"./index-B8zSJR69.js";import"./iframe-BAVUJXS1.js";import"./preload-helper-D7k33qEn.js";import"./index-BEjEDMf8.js";import"./index-Boiu_Bmz.js";const i="/jvo_storybook/assets/feature-pricing-bg-OfVMjjG4.png",m={title:"Sections/FeatureSection",component:n,parameters:{layout:"fullscreen",docs:{description:{component:"Секция с описанием фичи. Два колонки: текст с буллетами и медиа (видео или изображение). Поддерживает reversed layout."}}},tags:["autodocs"],argTypes:{title:{control:"text"},description:{control:"text"},bullets:{control:"object"},buttonText:{control:"text"},reversed:{control:"boolean"},video:{control:"text"}}},e={args:{title:"Автоматическое заполнение карточек",description:"Загрузите изображения или артикулы конкурентов — JVO Агент сам заполнит все поля карточки на основе лучших практик.",bullets:["Анализ конкурентов и автозаполнение","SEO-оптимизация описаний","Генерация продающих текстов"],video:"https://kinescope.io/fiCG9ns1ZgH9jMX5gGEvgm",buttonText:"Попробовать",buttonHref:"#demo",reversed:!1}},r={args:{title:"Умное управление ценами",description:"Агент управляет ценами опираясь на события — удерживает маржу, разгоняет продажи и предотвращает Out-of-stock.",bullets:["Прямая интеграция с API Wildberries и Ozon","Анализ 20+ параметров: спрос, остатки, оборачиваемость, рейтинг, отзывы, конверсия в корзину и другие","Изменение цен по расписанию, вы можете подтвердить изменения или доверить их Агенту"],image:i,imageAlt:"Умное управление ценами",buttonText:"Оставить заявку",buttonHref:"#demo",reversed:!1}},t={args:{...e.args,reversed:!0}},s={args:{...r.args,reversed:!0}},o={args:e.args,parameters:{viewport:{defaultViewport:"mobile"}}},a={args:e.args,parameters:{viewport:{defaultViewport:"tablet"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Автоматическое заполнение карточек',
    description: 'Загрузите изображения или артикулы конкурентов — JVO Агент сам заполнит все поля карточки на основе лучших практик.',
    bullets: ['Анализ конкурентов и автозаполнение', 'SEO-оптимизация описаний', 'Генерация продающих текстов'],
    video: 'https://kinescope.io/fiCG9ns1ZgH9jMX5gGEvgm',
    buttonText: 'Попробовать',
    buttonHref: '#demo',
    reversed: false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Умное управление ценами',
    description: 'Агент управляет ценами опираясь на события — удерживает маржу, разгоняет продажи и предотвращает Out-of-stock.',
    bullets: ['Прямая интеграция с API Wildberries и Ozon', 'Анализ 20+ параметров: спрос, остатки, оборачиваемость, рейтинг, отзывы, конверсия в корзину и другие', 'Изменение цен по расписанию, вы можете подтвердить изменения или доверить их Агенту'],
    image: featurePricingBg,
    imageAlt: 'Умное управление ценами',
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    reversed: false
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    reversed: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithImage.args,
    reversed: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: Default.args,
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: Default.args,
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}`,...a.parameters?.docs?.source}}};const g=["Default","WithImage","Reversed","WithImageReversed","Mobile","Tablet"];export{e as Default,o as Mobile,t as Reversed,a as Tablet,r as WithImage,s as WithImageReversed,g as __namedExportsOrder,m as default};
