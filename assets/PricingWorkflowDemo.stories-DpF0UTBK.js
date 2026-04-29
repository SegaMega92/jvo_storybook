import{j as r}from"./iframe-CoxBShLE.js";import{P as s}from"./index-C56yn-Fd.js";import"./preload-helper-D7k33qEn.js";import"./index-Cfgfcm3k.js";import"./agent-icon-CIxum0nM.js";import"./agent-logo-AJ-EYvUz.js";const l={title:"Illustrations/PricingWorkflowDemo",component:s,parameters:{layout:"centered",backgrounds:{default:"violet-light"},docs:{description:{component:"Интерактивная иллюстрация для Агента ценообразования. Показывает процесс автоматизации: клик на кнопку → печатающийся текст → пошаговый алгоритм репрайсинга."}}},tags:["autodocs"],argTypes:{typingSpeed:{control:{type:"range",min:10,max:100,step:5},description:"Скорость печати текста (мс на символ)"},stepDelay:{control:{type:"range",min:100,max:1e3,step:50},description:"Задержка между появлением шагов (мс)"}}},t={args:{typingSpeed:25,stepDelay:400},decorators:[e=>r.jsx("div",{style:{width:"400px",height:"400px",position:"relative",background:"linear-gradient(135deg, rgba(255, 143, 218, 0.3) 0%, rgba(231, 161, 253, 0.2) 50%, rgba(246, 243, 254, 1) 100%)",borderRadius:"16px"},children:r.jsx(e,{})})]},a={args:{typingSpeed:10,stepDelay:150},decorators:[e=>r.jsx("div",{style:{width:"400px",height:"400px",position:"relative",background:"linear-gradient(135deg, rgba(255, 143, 218, 0.3) 0%, rgba(231, 161, 253, 0.2) 50%, rgba(246, 243, 254, 1) 100%)",borderRadius:"16px"},children:r.jsx(e,{})})]},o={args:{typingSpeed:50,stepDelay:800},decorators:[e=>r.jsx("div",{style:{width:"400px",height:"400px",position:"relative",background:"linear-gradient(135deg, rgba(255, 143, 218, 0.3) 0%, rgba(231, 161, 253, 0.2) 50%, rgba(246, 243, 254, 1) 100%)",borderRadius:"16px"},children:r.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    typingSpeed: 25,
    stepDelay: 400
  },
  decorators: [Story => <div style={{
    width: '400px',
    height: '400px',
    position: 'relative',
    background: 'linear-gradient(135deg, rgba(255, 143, 218, 0.3) 0%, rgba(231, 161, 253, 0.2) 50%, rgba(246, 243, 254, 1) 100%)',
    borderRadius: '16px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source},description:{story:'Стандартный вид — кликните "Автоматизировать" для запуска',...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    typingSpeed: 10,
    stepDelay: 150
  },
  decorators: [Story => <div style={{
    width: '400px',
    height: '400px',
    position: 'relative',
    background: 'linear-gradient(135deg, rgba(255, 143, 218, 0.3) 0%, rgba(231, 161, 253, 0.2) 50%, rgba(246, 243, 254, 1) 100%)',
    borderRadius: '16px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source},description:{story:"Быстрая анимация — для тестирования",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    typingSpeed: 50,
    stepDelay: 800
  },
  decorators: [Story => <div style={{
    width: '400px',
    height: '400px',
    position: 'relative',
    background: 'linear-gradient(135deg, rgba(255, 143, 218, 0.3) 0%, rgba(231, 161, 253, 0.2) 50%, rgba(246, 243, 254, 1) 100%)',
    borderRadius: '16px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source},description:{story:"Медленная анимация — для демонстрации",...o.parameters?.docs?.description}}};const m=["Default","Fast","Slow"];export{t as Default,a as Fast,o as Slow,m as __namedExportsOrder,l as default};
