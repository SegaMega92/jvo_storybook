import{r as b,j as e}from"./iframe-Qp2qnlcA.js";import{P as o}from"./index-DyOB9dD5.js";const N="_header_ahsx1_3",L="_header__container_ahsx1_19",y="_header__left_ahsx1_34",k="_header__logo_ahsx1_41",q="_header__logoImg_ahsx1_51",I="_header__nav_ahsx1_57",D="_header__navList_ahsx1_62",M="_header__navItem_ahsx1_71",O="_header__navLink_ahsx1_75",P="_header__navArrow_ahsx1_93",$="_header__dropdown_ahsx1_108",A="_header__dropdownLink_ahsx1_140",B="_header__right_ahsx1_156",V="_header__phone_ahsx1_163",S="_header__buttons_ahsx1_177",C="_header__buttonPrimary_ahsx1_184",E="_header__buttonSecondary_ahsx1_210",H="_header__menuButton_ahsx1_235",R="_header__menuIcon_ahsx1_247",z="_header__mobileMenu_ahsx1_328",F="_header__mobileNavList_ahsx1_357",T="_header__mobileNavItem_ahsx1_363",J="_header__mobileNavLink_ahsx1_367",Q="_header__mobileDropdown_ahsx1_384",W="_header__mobileDropdownLink_ahsx1_398",G="_header__mobileButtons_ahsx1_412",K="_header__mobileContacts_ahsx1_426",U="_header__mobilePhone_ahsx1_436",X="_header__mobileEmail_ahsx1_448",a={header:N,header__container:L,header__left:y,header__logo:k,header__logoImg:q,header__nav:I,header__navList:D,header__navItem:M,header__navLink:O,header__navArrow:P,"header__navArrow--open":"_header__navArrow--open_ahsx1_103",header__dropdown:$,header__dropdownLink:A,header__right:B,header__phone:V,header__buttons:S,header__buttonPrimary:C,header__buttonSecondary:E,header__menuButton:H,header__menuIcon:R,"header__menuIcon--open":"_header__menuIcon--open_ahsx1_276",header__mobileMenu:z,"header__mobileMenu--open":"_header__mobileMenu--open_ahsx1_344",header__mobileNavList:F,header__mobileNavItem:T,header__mobileNavLink:J,header__mobileDropdown:Q,"header__mobileDropdown--open":"_header__mobileDropdown--open_ahsx1_392",header__mobileDropdownLink:W,header__mobileButtons:G,header__mobileContacts:K,header__mobilePhone:U,header__mobileEmail:X},Y="https://storage.yandexcloud.net/jvo-files/jvo-site/logos/jvo_logo_white.svg",v=()=>e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Z=[{label:"Инструменты",href:"#",dropdown:[{label:"Агент",href:"https://jvo.ru/agent"},{label:"Агент коммуникаций",href:"https://jvo.ru/agent-communication"},{label:"Дашборд",href:"https://jvo.ru/dashboard"},{label:"SEO Pro",href:"https://jvo.ru/seopro"},{label:"Логистика",href:"https://jvo.ru/logistics"},{label:"Аналитика Ozon",href:"https://jvo.ru/ozon"},{label:"События",href:"https://jvo.ru/events"},{label:"Рейтинг",href:"https://jvo.ru/rating"},{label:"Финансы",href:"https://jvo.ru/finance"},{label:"Аналитика товарной матрицы",href:"https://jvo.ru/matrix"}]},{label:"Компания",href:"#",dropdown:[{label:"Вакансии",href:"https://jvo.ru/career"},{label:"О компании",href:"https://jvo.ru/about"},{label:"Контакты",href:"https://jvo.ru/contacts"},{label:"FAQ",href:"https://jvo.ru/faq"},{label:"Рассылки",href:"https://jvo.ru/subscription-page"}]},{label:"Журнал",href:"#",dropdown:[{label:"Кейсы",href:"https://jvo.ru/cases"},{label:"События",href:"https://jvo.ru/education"},{label:"Материалы о e-com",href:"https://jvo.ru/blog"},{label:"База знаний",href:"https://jvo.ru/help"}]},{label:"Экспресс-доставка",href:"https://jvo.ru/express"},{label:"Услуги продвижения",href:"https://jvo.ru/studio"}];function f({navItems:d=Z,phone:h="+7 499 322-09-33",email:i="hi@jvo.ru",ctaText:c="Запросить демо",ctaHref:u="https://jvo.ru/requestdemo",loginText:p="Войти",loginHref:m="https://lk.jvo.ru/"}){const[s,j]=b.useState(!1),[t,x]=b.useState(null),g=()=>{j(!s)},w=r=>{x(t===r?null:r)};return e.jsxs("header",{className:a.header,children:[e.jsxs("div",{className:a.header__container,children:[e.jsxs("div",{className:a.header__left,children:[e.jsx("a",{href:"https://jvo.ru/",className:a.header__logo,"aria-label":"JVO - На главную",children:e.jsx("img",{src:Y,alt:"JVO",className:a.header__logoImg})}),e.jsx("nav",{className:a.header__nav,"aria-label":"Главная навигация",children:e.jsx("ul",{className:a.header__navList,children:d.map((r,n)=>e.jsxs("li",{className:a.header__navItem,children:[e.jsxs("a",{href:r.href,className:a.header__navLink,children:[r.label,r.dropdown&&e.jsx("span",{className:a.header__navArrow,children:e.jsx(v,{})})]}),r.dropdown&&e.jsx("div",{className:a.header__dropdown,children:r.dropdown.map((_,l)=>e.jsx("a",{href:_.href,className:a.header__dropdownLink,children:_.label},l))})]},n))})})]}),e.jsxs("div",{className:a.header__right,children:[e.jsx("a",{href:`tel:${h.replace(/\s/g,"")}`,className:a.header__phone,children:h}),e.jsxs("div",{className:a.header__buttons,children:[e.jsx("a",{href:u,className:a.header__buttonPrimary,children:c}),e.jsx("a",{href:m,className:a.header__buttonSecondary,children:p})]})]}),e.jsx("button",{className:a.header__menuButton,"aria-label":s?"Закрыть меню":"Открыть меню","aria-expanded":s,onClick:g,children:e.jsx("span",{className:`${a.header__menuIcon} ${s?a["header__menuIcon--open"]:""}`})})]}),e.jsxs("div",{className:`${a.header__mobileMenu} ${s?a["header__mobileMenu--open"]:""}`,children:[e.jsx("ul",{className:a.header__mobileNavList,children:d.map((r,n)=>e.jsx("li",{className:a.header__mobileNavItem,children:r.dropdown?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:a.header__mobileNavLink,onClick:()=>w(n),children:[r.label,e.jsx("span",{className:`${a.header__navArrow} ${t===n?a["header__navArrow--open"]:""}`,children:e.jsx(v,{})})]}),e.jsx("div",{className:`${a.header__mobileDropdown} ${t===n?a["header__mobileDropdown--open"]:""}`,children:r.dropdown.map((_,l)=>e.jsx("a",{href:_.href,className:a.header__mobileDropdownLink,children:_.label},l))})]}):e.jsx("a",{href:r.href,className:a.header__mobileNavLink,children:r.label})},n))}),e.jsxs("div",{className:a.header__mobileButtons,children:[e.jsx("a",{href:u,className:a.header__buttonPrimary,children:c}),e.jsx("a",{href:m,className:a.header__buttonSecondary,children:p})]}),e.jsxs("div",{className:a.header__mobileContacts,children:[e.jsx("a",{href:`tel:${h.replace(/\s/g,"")}`,className:a.header__mobilePhone,children:h}),e.jsx("a",{href:`mailto:${i}`,className:a.header__mobileEmail,children:i})]})]})]})}f.propTypes={navItems:o.arrayOf(o.shape({label:o.string.isRequired,href:o.string.isRequired,dropdown:o.arrayOf(o.shape({label:o.string.isRequired,href:o.string.isRequired}))})),phone:o.string,email:o.string,ctaText:o.string,ctaHref:o.string,loginText:o.string,loginHref:o.string};f.__docgenInfo={description:`JVO Header component - light theme with dropdowns
Based on Figma design and jvo.ru`,methods:[],displayName:"Header",props:{navItems:{defaultValue:{value:`[
  {
    label: 'Инструменты',
    href: '#',
    dropdown: [
      { label: 'Агент', href: 'https://jvo.ru/agent' },
      { label: 'Агент коммуникаций', href: 'https://jvo.ru/agent-communication' },
      { label: 'Дашборд', href: 'https://jvo.ru/dashboard' },
      { label: 'SEO Pro', href: 'https://jvo.ru/seopro' },
      { label: 'Логистика', href: 'https://jvo.ru/logistics' },
      { label: 'Аналитика Ozon', href: 'https://jvo.ru/ozon' },
      { label: 'События', href: 'https://jvo.ru/events' },
      { label: 'Рейтинг', href: 'https://jvo.ru/rating' },
      { label: 'Финансы', href: 'https://jvo.ru/finance' },
      { label: 'Аналитика товарной матрицы', href: 'https://jvo.ru/matrix' },
    ],
  },
  {
    label: 'Компания',
    href: '#',
    dropdown: [
      { label: 'Вакансии', href: 'https://jvo.ru/career' },
      { label: 'О компании', href: 'https://jvo.ru/about' },
      { label: 'Контакты', href: 'https://jvo.ru/contacts' },
      { label: 'FAQ', href: 'https://jvo.ru/faq' },
      { label: 'Рассылки', href: 'https://jvo.ru/subscription-page' },
    ],
  },
  {
    label: 'Журнал',
    href: '#',
    dropdown: [
      { label: 'Кейсы', href: 'https://jvo.ru/cases' },
      { label: 'События', href: 'https://jvo.ru/education' },
      { label: 'Материалы о e-com', href: 'https://jvo.ru/blog' },
      { label: 'База знаний', href: 'https://jvo.ru/help' },
    ],
  },
  {
    label: 'Экспресс-доставка',
    href: 'https://jvo.ru/express',
  },
  {
    label: 'Услуги продвижения',
    href: 'https://jvo.ru/studio',
  },
]`,computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},href:{name:"string",required:!0},dropdown:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},href:{name:"string",required:!0}}},required:!1}}}},required:!1},phone:{defaultValue:{value:"'+7 499 322-09-33'",computed:!1},description:"",type:{name:"string"},required:!1},email:{defaultValue:{value:"'hi@jvo.ru'",computed:!1},description:"",type:{name:"string"},required:!1},ctaText:{defaultValue:{value:"'Запросить демо'",computed:!1},description:"",type:{name:"string"},required:!1},ctaHref:{defaultValue:{value:"'https://jvo.ru/requestdemo'",computed:!1},description:"",type:{name:"string"},required:!1},loginText:{defaultValue:{value:"'Войти'",computed:!1},description:"",type:{name:"string"},required:!1},loginHref:{defaultValue:{value:"'https://lk.jvo.ru/'",computed:!1},description:"",type:{name:"string"},required:!1}}};export{f as H};
