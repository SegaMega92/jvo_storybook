import{j as e}from"./iframe-Bs7tJ9XX.js";import{P as s}from"./index-WUrUDGBu.js";import{B as j}from"./index-B0lZscIQ.js";import"./preload-helper-D7k33qEn.js";const S="_section_1h7po_4",V="_section__container_1h7po_9",N="_section__content_1h7po_23",O="_section__text_1h7po_31",T="_section__title_1h7po_38",w="_section__description_1h7po_50",W="_section__actions_1h7po_61",q="_section__bullets_1h7po_68",E="_section__bullet_1h7po_68",H="_section__mediaWrapper_1h7po_86",I="_section__image_1h7po_96",k="_section__video_1h7po_103",t={section:S,section__container:V,"section--reversed":"_section--reversed_1h7po_18",section__content:N,section__text:O,section__title:T,section__description:w,section__actions:W,section__bullets:q,section__bullet:E,section__mediaWrapper:H,section__image:I,section__video:k};function p({title:g,description:f,bullets:_=[],image:u,imageAlt:b="",video:m,buttonText:v="Оставить заявку",buttonHref:h="#demo",reversed:x=!1}){const y=(r=>{if(!r)return null;if(r.includes("/embed/"))return r;const i=r.match(/kinescope\.io\/([a-zA-Z0-9]+)/);return i?`https://kinescope.io/embed/${i[1]}`:r})(m);return e.jsx("section",{className:`${t.section} ${x?t["section--reversed"]:""}`,children:e.jsxs("div",{className:t.section__container,children:[e.jsxs("div",{className:t.section__content,children:[e.jsxs("div",{className:t.section__text,children:[e.jsx("h2",{className:t.section__title,children:g}),e.jsx("p",{className:t.section__description,children:f})]}),e.jsxs("div",{className:t.section__actions,children:[_.length>0&&e.jsx("div",{className:t.section__bullets,children:_.map((r,i)=>e.jsxs("p",{className:t.section__bullet,children:["✔ ",r]},i))}),e.jsx(j,{href:h,variant:"primary",size:"medium",children:v})]})]}),m?e.jsx("div",{className:t.section__mediaWrapper,children:e.jsx("iframe",{src:y,className:t.section__video,allow:"autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;",frameBorder:"0",allowFullScreen:!0,title:"Video"})}):u?e.jsx("div",{className:t.section__mediaWrapper,children:e.jsx("img",{src:u,alt:b,className:t.section__image,loading:"lazy"})}):null]})})}p.propTypes={title:s.string.isRequired,description:s.string.isRequired,bullets:s.arrayOf(s.string),image:s.string,imageAlt:s.string,video:s.string,buttonText:s.string,buttonHref:s.string,reversed:s.bool};p.__docgenInfo={description:`JVO Feature Section - based on Figma design
Two-column layout: text left (400px), media right (820px)
Supports both image and video (Kinescope embed)`,methods:[],displayName:"FeatureSection",props:{bullets:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},imageAlt:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},buttonText:{defaultValue:{value:"'Оставить заявку'",computed:!1},description:"",type:{name:"string"},required:!1},buttonHref:{defaultValue:{value:"'#demo'",computed:!1},description:"",type:{name:"string"},required:!1},reversed:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},title:{description:"",type:{name:"string"},required:!0},description:{description:"",type:{name:"string"},required:!0},image:{description:"",type:{name:"string"},required:!1},video:{description:"",type:{name:"string"},required:!1}}};const A="/jvo_storybook/assets/feature-pricing-bg-OfVMjjG4.png",D={title:"Sections/FeatureSection",component:p,parameters:{layout:"fullscreen",docs:{description:{component:"Секция с описанием фичи. Два колонки: текст с буллетами и медиа (видео или изображение). Поддерживает reversed layout."}}},tags:["autodocs"],argTypes:{title:{control:"text"},description:{control:"text"},bullets:{control:"object"},buttonText:{control:"text"},reversed:{control:"boolean"},video:{control:"text"}}},o={args:{title:"Автоматическое заполнение карточек",description:"Загрузите изображения или артикулы конкурентов — JVO Агент сам заполнит все поля карточки на основе лучших практик.",bullets:["Анализ конкурентов и автозаполнение","SEO-оптимизация описаний","Генерация продающих текстов"],video:"https://kinescope.io/fiCG9ns1ZgH9jMX5gGEvgm",buttonText:"Попробовать",buttonHref:"#demo",reversed:!1}},n={args:{title:"Умное управление ценами",description:"Агент управляет ценами опираясь на события — удерживает маржу, разгоняет продажи и предотвращает Out-of-stock.",bullets:["Прямая интеграция с API Wildberries и Ozon","Анализ 20+ параметров: спрос, остатки, оборачиваемость, рейтинг, отзывы, конверсия в корзину и другие","Изменение цен по расписанию, вы можете подтвердить изменения или доверить их Агенту"],image:A,imageAlt:"Умное управление ценами",buttonText:"Оставить заявку",buttonHref:"#demo",reversed:!1}},a={args:{...o.args,reversed:!0}},c={args:{...n.args,reversed:!0}},l={args:o.args,parameters:{viewport:{defaultViewport:"mobile"}}},d={args:o.args,parameters:{viewport:{defaultViewport:"tablet"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Автоматическое заполнение карточек',
    description: 'Загрузите изображения или артикулы конкурентов — JVO Агент сам заполнит все поля карточки на основе лучших практик.',
    bullets: ['Анализ конкурентов и автозаполнение', 'SEO-оптимизация описаний', 'Генерация продающих текстов'],
    video: 'https://kinescope.io/fiCG9ns1ZgH9jMX5gGEvgm',
    buttonText: 'Попробовать',
    buttonHref: '#demo',
    reversed: false
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    reversed: true
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithImage.args,
    reversed: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: Default.args,
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: Default.args,
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}`,...d.parameters?.docs?.source}}};const G=["Default","WithImage","Reversed","WithImageReversed","Mobile","Tablet"];export{o as Default,l as Mobile,a as Reversed,d as Tablet,n as WithImage,c as WithImageReversed,G as __namedExportsOrder,D as default};
