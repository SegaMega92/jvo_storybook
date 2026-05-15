import{j as l}from"./iframe-BoinLcQy.js";import{P as e}from"./index-Y_KbqFHJ.js";import{c as a}from"./chevron-right-CwMpT2Px.js";import"./preload-helper-D7k33qEn.js";const _="_button_1ty41_3",z="_icon_1ty41_67",t={button:_,"button--default":"_button--default_1ty41_23","button--primary":"_button--primary_1ty41_32","button--ghost":"_button--ghost_1ty41_41","button--small":"_button--small_1ty41_51","button--medium":"_button--medium_1ty41_56","button--large":"_button--large_1ty41_61",icon:z};function c({icon:u,ariaLabel:m,onClick:y,href:d,variant:b="default",size:v="medium",className:h="",...p}){const g=[t.button,t[`button--${b}`],t[`button--${v}`],h].filter(Boolean).join(" "),f=typeof u=="string"?l.jsx("img",{src:u,alt:"",className:t.icon}):u;return d?l.jsx("a",{href:d,className:g,"aria-label":m,...p,children:f}):l.jsx("button",{type:"button",className:g,"aria-label":m,onClick:y,...p,children:f})}c.propTypes={icon:e.oneOfType([e.string,e.node]).isRequired,ariaLabel:e.string.isRequired,onClick:e.func,href:e.string,variant:e.oneOf(["default","primary","ghost"]),size:e.oneOf(["small","medium","large"]),className:e.string};c.__docgenInfo={description:`IconButton - круглая кнопка с иконкой
Используется для навигации, закрытия и других действий`,methods:[],displayName:"IconButton",props:{variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'primary'",computed:!1},{value:"'ghost'",computed:!1}]},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},icon:{description:"",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0},ariaLabel:{description:"",type:{name:"string"},required:!0},onClick:{description:"",type:{name:"func"},required:!1},href:{description:"",type:{name:"string"},required:!1}}};const N={title:"Components/IconButton",component:c,parameters:{layout:"centered",docs:{description:{component:"Кнопка с иконкой. Варианты: default, primary, ghost. Размеры: small, medium, large."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","ghost"]},size:{control:"select",options:["small","medium","large"]}}},r={args:{icon:a,ariaLabel:"Следующий",variant:"default",size:"medium"}},n={args:{icon:a,ariaLabel:"Следующий",variant:"primary",size:"medium"}},o={args:{icon:a,ariaLabel:"Следующий",variant:"ghost",size:"medium"}},s={args:{icon:a,ariaLabel:"Следующий",variant:"default",size:"large"}},i={args:{icon:a,ariaLabel:"Следующий",variant:"default",size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: chevronRight,
    ariaLabel: 'Следующий',
    variant: 'default',
    size: 'medium'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: chevronRight,
    ariaLabel: 'Следующий',
    variant: 'primary',
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: chevronRight,
    ariaLabel: 'Следующий',
    variant: 'ghost',
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: chevronRight,
    ariaLabel: 'Следующий',
    variant: 'default',
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: chevronRight,
    ariaLabel: 'Следующий',
    variant: 'default',
    size: 'small'
  }
}`,...i.parameters?.docs?.source}}};const S=["ChevronRight","Primary","Ghost","Large","Small"];export{r as ChevronRight,o as Ghost,s as Large,n as Primary,i as Small,S as __namedExportsOrder,N as default};
