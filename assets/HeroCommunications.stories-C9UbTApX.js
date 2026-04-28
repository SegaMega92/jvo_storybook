import{j as e}from"./iframe-04hdCSuO.js";import{H as i}from"./index-DTzR0yd6.js";import"./preload-helper-D7k33qEn.js";import"./index-t2m7DNX3.js";const p={title:"Illustrations/HeroCommunications",component:i,parameters:{layout:"centered",backgrounds:{default:"gradient",values:[{name:"gradient",value:"linear-gradient(195deg, #ffffff 3%, #fcdaf9 45%, #e2bbff 83%)"}]}}},r={args:{onComplete:()=>console.log("Slider completed!")},decorators:[o=>e.jsx("div",{style:{width:"960px",height:"466px",position:"relative",overflow:"hidden"},children:e.jsx(o,{})})]},t={args:{onComplete:()=>console.log("Slider completed!")},decorators:[o=>e.jsx("div",{style:{width:"700px",height:"400px",position:"relative",overflow:"hidden"},children:e.jsx(o,{})})]},s={args:{onComplete:()=>console.log("Slider completed!")},parameters:{viewport:{defaultViewport:"mobileM"}},decorators:[o=>e.jsx("div",{style:{width:"100%",minHeight:"440px",position:"relative"},children:e.jsx(o,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    onComplete: () => console.log('Slider completed!')
  },
  decorators: [Story => <div style={{
    width: '960px',
    height: '466px',
    position: 'relative',
    overflow: 'hidden'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source},description:{story:"Default state",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onComplete: () => console.log('Slider completed!')
  },
  decorators: [Story => <div style={{
    width: '700px',
    height: '400px',
    position: 'relative',
    overflow: 'hidden'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source},description:{story:"Tablet size",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onComplete: () => console.log('Slider completed!')
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobileM'
    }
  },
  decorators: [Story => <div style={{
    width: '100%',
    minHeight: '440px',
    position: 'relative'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source},description:{story:"Mobile size",...s.parameters?.docs?.description}}};const c=["Default","Tablet","Mobile"];export{r as Default,s as Mobile,t as Tablet,c as __namedExportsOrder,p as default};
