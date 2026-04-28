import{j as n}from"./iframe-CtzDGZ8s.js";import{useMDXComponents as c}from"./index-rn_tp8Cs.js";import{M as a,C as r,a as o}from"./blocks-pLf0rISI.js";import"./preload-helper-D7k33qEn.js";import"./index-DueC0LeT.js";function i(l){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...l.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(a,{title:"Foundations/Colors"}),`
`,n.jsx(e.h1,{id:"цветовая-палитра",children:"Цветовая палитра"}),`
`,n.jsx(e.p,{children:"Цвета дизайн-системы JVO из Figma Guideline."}),`
`,n.jsx(e.h2,{id:"base--нейтральные",children:"Base / Нейтральные"}),`
`,n.jsx(r,{children:n.jsx(o,{title:"Base",subtitle:"Основные нейтральные цвета",colors:{black:"#15181f",gray:"#e9ebf0",white:"#ffffff"}})}),`
`,n.jsx(e.h2,{id:"violet",children:"Violet"}),`
`,n.jsx(r,{children:n.jsx(o,{title:"Violet",subtitle:"Основной акцентный цвет",colors:{light:"#ead7fe",main:"#c16ffb",dark:"#300247"}})}),`
`,n.jsx(e.h2,{id:"pink",children:"Pink"}),`
`,n.jsx(r,{children:n.jsx(o,{title:"Pink",subtitle:"Акцент для кнопок и активных состояний",colors:{light:"#ffdbf1",main:"#ff8fda",dark:"#3f0030"}})}),`
`,n.jsx(e.h2,{id:"orange",children:"Orange"}),`
`,n.jsx(r,{children:n.jsx(o,{title:"Orange",subtitle:"Предупреждения и акценты",colors:{light:"#ffdbd2",main:"#ff965f",dark:"#381300"}})}),`
`,n.jsx(e.h2,{id:"red",children:"Red"}),`
`,n.jsx(r,{children:n.jsx(o,{title:"Red",subtitle:"Ошибки и критические состояния",colors:{light:"#fea4a4",main:"#fa4646",dark:"#480404"}})}),`
`,n.jsx(e.h2,{id:"green",children:"Green"}),`
`,n.jsx(r,{children:n.jsx(o,{title:"Green",subtitle:"Успешные состояния",colors:{light:"#d8f995",main:"#b8ee49",dark:"#172104"}})}),`
`,n.jsx(e.h2,{id:"yellow",children:"Yellow"}),`
`,n.jsx(r,{children:n.jsx(o,{title:"Yellow",subtitle:"Информационные сообщения",colors:{light:"#ffecb7",main:"#facf61",dark:"#2a1e01"}})}),`
`,n.jsx(e.h2,{id:"css-переменные",children:"CSS-переменные"}),`
`,n.jsxs(e.p,{children:["Цвета доступны через CSS-переменные в ",n.jsx(e.code,{children:"tokens/tokens.css"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`:root {
  /* Base */
  --color-base-black: #15181f;
  --color-base-gray: #e9ebf0;
  --color-base-white: #ffffff;

  /* Violet */
  --color-violet-light: #ead7fe;
  --color-violet-main: #c16ffb;
  --color-violet-dark: #300247;

  /* Pink */
  --color-pink-light: #ffdbf1;
  --color-pink-main: #ff8fda;
  --color-pink-dark: #3f0030;

  /* Orange */
  --color-orange-light: #ffdbd2;
  --color-orange-main: #ff965f;
  --color-orange-dark: #381300;

  /* Red */
  --color-red-light: #fea4a4;
  --color-red-main: #fa4646;
  --color-red-dark: #480404;

  /* Green */
  --color-green-light: #d8f995;
  --color-green-main: #b8ee49;
  --color-green-dark: #172104;

  /* Yellow */
  --color-yellow-light: #ffecb7;
  --color-yellow-main: #facf61;
  --color-yellow-dark: #2a1e01;

  /* Semantic aliases */
  --color-accent-pink: var(--color-pink-main);
  --color-accent-violet: var(--color-violet-main);
  --color-accent-orange: var(--color-orange-main);
  --color-accent-green: var(--color-green-main);
}
`})}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.h3,{id:"в-компонентах",children:"В компонентах"}),`
`,n.jsx(e.p,{children:"Используйте CSS-переменные для цветов:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.button-primary {
  background: var(--color-pink-main);
  color: var(--color-base-white);
}

.button-secondary {
  background: var(--color-violet-main);
  color: var(--color-base-white);
}

.alert-error {
  background: var(--color-red-light);
  color: var(--color-red-dark);
}

.alert-success {
  background: var(--color-green-light);
  color: var(--color-green-dark);
}
`})}),`
`,n.jsx(e.h3,{id:"контраст-и-доступность",children:"Контраст и доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Текст ",n.jsx(e.code,{children:"#15181f"})," на белом фоне — контраст 15.5:1"]}),`
`,n.jsxs(e.li,{children:["Текст ",n.jsx(e.code,{children:"#ffffff"})," на ",n.jsx(e.code,{children:"#c16ffb"})," — контраст 3.2:1 (только для крупного текста)"]}),`
`,n.jsxs(e.li,{children:["Текст ",n.jsx(e.code,{children:"#ffffff"})," на ",n.jsx(e.code,{children:"#300247"})," — контраст 14.8:1"]}),`
`,n.jsx(e.li,{children:"Текст dark на light backgrounds — всегда достаточный контраст"}),`
`]})]})}function x(l={}){const{wrapper:e}={...c(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(i,{...l})}):i(l)}export{x as default};
