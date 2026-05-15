import{j as t}from"./iframe-BIY3-FXo.js";import{t as l,a as m,b as p,M as b}from"./index-vwh1UZOA.js";import{H as g}from"./index-BAVTAJWy.js";import"./preload-helper-D7k33qEn.js";import"./index-uaVFibOh.js";const y={title:"Sections/MainHero",component:b,parameters:{layout:"fullscreen",backgrounds:{default:"white"}},argTypes:{title:{control:"text",description:"Main heading text"},description:{control:"text",description:"Description text"},defaultActiveTab:{control:"select",options:["communications","pricing","advertising"],description:"Default active tab"}}},r=({label:u,color:c})=>t.jsx("div",{style:{width:"80%",height:"80%",background:`linear-gradient(135deg, ${c}22 0%, ${c}44 100%)`,borderRadius:"16px",display:"flex",alignItems:"center",justifyContent:"center",border:`2px dashed ${c}`},children:t.jsxs("span",{style:{fontFamily:"var(--font-family-primary)",fontSize:"18px",fontWeight:600,color:c},children:[u," — интерактивная иллюстрация"]})}),d=[{id:"communications",label:"Коммуникации",icon:l,description:"Ответы на отзывы, вопросы и кросс-продажи с глубокой аналитикой для бизнеса",content:t.jsx(r,{label:"Коммуникации",color:"#c16ffb"})},{id:"pricing",label:"Управление ценами",icon:m,description:"Автоматическое ценообразование на основе анализа конкурентов и спроса",content:t.jsx(r,{label:"Управление ценами",color:"#2fc774"})},{id:"advertising",label:"Реклама",icon:p,description:"Оптимизация рекламных кампаний с максимальной отдачей от бюджета",content:t.jsx(r,{label:"Реклама",color:"#ff8fda"})}],e={args:{tabs:d,defaultActiveTab:"communications"}},i={args:{tabs:d,defaultActiveTab:"pricing"}},a={args:{tabs:d,defaultActiveTab:"advertising"}},n={args:{title:"Умные инструменты для вашего бизнеса",description:"Полная автоматизация рутинных задач с помощью искусственного интеллекта. Экономьте время и увеличивайте прибыль.",tabs:d,defaultActiveTab:"communications"}},o={args:{defaultActiveTab:"communications"}},f=[{id:"communications",label:"Коммуникации",icon:l,description:"Ответы на отзывы, вопросы и кросс-продажи с глубокой аналитикой для бизнеса",content:t.jsx(g,{onComplete:()=>console.log("Communications complete!")})},{id:"pricing",label:"Управление ценами",icon:m,description:"Автоматическое ценообразование на основе анализа конкурентов и спроса",content:t.jsx(r,{label:"Управление ценами",color:"#2fc774"})},{id:"advertising",label:"Реклама",icon:p,description:"Оптимизация рекламных кампаний с максимальной отдачей от бюджета",content:t.jsx(r,{label:"Реклама",color:"#ff8fda"})}],s={args:{tabs:f,defaultActiveTab:"communications"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: tabsWithContent,
    defaultActiveTab: 'communications'
  }
}`,...e.parameters?.docs?.source},description:{story:"Default MainHero with placeholder content",...e.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: tabsWithContent,
    defaultActiveTab: 'pricing'
  }
}`,...i.parameters?.docs?.source},description:{story:"MainHero with Pricing tab active",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: tabsWithContent,
    defaultActiveTab: 'advertising'
  }
}`,...a.parameters?.docs?.source},description:{story:"MainHero with Advertising tab active",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Умные инструменты для\\u00A0вашего бизнеса',
    description: 'Полная автоматизация рутинных задач с\\u00A0помощью искусственного интеллекта. Экономьте время и\\u00A0увеличивайте прибыль.',
    tabs: tabsWithContent,
    defaultActiveTab: 'communications'
  }
}`,...n.parameters?.docs?.source},description:{story:"MainHero with custom title and description",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultActiveTab: 'communications'
  }
}`,...o.parameters?.docs?.source},description:{story:"MainHero without content (empty tabs)",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: tabsWithRealContent,
    defaultActiveTab: 'communications'
  }
}`,...s.parameters?.docs?.source},description:{story:"MainHero with real Communications illustration",...s.parameters?.docs?.description}}};const T=["Default","PricingActive","AdvertisingActive","CustomText","EmptyContent","WithCommunicationsIllustration"];export{a as AdvertisingActive,n as CustomText,e as Default,o as EmptyContent,i as PricingActive,s as WithCommunicationsIllustration,T as __namedExportsOrder,y as default};
