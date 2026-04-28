import{j as e}from"./iframe-04hdCSuO.js";import{H as s}from"./index-C45PeXHR.js";import"./preload-helper-D7k33qEn.js";import"./index-t2m7DNX3.js";const c={title:"Sections/Header",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"light"},docs:{description:{component:"Фиксированная шапка сайта с навигацией, телефоном и кнопками входа/CTA. Адаптивная — на мобильном бургер-меню."}}},tags:["autodocs"]},n={args:{},decorators:[r=>e.jsxs("div",{style:{minHeight:"200px",paddingTop:"100px"},children:[e.jsx(r,{}),e.jsx("div",{style:{padding:"24px",color:"#505050"},children:"Контент страницы под шапкой..."})]})]},o={args:{navItems:[{label:"Продукты",href:"#",dropdown:[{label:"Продукт 1",href:"#product1"},{label:"Продукт 2",href:"#product2"}]},{label:"О компании",href:"#about"},{label:"Контакты",href:"#contacts"}],phone:"+7 800 555-35-35",ctaText:"Начать",loginText:"Кабинет"},decorators:[r=>e.jsx("div",{style:{minHeight:"200px",paddingTop:"100px"},children:e.jsx(r,{})})]},t={args:{},parameters:{viewport:{defaultViewport:"mobile1"}},decorators:[r=>e.jsxs("div",{style:{minHeight:"400px",paddingTop:"80px"},children:[e.jsx(r,{}),e.jsx("div",{style:{padding:"16px",color:"#505050",fontSize:"14px"},children:"На мобильном отображается бургер-меню. Нажмите на него, чтобы открыть навигацию."})]})]},a={args:{},parameters:{viewport:{defaultViewport:"tablet"}},decorators:[r=>e.jsx("div",{style:{minHeight:"300px",paddingTop:"80px"},children:e.jsx(r,{})})]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <div style={{
    minHeight: '200px',
    paddingTop: '100px'
  }}>
        <Story />
        <div style={{
      padding: '24px',
      color: '#505050'
    }}>
          Контент страницы под шапкой...
        </div>
      </div>]
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    navItems: [{
      label: 'Продукты',
      href: '#',
      dropdown: [{
        label: 'Продукт 1',
        href: '#product1'
      }, {
        label: 'Продукт 2',
        href: '#product2'
      }]
    }, {
      label: 'О компании',
      href: '#about'
    }, {
      label: 'Контакты',
      href: '#contacts'
    }],
    phone: '+7 800 555-35-35',
    ctaText: 'Начать',
    loginText: 'Кабинет'
  },
  decorators: [Story => <div style={{
    minHeight: '200px',
    paddingTop: '100px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  decorators: [Story => <div style={{
    minHeight: '400px',
    paddingTop: '80px'
  }}>
        <Story />
        <div style={{
      padding: '16px',
      color: '#505050',
      fontSize: '14px'
    }}>
          На мобильном отображается бургер-меню. Нажмите на него, чтобы открыть навигацию.
        </div>
      </div>]
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  },
  decorators: [Story => <div style={{
    minHeight: '300px',
    paddingTop: '80px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};const m=["Default","CustomLinks","Mobile","Tablet"];export{o as CustomLinks,n as Default,t as Mobile,a as Tablet,m as __namedExportsOrder,c as default};
