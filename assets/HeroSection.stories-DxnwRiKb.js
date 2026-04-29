import{j as e}from"./iframe-B0LsbAY7.js";import{P as t}from"./index-DaL7GeS7.js";import{B as b}from"./index-Dx1gSt22.js";import{A as w}from"./index-m0T3l6WT.js";import"./preload-helper-D7k33qEn.js";const x="_hero_lwrxw_3",v="_hero__container_lwrxw_14",I="_hero__badge_lwrxw_27",j="_hero__badgeJvo_lwrxw_34",V="_hero__badgeSeparator_lwrxw_41",y="_hero__badgeIcon_lwrxw_48",A="_hero__title_lwrxw_55",S="_hero__button_lwrxw_83",N="_hero__interface_lwrxw_88",k="_hero__interfaceImage_lwrxw_94",B="_hero__subtitle_lwrxw_102",r={hero:x,hero__container:v,hero__badge:I,hero__badgeJvo:j,hero__badgeSeparator:V,hero__badgeIcon:y,hero__title:A,hero__button:S,hero__interface:N,hero__interfaceImage:k,hero__subtitle:B},T="/jvo_storybook/assets/jvo-agent-CVuxaw5l.svg",J="/jvo_storybook/assets/wb-logo-C-T38rN0.svg",D="/jvo_storybook/assets/ozon-logo-BkXaAkWH.svg",H="/jvo_storybook/assets/hero-interface-CitoGSg5.png";function u({title:_="Продажи на маркетплейсах под контролем. Всегда.",subtitle:d="JVO Агент — ваш персональный AI-менеджер, который управляет ценами, отзывами, отвечает на вопросы и анализирует данные. Работает 24/7, не ошибается и не устаёт. Формирует стратегии сам — исходя из заданных вами правил.",buttonText:g="Оставить заявку на демо",buttonHref:p="#demo",showBadge:m=!0,showInterface:h=!0,showAurora:f=!0}){return e.jsxs("section",{className:r.hero,children:[f&&e.jsx(w,{}),e.jsxs("div",{className:r.hero__container,children:[m&&e.jsxs("div",{className:r.hero__badge,children:[e.jsx("img",{src:T,alt:"JVO Агент",className:r.hero__badgeJvo}),e.jsx("span",{className:r.hero__badgeSeparator,children:"×"}),e.jsx("img",{src:J,alt:"Wildberries",className:r.hero__badgeIcon}),e.jsx("img",{src:D,alt:"Ozon",className:r.hero__badgeIcon})]}),e.jsx("h1",{className:r.hero__title,children:_}),e.jsx(b,{href:p,variant:"secondary",size:"large",className:r.hero__button,children:g}),h&&e.jsx("div",{className:r.hero__interface,children:e.jsx("img",{src:H,alt:"Интерфейс JVO Агента",className:r.hero__interfaceImage,loading:"lazy"})}),e.jsx("p",{className:r.hero__subtitle,children:d})]})]})}u.propTypes={title:t.string,subtitle:t.string,buttonText:t.string,buttonHref:t.string,showBadge:t.bool,showInterface:t.bool,showAurora:t.bool};u.__docgenInfo={description:`JVO Hero Section - based on Figma design
Light background with aurora gradient`,methods:[],displayName:"HeroSection",props:{title:{defaultValue:{value:"'Продажи на маркетплейсах под контролем. Всегда.'",computed:!1},description:"",type:{name:"string"},required:!1},subtitle:{defaultValue:{value:"'JVO Агент — ваш персональный AI-менеджер, который управляет ценами, отзывами, отвечает на вопросы и анализирует данные. Работает 24/7, не ошибается и не устаёт. Формирует стратегии сам — исходя из заданных вами правил.'",computed:!1},description:"",type:{name:"string"},required:!1},buttonText:{defaultValue:{value:"'Оставить заявку на демо'",computed:!1},description:"",type:{name:"string"},required:!1},buttonHref:{defaultValue:{value:"'#demo'",computed:!1},description:"",type:{name:"string"},required:!1},showBadge:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},showInterface:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},showAurora:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1}}};const L={title:"Sections/HeroSection",component:u,parameters:{layout:"fullscreen",backgrounds:{default:"light"},docs:{description:{component:"Главный экран лендинга с заголовком, подзаголовком, CTA-кнопкой и декоративными элементами (aurora, badge, interface preview)."}}},tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},buttonText:{control:"text"},showBadge:{control:"boolean"},showInterface:{control:"boolean"},showAurora:{control:"boolean"}}},o={args:{title:"Продажи на маркетплейсах под контролем. Всегда.",subtitle:"JVO Агент — ваш персональный AI-менеджер, который управляет ценами, отзывами, отвечает на вопросы и анализирует данные. Работает 24/7, не ошибается и не устаёт. Формирует стратегии сам — исходя из заданных вами правил.",buttonText:"Оставить заявку на демо",buttonHref:"#demo",showBadge:!0,showInterface:!0,showAurora:!0}},a={args:{...o.args,showAurora:!1}},s={args:{...o.args,showInterface:!1}},n={args:{...o.args,showBadge:!1}},c={args:o.args,parameters:{viewport:{defaultViewport:"mobile"}}},l={args:o.args,parameters:{viewport:{defaultViewport:"tablet"}}},i={args:o.args,parameters:{viewport:{defaultViewport:"desktop"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Продажи на маркетплейсах под контролем. Всегда.',
    subtitle: 'JVO Агент — ваш персональный AI-менеджер, который управляет ценами, отзывами, отвечает на вопросы и анализирует данные. Работает 24/7, не ошибается и не устаёт. Формирует стратегии сам — исходя из заданных вами правил.',
    buttonText: 'Оставить заявку на демо',
    buttonHref: '#demo',
    showBadge: true,
    showInterface: true,
    showAurora: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showAurora: false
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showInterface: false
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showBadge: false
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: Default.args,
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: Default.args,
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: Default.args,
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}`,...i.parameters?.docs?.source}}};const E=["Default","WithoutAurora","WithoutInterface","WithoutBadge","Mobile","Tablet","Desktop"];export{o as Default,i as Desktop,c as Mobile,l as Tablet,a as WithoutAurora,n as WithoutBadge,s as WithoutInterface,E as __namedExportsOrder,L as default};
