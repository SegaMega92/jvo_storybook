import{j as d}from"./iframe-BqwCuukD.js";import{B as l}from"./index-DIEmmgmK.js";import"./preload-helper-D7k33qEn.js";import"./index-CW_be3JN.js";const y={title:"Components/Button",component:l,parameters:{layout:"centered",backgrounds:{default:"light"},docs:{description:{component:"Основная кнопка. Поддерживает варианты primary, secondary, outline, ghost и три размера."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost"]},size:{control:"select",options:["small","medium","large"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},r={args:{children:"Оставить заявку",variant:"primary",size:"medium"}},e={args:{children:"Оставить заявку на демо",variant:"secondary",size:"large"}},a={args:{children:"Войти",variant:"outline",size:"medium"}},s={args:{children:"Кнопка",variant:"primary",size:"small"}},n={args:{children:"Оставить заявку на демо",variant:"primary",size:"large"}},o={args:{children:"Недоступно",variant:"primary",disabled:!0}},i={args:{children:"Оставить заявку",variant:"primary",fullWidth:!0},decorators:[m=>d.jsx("div",{style:{width:"400px"},children:d.jsx(m,{})})]},t={args:{children:"Перейти на страницу",variant:"secondary",size:"large",href:"#demo"}},c={args:{children:"Оставить заявку",variant:"primary",size:"medium",href:"#contact"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Оставить заявку',
    variant: 'primary',
    size: 'medium'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Оставить заявку на демо',
    variant: 'secondary',
    size: 'large'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Войти',
    variant: 'outline',
    size: 'medium'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Кнопка',
    variant: 'primary',
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Оставить заявку на демо',
    variant: 'primary',
    size: 'large'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Недоступно',
    variant: 'primary',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Оставить заявку',
    variant: 'primary',
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Перейти на страницу',
    variant: 'secondary',
    size: 'large',
    href: '#demo'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Оставить заявку',
    variant: 'primary',
    size: 'medium',
    href: '#contact'
  }
}`,...c.parameters?.docs?.source}}};const v=["Primary","Secondary","Outline","Small","Large","Disabled","FullWidth","AsLink","PrimaryLink"];export{t as AsLink,o as Disabled,i as FullWidth,n as Large,a as Outline,r as Primary,c as PrimaryLink,e as Secondary,s as Small,v as __namedExportsOrder,y as default};
