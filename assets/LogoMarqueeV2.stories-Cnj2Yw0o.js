import{j as n}from"./iframe-B0LsbAY7.js";import{L as d}from"./index-C38YdXOL.js";import"./preload-helper-D7k33qEn.js";import"./index-DaL7GeS7.js";const m={title:"Components/LogoMarqueeV2",component:d,parameters:{layout:"fullscreen"},argTypes:{variant:{control:"select",options:["fixed","fluid","centered"]},speed:{control:{type:"range",min:5,max:60,step:5}}}},e={args:{title:"Нам доверяют",variant:"fluid",speed:20}},r={args:{title:"Нам доверяют",variant:"fixed",speed:20},decorators:[o=>n.jsx("div",{style:{background:"#f5f5f5",padding:"40px 20px"},children:n.jsx(o,{})})]},a={args:{title:"Наши клиенты",variant:"fluid",speed:40}},s={args:{title:"Партнёры",variant:"fluid",speed:10}},t={args:{title:"Используется ведущими брендами",variant:"centered",speed:120}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Используется ведущими брендами',
    variant: 'centered',
    speed: 120
  }
}`,...t.parameters?.docs?.source}}};const u=["Fluid","Fixed","SlowSpeed","FastSpeed","Centered"];export{t as Centered,s as FastSpeed,r as Fixed,e as Fluid,a as SlowSpeed,u as __namedExportsOrder,m as default};
