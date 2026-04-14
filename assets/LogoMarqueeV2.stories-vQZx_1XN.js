import{j as t}from"./iframe-BAVUJXS1.js";import{L as n}from"./index-9Gv6ZjNQ.js";import"./preload-helper-D7k33qEn.js";import"./index-BEjEDMf8.js";const l={title:"Components/LogoMarqueeV2",component:n,parameters:{layout:"fullscreen"},argTypes:{variant:{control:"select",options:["fixed","fluid"]},speed:{control:{type:"range",min:5,max:60,step:5}}}},e={args:{title:"Нам доверяют",variant:"fluid",speed:20}},r={args:{title:"Нам доверяют",variant:"fixed",speed:20},decorators:[o=>t.jsx("div",{style:{background:"#f5f5f5",padding:"40px 20px"},children:t.jsx(o,{})})]},a={args:{title:"Наши клиенты",variant:"fluid",speed:40}},s={args:{title:"Партнёры",variant:"fluid",speed:10}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Нам доверяют',
    variant: 'fluid',
    speed: 20
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Нам доверяют',
    variant: 'fixed',
    speed: 20
  },
  decorators: [Story => <div style={{
    background: '#f5f5f5',
    padding: '40px 20px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Наши клиенты',
    variant: 'fluid',
    speed: 40
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Партнёры',
    variant: 'fluid',
    speed: 10
  }
}`,...s.parameters?.docs?.source}}};const u=["Fluid","Fixed","SlowSpeed","FastSpeed"];export{s as FastSpeed,r as Fixed,e as Fluid,a as SlowSpeed,u as __namedExportsOrder,l as default};
