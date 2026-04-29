import{j as t}from"./iframe-B0LsbAY7.js";import{S as d}from"./index-B_HI4FGW.js";import{t as m}from"./tag-agent-DCj9of_z.js";import"./preload-helper-D7k33qEn.js";import"./index-DaL7GeS7.js";import"./index-Dx1gSt22.js";const y={title:"Components/SectionHeader",component:d,parameters:{layout:"fullscreen",docs:{description:{component:"Заголовок секции. Поддерживает тег с иконкой, заголовок (h1/h2/h3), подзаголовок, кнопку и кастомный контент."}}},tags:["autodocs"],argTypes:{as:{control:"select",options:["h1","h2","h3"]},buttonVariant:{control:"select",options:["primary","secondary","outline","ghost"]},centered:{control:"boolean"}}},e={args:{tag:"Агент коммуникаций",tagIcon:m,title:"Ответы на отзывы, вопросы и кросс-продажи",subtitle:"Автоматизируйте общение с покупателями, превращайте отзывы в повторные продажи и получайте готовую аналитику для бизнеса"}},r={args:{tag:"Новая функция",title:"Автоматизируйте продажи в социальных сетях",subtitle:"Превращайте комментарии и сообщения в продажи с помощью умных автоответов и персонализированных воронок."}},n={args:{tag:"Начните сегодня",title:"Готовы увеличить продажи?",subtitle:"Присоединяйтесь к тысячам компаний, которые уже используют JVO для автоматизации продаж.",buttonText:"Попробовать бесплатно",buttonHref:"#demo",buttonVariant:"primary"}},a={args:{title:"Почему выбирают JVO?",subtitle:"Простая интеграция, мощные инструменты и результаты с первого дня."}},o={args:{tag:"Возможности",title:"Всё что нужно для роста",subtitle:"Полный набор инструментов для автоматизации маркетинга и продаж в социальных сетях.",as:"h2"}},s={args:{tag:"Кейс",title:"Как магазин одежды увеличил продажи на 340%",subtitle:"История успеха нашего клиента и пошаговый разбор стратегии.",centered:!1}},i={args:{tag:"Интеграции",title:"Работает с вашими любимыми инструментами",subtitle:"Подключите JVO к CRM, мессенджерам и другим сервисам за пару кликов."},render:p=>t.jsx(d,{...p,children:t.jsx("div",{style:{display:"flex",gap:"24px",justifyContent:"center",marginTop:"16px",flexWrap:"wrap"},children:["Instagram","Telegram","WhatsApp","VK"].map(l=>t.jsx("div",{style:{padding:"12px 24px",background:"#f3f4f6",borderRadius:"8px",fontFamily:"var(--font-family-primary)",fontSize:"14px",fontWeight:500,color:"#6b7280"},children:l},l))})})},c={args:{tag:"Premium",title:"Эксклюзивные возможности",subtitle:"Получите доступ к продвинутым инструментам аналитики и автоматизации.",buttonText:"Узнать больше",buttonHref:"#premium",buttonVariant:"outline"},decorators:[p=>t.jsxs("div",{style:{background:"#300247"},children:[t.jsx("style",{children:`
          .dark-section { background: transparent !important; }
          .dark-section h1, .dark-section h2, .dark-section h3 { color: #ffffff !important; }
          .dark-section p { color: rgba(255, 255, 255, 0.8) !important; }
        `}),t.jsx("div",{className:"dark-section",children:t.jsx(p,{})})]})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    tag: 'Агент коммуникаций',
    tagIcon: tagIconAgent,
    title: 'Ответы на отзывы, вопросы и кросс-продажи',
    subtitle: 'Автоматизируйте общение с покупателями, превращайте отзывы в повторные продажи и получайте готовую аналитику для бизнеса'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tag: 'Новая функция',
    title: 'Автоматизируйте продажи в социальных сетях',
    subtitle: 'Превращайте комментарии и сообщения в продажи с помощью умных автоответов и персонализированных воронок.'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tag: 'Начните сегодня',
    title: 'Готовы увеличить продажи?',
    subtitle: 'Присоединяйтесь к тысячам компаний, которые уже используют JVO для автоматизации продаж.',
    buttonText: 'Попробовать бесплатно',
    buttonHref: '#demo',
    buttonVariant: 'primary'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Почему выбирают JVO?',
    subtitle: 'Простая интеграция, мощные инструменты и результаты с первого дня.'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tag: 'Возможности',
    title: 'Всё что нужно для роста',
    subtitle: 'Полный набор инструментов для автоматизации маркетинга и продаж в социальных сетях.',
    as: 'h2'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tag: 'Кейс',
    title: 'Как магазин одежды увеличил продажи на 340%',
    subtitle: 'История успеха нашего клиента и пошаговый разбор стратегии.',
    centered: false
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    tag: 'Интеграции',
    title: 'Работает с вашими любимыми инструментами',
    subtitle: 'Подключите JVO к CRM, мессенджерам и другим сервисам за пару кликов.'
  },
  render: args => <SectionHeader {...args}>
      <div style={{
      display: 'flex',
      gap: '24px',
      justifyContent: 'center',
      marginTop: '16px',
      flexWrap: 'wrap'
    }}>
        {['Instagram', 'Telegram', 'WhatsApp', 'VK'].map(name => <div key={name} style={{
        padding: '12px 24px',
        background: '#f3f4f6',
        borderRadius: '8px',
        fontFamily: 'var(--font-family-primary)',
        fontSize: '14px',
        fontWeight: 500,
        color: '#6b7280'
      }}>
            {name}
          </div>)}
      </div>
    </SectionHeader>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tag: 'Premium',
    title: 'Эксклюзивные возможности',
    subtitle: 'Получите доступ к продвинутым инструментам аналитики и автоматизации.',
    buttonText: 'Узнать больше',
    buttonHref: '#premium',
    buttonVariant: 'outline'
  },
  decorators: [Story => <div style={{
    background: '#300247'
  }}>
        <style>{\`
          .dark-section { background: transparent !important; }
          .dark-section h1, .dark-section h2, .dark-section h3 { color: #ffffff !important; }
          .dark-section p { color: rgba(255, 255, 255, 0.8) !important; }
        \`}</style>
        <div className="dark-section">
          <Story />
        </div>
      </div>]
}`,...c.parameters?.docs?.source}}};const k=["Default","WithoutIcon","WithButton","WithoutTag","AsH2","LeftAligned","WithCustomContent","DarkTheme"];export{o as AsH2,c as DarkTheme,e as Default,s as LeftAligned,n as WithButton,i as WithCustomContent,r as WithoutIcon,a as WithoutTag,k as __namedExportsOrder,y as default};
