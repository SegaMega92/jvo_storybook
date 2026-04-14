import{j as s}from"./iframe-BAVUJXS1.js";import{C as m}from"./index-CCXhMg8N.js";import"./preload-helper-D7k33qEn.js";import"./index-BEjEDMf8.js";import"./chevron-left-BqLDjSPE.js";import"./chevron-right-CwMpT2Px.js";const u="/jvo_storybook/assets/fire-Bc2G8EyU.png",p="/jvo_storybook/assets/cosmobeauty-CBw_TPPa.svg",g="/jvo_storybook/assets/laretto-iNyZ7qlD.svg",l="/jvo_storybook/assets/agroimpex-CEcie6VO.svg",d="/jvo_storybook/assets/cosmobeauty-DgJoXmRG.png",b="/jvo_storybook/assets/laretto-D3Ti2He5.png",x="/jvo_storybook/assets/agroimpex-CFGVOd70.png",k={title:"Sections/CasesSection",component:m,parameters:{layout:"fullscreen",docs:{description:{component:`Секция "Результаты в кейсах" - показывает успешные кейсы клиентов с фото, суммой и категорией.

На десктопе при ховере раскрывается описание и кнопка "к кейсу".
На мобильном - горизонтальный слайдер, тап раскрывает карточку.`}}},tags:["autodocs"]},n=()=>s.jsx("img",{src:u,alt:"",width:"72",height:"72"}),y=()=>s.jsx("img",{src:p,alt:"Cosmobeauty"}),j=()=>s.jsx("img",{src:g,alt:"LARETTO"}),C=()=>s.jsx("img",{src:l,alt:"Agroimpex"}),o=[{image:d,brandLogo:s.jsx(y,{}),brandName:"Cosmobeauty",amount:"+ 10 000 000",category:"Косметика",description:"Заработали 10+ млн рублей за месяц на 30 артикулах косметики",href:"#case-cosmobeauty"},{image:b,brandLogo:s.jsx(j,{}),brandName:"Laretto",amount:"+ 9 878 856",category:"Одежда",description:"Заработали 10+ млн рублей за месяц на 30 артикулах косметики",href:"#case-laretto"},{image:x,brandLogo:s.jsx(C,{}),brandName:"Agroimpex",amount:"+ 34 000 000",category:"Орехи и сухофрукты",description:"Увеличили продажи в 3 раза за счет автоматизации ответов на отзывы",href:"#case-agroimpex"}],e={args:{icon:s.jsx(n,{}),title:"Результаты в кейсах",subtitle:"Описание, про что этот блок, преимущества или фишки, справа показываем демонстрацию того о чём пишем.",cases:o}},t={args:{title:"Результаты в кейсах",subtitle:"Реальные результаты наших клиентов на маркетплейсах",cases:o}},a={args:{icon:s.jsx(n,{}),title:"Наши успешные проекты",subtitle:"Посмотрите, каких результатов достигли наши клиенты",cases:o}},r={args:{icon:s.jsx(n,{}),title:"Результаты в кейсах",subtitle:"Описание блока",cases:o.slice(0,2)}},c={args:{icon:s.jsx(n,{}),title:"Результаты в кейсах",subtitle:"Описание блока",cases:o.map(({description:f,href:h,...i})=>i)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FireIcon />,
    title: 'Результаты в кейсах',
    subtitle: 'Описание, про что этот блок, преимущества или фишки, справа показываем демонстрацию того о чём пишем.',
    cases: defaultCases
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Результаты в кейсах',
    subtitle: 'Реальные результаты наших клиентов на маркетплейсах',
    cases: defaultCases
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FireIcon />,
    title: 'Наши успешные проекты',
    subtitle: 'Посмотрите, каких результатов достигли наши клиенты',
    cases: defaultCases
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FireIcon />,
    title: 'Результаты в кейсах',
    subtitle: 'Описание блока',
    cases: defaultCases.slice(0, 2)
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FireIcon />,
    title: 'Результаты в кейсах',
    subtitle: 'Описание блока',
    cases: defaultCases.map(({
      description,
      href,
      ...rest
    }) => rest)
  }
}`,...c.parameters?.docs?.source}}};const D=["Default","WithoutIcon","CustomTitle","TwoCases","WithoutDescriptions"];export{a as CustomTitle,e as Default,r as TwoCases,c as WithoutDescriptions,t as WithoutIcon,D as __namedExportsOrder,k as default};
