import{j as n}from"./iframe-CtzDGZ8s.js";import{H as s}from"./index-CNav5RyX.js";import"./preload-helper-D7k33qEn.js";import"./index-Cd4XFPMj.js";const m={title:"Sections/HeroAgent",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"light"},docs:{description:{component:"Hero-секция с ИИ-агентом. Заголовок, подзаголовок, CTA-кнопка и контейнер для анимированной иллюстрации с градиентным фоном."}}},tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},badgeText:{control:"text"},buttonText:{control:"text"},buttonHref:{control:"text"},showBadge:{control:"boolean"}}},e={args:{title:`ИИ-агенты для победы
на маркетплейсах`,subtitle:"Находим утечки и точки роста, превращаем их в задачи и выполняем автоматически с помощью ИИ-агентов — 24/7.",badgeText:"Решение № 1 для управления бизнесом в е-commerce *",buttonText:"Получить демо",buttonHref:"#form",showBadge:!0}},r={args:{...e.args},render:i=>n.jsx(s,{...i,children:n.jsx("div",{style:{width:672,maxWidth:"100%",padding:36,background:"rgba(255,255,255,0.85)",borderRadius:24,backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,color:"#999",fontFamily:"var(--font-family-primary)"},children:"Иллюстрация будет здесь"})})},t={args:{...e.args,showBadge:!1}},a={args:e.args,parameters:{viewport:{defaultViewport:"mobile"}}},o={args:e.args,parameters:{viewport:{defaultViewport:"tablet"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'ИИ-агенты для победы\\nна маркетплейсах',
    subtitle: 'Находим утечки и точки роста, превращаем их в задачи и выполняем автоматически с помощью ИИ-агентов — 24/7.',
    badgeText: 'Решение № 1 для управления бизнесом в е-commerce *',
    buttonText: 'Получить демо',
    buttonHref: '#form',
    showBadge: true
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <HeroAgent {...args}>
      <div style={{
      width: 672,
      maxWidth: '100%',
      padding: 36,
      background: 'rgba(255,255,255,0.85)',
      borderRadius: 24,
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      color: '#999',
      fontFamily: 'var(--font-family-primary)'
    }}>
        Иллюстрация будет здесь
      </div>
    </HeroAgent>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showBadge: false
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: Default.args,
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: Default.args,
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}`,...o.parameters?.docs?.source}}};const u=["Default","WithPlaceholder","WithoutBadge","Mobile","Tablet"];export{e as Default,a as Mobile,o as Tablet,r as WithPlaceholder,t as WithoutBadge,u as __namedExportsOrder,m as default};
