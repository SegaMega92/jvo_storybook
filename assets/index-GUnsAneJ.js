import{j as e}from"./iframe-D4dHrnNU.js";import{P as s}from"./index-Crsjv8Sg.js";import{t as l}from"./typograph-BZ_HRgl2.js";const u="_section_efow1_3",m="_container_efow1_8",_="_sectionTitle_efow1_17",g="_block_efow1_29",p="_blockReversed_efow1_35",v="_textSide_efow1_40",b="_icon_efow1_48",f="_title_efow1_54",h="_subtitle_efow1_64",j="_stats_efow1_75",x="_stat_efow1_75",S="_statValue_efow1_87",w="_statLabel_efow1_95",y="_imageSide_efow1_105",q="_image_efow1_105",t={section:u,container:m,sectionTitle:_,block:g,blockReversed:p,textSide:v,icon:b,title:f,subtitle:h,stats:j,stat:x,statValue:S,statLabel:w,imageSide:y,image:q},N="/jvo_storybook/assets/icon-prioritization-CQCKsvoh.png",k="/jvo_storybook/assets/icon-speed-Dvalf_t1.png",R="/jvo_storybook/assets/icon-scale-lhvlYgPv.png",z="/jvo_storybook/assets/prioritization-BGi1xceu.webp",P="/jvo_storybook/assets/speed-BP_XzJzO.webp",B="/jvo_storybook/assets/scale-BjZwo63m.webp",T=[{id:"prioritization",icon:N,title:"Находим. Приоритезируем. Решаем",subtitle:"Система круглосуточно анализирует весь ассортимент, находит утечки прибыли и точки роста, превращает их в приоритизированные задачи и автоматически выполняет с помощью ИИ-агентов",image:z,reversed:!1,stats:[{value:"24/7",label:"контроль всей матрицы"},{value:"3",label:"степени критичности задач"},{value:"∞",label:"количество SKU"}]},{id:"speed",icon:k,title:`Реагируем быстрее,
чем проблема успеет навредить`,subtitle:"ИИ-агенты работают на опережение: предиктивно находят риски, и сразу берутся за устранение — без участия человека",image:P,reversed:!0,stats:[{value:"<1 мин",label:"скорость реакции"}]},{id:"scale",icon:R,title:"Управляем любым количеством SKU",subtitle:"ИИ-агенты управляют матрицей любого размера без потери контроля. Бизнес растёт — система масштабируется вместе с ним, без хаоса, дополнительного найма и рутины",image:B,reversed:!1}];function r({sectionTitle:o="Решение",blocks:c=T}){return e.jsx("section",{className:t.section,children:e.jsxs("div",{className:t.container,children:[o&&e.jsx("h2",{className:t.sectionTitle,children:l(o)}),c.map(i=>e.jsxs("div",{className:`${t.block} ${i.reversed?t.blockReversed:""}`,children:[e.jsxs("div",{className:t.textSide,children:[e.jsx("img",{src:i.icon,alt:"",className:t.icon}),e.jsx("h3",{className:t.title,children:l(i.title).split(`
`).map((a,n,d)=>e.jsxs("span",{children:[a,n<d.length-1&&e.jsx("br",{})]},n))}),e.jsx("p",{className:t.subtitle,children:l(i.subtitle)}),i.stats&&i.stats.length>0&&e.jsx("div",{className:t.stats,children:i.stats.map((a,n)=>e.jsxs("div",{className:t.stat,children:[e.jsx("span",{className:t.statValue,children:a.value}),e.jsx("span",{className:t.statLabel,children:l(a.label)})]},n))})]}),e.jsx("div",{className:t.imageSide,children:e.jsx("img",{src:i.image,alt:"",className:t.image,loading:"lazy"})})]},i.id))]})})}r.propTypes={sectionTitle:s.string,blocks:s.arrayOf(s.shape({id:s.string.isRequired,icon:s.string.isRequired,title:s.string.isRequired,subtitle:s.string.isRequired,image:s.string.isRequired,reversed:s.bool,stats:s.arrayOf(s.shape({value:s.string.isRequired,label:s.string.isRequired}))}))};r.__docgenInfo={description:`FeatureBlock — Section with icon, title, subtitle and illustration
Alternating layout (text left/right)`,methods:[],displayName:"FeatureBlock",props:{sectionTitle:{defaultValue:{value:"'Решение'",computed:!1},description:"",type:{name:"string"},required:!1},blocks:{defaultValue:{value:`[
  {
    id: 'prioritization',
    icon: iconPrioritization,
    title: 'Находим. Приоритезируем. Решаем',
    subtitle: 'Система круглосуточно анализирует весь ассортимент, находит утечки прибыли и точки роста, превращает их в приоритизированные задачи и автоматически выполняет с помощью ИИ-агентов',
    image: imgPrioritization,
    reversed: false,
    stats: [
      { value: '24/7', label: 'контроль всей матрицы' },
      { value: '3', label: 'степени критичности задач' },
      { value: '∞', label: 'количество SKU' },
    ],
  },
  {
    id: 'speed',
    icon: iconSpeed,
    title: 'Реагируем быстрее,\\nчем проблема успеет навредить',
    subtitle: 'ИИ-агенты работают на опережение: предиктивно находят риски, и сразу берутся за устранение — без участия человека',
    image: imgSpeed,
    reversed: true,
    stats: [
      { value: '<1 мин', label: 'скорость реакции' },
    ],
  },
  {
    id: 'scale',
    icon: iconScale,
    title: 'Управляем любым количеством SKU',
    subtitle: 'ИИ-агенты управляют матрицей любого размера без потери контроля. Бизнес растёт — система масштабируется вместе с ним, без хаоса, дополнительного найма и рутины',
    image: imgScale,
    reversed: false,
  },
]`,computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},icon:{name:"string",required:!0},title:{name:"string",required:!0},subtitle:{name:"string",required:!0},image:{name:"string",required:!0},reversed:{name:"bool",required:!1},stats:{name:"arrayOf",value:{name:"shape",value:{value:{name:"string",required:!0},label:{name:"string",required:!0}}},required:!1}}}},required:!1}}};export{r as F};
