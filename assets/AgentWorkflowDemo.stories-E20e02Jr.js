import{j as o}from"./iframe-BIY3-FXo.js";import{A as a}from"./index-CFyn2B9b.js";import"./preload-helper-D7k33qEn.js";import"./index-uaVFibOh.js";import"./agent-icon-CIxum0nM.js";import"./agent-logo-AJ-EYvUz.js";const g={title:"Illustrations/AgentWorkflowDemo",component:a,parameters:{layout:"centered",backgrounds:{default:"light"},docs:{description:{component:"Интерактивная демонстрация рабочего процесса агента. Показывает автоматизацию задачи с эффектом печатания."}}},tags:["autodocs"],decorators:[s=>o.jsx("div",{style:{width:"420px",height:"420px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",borderRadius:"19px",overflow:"hidden",background:"linear-gradient(135deg, rgba(253, 224, 255, 0.5) 0%, rgba(234, 215, 254, 0.5) 100%)"},children:o.jsx(s,{})})],argTypes:{typingSpeed:{control:{type:"range",min:10,max:100,step:5},description:"Скорость печатания (мс между символами)"},onStart:{action:"started"},onComplete:{action:"completed"},onReset:{action:"reset"}}},e={args:{typingSpeed:25}},r={args:{typingSpeed:60}},t={args:{typingSpeed:15}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    typingSpeed: 25
  }
}`,...e.parameters?.docs?.source},description:{story:`Стандартная скорость печатания (25мс)
Нажмите "Автоматизировать" для запуска анимации`,...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    typingSpeed: 60
  }
}`,...r.parameters?.docs?.source},description:{story:"Медленная скорость печатания (60мс)",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    typingSpeed: 15
  }
}`,...t.parameters?.docs?.source},description:{story:"Быстрая скорость печатания (15мс)",...t.parameters?.docs?.description}}};const l=["Default","SlowTyping","FastTyping"];export{e as Default,t as FastTyping,r as SlowTyping,l as __namedExportsOrder,g as default};
