import{j as t}from"./iframe-Bs7tJ9XX.js";import{P as e}from"./index-WUrUDGBu.js";const m="_spacer_1xtqn_3",o={spacer:m},p={xs:24,sm:40,md:60,lg:80,xl:120};function r({size:s="md",background:a}){const n=typeof s=="number"?s:p[s]||p.md;return t.jsx("div",{className:o.spacer,style:{"--spacer-height":`${n}px`,...a&&{background:a}},"aria-hidden":"true"})}r.propTypes={size:e.oneOfType([e.number,e.oneOf(["xs","sm","md","lg","xl"])]),background:e.string};r.__docgenInfo={description:`Spacer - компонент для управляемых отступов между секциями

Использование:
  <Spacer size={72} />                    // кастомное значение в пикселях
  <Spacer size="lg" />                    // пресет (80px)
  <Spacer size="xl" />                    // пресет (120px)
  <Spacer size="md" background="#000" />  // с фоном`,methods:[],displayName:"Spacer",props:{size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:"'xs'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]}]},required:!1},background:{description:"",type:{name:"string"},required:!1}}};export{r as S};
