import{j as a}from"./iframe-BKGtkWGe.js";import{P as r}from"./index-BwdElD4v.js";import"./preload-helper-D7k33qEn.js";const T="_h1_18107_8",S="_h2_18107_34",L="_h3_18107_60",B="_subtitle_18107_83",j="_bodyLarge_18107_95",V="_body_18107_95",H="_bodySmall_18107_129",W="_caption_18107_140",O="_secondary_18107_155",q="_center_18107_160",o={h1:T,h2:S,h3:L,subtitle:B,bodyLarge:j,body:V,bodySmall:H,caption:W,secondary:O,center:q,"maxWidth--sm":"_maxWidth--sm_18107_165","maxWidth--md":"_maxWidth--md_18107_169","maxWidth--lg":"_maxWidth--lg_18107_173"};function e({children:u,variant:y="body",as:h,secondary:g=!1,center:b=!1,maxWidth:m,className:v="",...f}){const _=h||{h1:"h1",h2:"h2",h3:"h3",subtitle:"p",bodyLarge:"p",body:"p",bodySmall:"p",caption:"span"}[y]||"p",x=[o[y],g&&o.secondary,b&&o.center,m&&o[`maxWidth--${m}`],v].filter(Boolean).join(" ");return a.jsx(_,{className:x,...f,children:u})}e.propTypes={children:r.node.isRequired,variant:r.oneOf(["h1","h2","h3","subtitle","bodyLarge","body","bodySmall","caption"]),as:r.elementType,secondary:r.bool,center:r.bool,maxWidth:r.oneOf(["sm","md","lg"]),className:r.string};e.__docgenInfo={description:`Typography component for consistent text styling
Based on JVO Figma design system`,methods:[],displayName:"Typography",props:{variant:{defaultValue:{value:"'body'",computed:!1},description:"",type:{name:"enum",value:[{value:"'h1'",computed:!1},{value:"'h2'",computed:!1},{value:"'h3'",computed:!1},{value:"'subtitle'",computed:!1},{value:"'bodyLarge'",computed:!1},{value:"'body'",computed:!1},{value:"'bodySmall'",computed:!1},{value:"'caption'",computed:!1}]},required:!1},secondary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},center:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0},as:{description:"",type:{name:"elementType"},required:!1},maxWidth:{description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1}}};const E={title:"Foundations/Typography",component:e,parameters:{layout:"padded",backgrounds:{default:"light"},docs:{description:{component:"Компонент типографики. Поддерживает варианты от h1 до caption с настройками выравнивания и ширины."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["h1","h2","h3","subtitle","bodyLarge","body","bodySmall","caption"]},secondary:{control:"boolean"},center:{control:"boolean"},maxWidth:{control:"select",options:[void 0,"sm","md","lg"]}}},t={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsx(e,{variant:"h1",children:"H1 — Продажи на маркетплейсах"}),a.jsx(e,{variant:"h2",children:"H2 — Автоматизация карточек"}),a.jsx(e,{variant:"h3",children:"H3 — Умное ценообразование"}),a.jsx(e,{variant:"subtitle",children:"Subtitle — JVO Агент — ваш персональный AI-менеджер, который управляет ценами"}),a.jsx(e,{variant:"bodyLarge",children:"Body Large — Анализирует данные и формирует стратегии исходя из заданных правил"}),a.jsx(e,{variant:"body",children:"Body — Работает 24/7, не ошибается и не устаёт"}),a.jsx(e,{variant:"bodySmall",children:"Body Small — Дополнительная информация о сервисе"}),a.jsx(e,{variant:"caption",children:"Caption — Мелкий текст"})]})},s={args:{children:"Продажи на маркетплейсах под контролем. Всегда.",variant:"h1"}},n={args:{children:"Автоматическое заполнение карточек с помощью AI",variant:"h2"}},d={args:{children:"Умное ценообразование",variant:"h3"}},c={args:{children:"JVO Агент — ваш персональный AI-менеджер, который управляет ценами, отзывами, отвечает на вопросы и анализирует данные.",variant:"subtitle",center:!0,maxWidth:"md"}},l={args:{children:"Загрузите изображения или артикулы конкурентов — JVO Агент сам заполнит все поля карточки на основе лучших практик.",variant:"bodyLarge"}},i={args:{children:"Работает 24/7, не ошибается и не устаёт.",variant:"body"}},p={args:{children:"✔ Автоматический ответ на отзывы",variant:"bodyLarge",secondary:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Typography variant="h1">H1 — Продажи на маркетплейсах</Typography>
      <Typography variant="h2">H2 — Автоматизация карточек</Typography>
      <Typography variant="h3">H3 — Умное ценообразование</Typography>
      <Typography variant="subtitle">
        Subtitle — JVO Агент — ваш персональный AI-менеджер, который управляет ценами
      </Typography>
      <Typography variant="bodyLarge">
        Body Large — Анализирует данные и формирует стратегии исходя из заданных правил
      </Typography>
      <Typography variant="body">
        Body — Работает 24/7, не ошибается и не устаёт
      </Typography>
      <Typography variant="bodySmall">
        Body Small — Дополнительная информация о сервисе
      </Typography>
      <Typography variant="caption">Caption — Мелкий текст</Typography>
    </div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Продажи на маркетплейсах под контролем. Всегда.',
    variant: 'h1'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Автоматическое заполнение карточек с помощью AI',
    variant: 'h2'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Умное ценообразование',
    variant: 'h3'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'JVO Агент — ваш персональный AI-менеджер, который управляет ценами, отзывами, отвечает на вопросы и анализирует данные.',
    variant: 'subtitle',
    center: true,
    maxWidth: 'md'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Загрузите изображения или артикулы конкурентов — JVO Агент сам заполнит все поля карточки на основе лучших практик.',
    variant: 'bodyLarge'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Работает 24/7, не ошибается и не устаёт.',
    variant: 'body'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: '✔ Автоматический ответ на отзывы',
    variant: 'bodyLarge',
    secondary: true
  }
}`,...p.parameters?.docs?.source}}};const C=["AllVariants","H1","H2","H3","Subtitle","BodyLarge","Body","BodySecondary"];export{t as AllVariants,i as Body,l as BodyLarge,p as BodySecondary,s as H1,n as H2,d as H3,c as Subtitle,C as __namedExportsOrder,E as default};
