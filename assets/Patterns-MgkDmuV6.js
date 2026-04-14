import{j as n}from"./iframe-BAVUJXS1.js";import{useMDXComponents as d}from"./index-BJ0v4ald.js";import{M as i}from"./blocks-y51iNZ5w.js";import"./preload-helper-D7k33qEn.js";import"./index-CNTbw6Eg.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(i,{title:"Foundations/Patterns"}),`
`,n.jsx(e.h1,{id:"паттерны",children:"Паттерны"}),`
`,n.jsx(e.p,{children:"Декоративные паттерны для фонов."}),`
`,n.jsx(e.h2,{id:"точечный-паттерн",children:"Точечный паттерн"}),`
`,n.jsx(e.p,{children:"Основной паттерн — сетка из полупрозрачных точек, используется поверх градиентов."}),`
`,n.jsx(e.h3,{id:"варианты",children:"Варианты"}),`
`,n.jsxs(e.p,{children:[`| Название | Размер сетки | Использование |
|----------|--------------|---------------|
| `,n.jsx(e.code,{children:"--pattern-dots"}),` | 2×2px | Стандартный (плотный) |
| `,n.jsx(e.code,{children:"--pattern-dots-sparse"}),` | 3×3px | Разреженный |
| `,n.jsx(e.code,{children:"--pattern-dots-extra-sparse"}),` | 4×4px | Очень разреженный |
| `,n.jsx(e.code,{children:"--pattern-dots-dark"})," | 2×2px | Тёмные точки (для светлых фонов) |"]}),`
`,n.jsx(e.h3,{id:"css-переменные",children:"CSS-переменные"}),`
`,n.jsxs(e.p,{children:["Определены в ",n.jsx(e.code,{children:"styles/patterns.css"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`:root {
  --pattern-dots: url("data:image/svg+xml,...");
  --pattern-dots-sparse: url("data:image/svg+xml,...");
  --pattern-dots-extra-sparse: url("data:image/svg+xml,...");
  --pattern-dots-dark: url("data:image/svg+xml,...");
}
`})}),`
`,n.jsx(e.h3,{id:"использование",children:"Использование"}),`
`,n.jsx(e.h4,{id:"способ-1-псевдоэлемент",children:"Способ 1: Псевдоэлемент"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.card {
  position: relative;
}

.card::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--pattern-dots);
  background-repeat: repeat;
  pointer-events: none;
  z-index: 1;
}
`})}),`
`,n.jsx(e.h4,{id:"способ-2-css-класс",children:"Способ 2: CSS-класс"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div className="pattern-dots">
  Контент с паттерном
</div>
`})}),`
`,n.jsx(e.h3,{id:"примеры-использования",children:"Примеры использования"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"HeroBlock"})," — паттерн поверх градиентного фона"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"FeatureSlider"})," — паттерн на слайдах"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"LaunchSection"})," — паттерн на карточках"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"MonitoringSection"})," — паттерн на иллюстрациях"]}),`
`]}),`
`,n.jsx(e.h2,{id:"градиенты",children:"Градиенты"}),`
`,n.jsx(e.h3,{id:"фиолетовый-градиент-тёмный-фон",children:"Фиолетовый градиент (тёмный фон)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`background: linear-gradient(
  135deg,
  #300247 0%,
  #520A7A 25%,
  #7505AD 50%,
  #9B3AD4 75%,
  #C16FFB 100%
);
`})}),`
`,n.jsx(e.h3,{id:"светлый-градиент-карточки",children:"Светлый градиент (карточки)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`background: radial-gradient(
  ellipse at 100% 0%,
  rgba(200, 160, 255, 0.8) 0%,
  rgba(180, 140, 250, 0.4) 40%,
  rgba(246, 243, 254, 0) 80%
);
background-color: #f6f3fe;
`})}),`
`,n.jsx(e.h2,{id:"комбинирование",children:"Комбинирование"}),`
`,n.jsx(e.p,{children:"Типичный паттерн использования — градиент + точечный паттерн + контент:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div className={styles.card}>
  {/* Слой 1: Градиент (z-index: 0) */}
  <img src={gradient} className={styles.gradient} />

  {/* Слой 2: Паттерн через ::after (z-index: 1) */}

  {/* Слой 3: Контент (z-index: 2) */}
  <img src={content} className={styles.content} />
</div>
`})})]})}function x(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{x as default};
