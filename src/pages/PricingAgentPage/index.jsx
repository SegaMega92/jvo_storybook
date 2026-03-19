import PropTypes from 'prop-types';
import styles from './PricingAgentPage.module.css';
import { typograph, typographArray } from '../../utils/typograph';

// Product images
import supplyPlannerIcon from '../../assets/products/supply-planner-icon.png';
import supplyPlannerScreenshot from '../../assets/products/supply-planner-screenshot.png';
import seoProIcon from '../../assets/products/seo-pro-icon.png';
import seoProScreenshot from '../../assets/products/seo-pro-screenshot.png';
import agencyIcon from '../../assets/products/agency-icon.png';
import agencyScreenshot from '../../assets/products/agency-screenshot.png';

// Import all sections
import { Header } from '../../components/Header';
import { SectionHeader } from '../../components/SectionHeader';
import { HeroBlock } from '../../components/HeroBlock';
import { MonitoringSection } from '../../components/MonitoringSection';
import { FeatureSliderGroup } from '../../components/FeatureSliderGroup';
import { ComparisonSlider } from '../../components/ComparisonSlider';
import { BentoGrid } from '../../components/BentoGrid';
import { AudienceSection } from '../../components/AudienceSection';
import { LaunchSection } from '../../components/LaunchSection';
import { ProductsSlider } from '../../components/ProductsSlider';
import { FAQSection } from '../../components/FAQSection';
import { Footer } from '../../components/Footer';
import { Spacer } from '../../components/Spacer';

// Моковый компонент для изображений-заглушек
const MockImage = ({ color = '#C16FFB', label = '' }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      minHeight: '200px',
      background: `linear-gradient(135deg, ${color} 0%, ${color}99 100%)`,
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Manrope, sans-serif',
      fontSize: '14px',
      fontWeight: 600,
      textAlign: 'center',
      padding: '20px',
    }}
  >
    {label}
  </div>
);

MockImage.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
};

// Компонент для слайда
const SlideImage = ({ color, label }) => (
  <MockImage color={color} label={label} />
);

SlideImage.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
};

// Данные для MonitoringSection
const monitoringCards = [
  {
    image: <MockImage color="#9B6FE8" label="Приоритезация алертов" />,
    imageAlt: 'Приоритезация алертов',
    title: 'Приоритезация алертов',
    description: typograph('система распределяет найденные отклонения по уровням критичности — от рекомендованных до важных и критических — для фокусировки на задачах, требующих решения в первую очередь.'),
  },
  {
    image: <MockImage color="#7B5FC7" label="Мгновенная автоматизация" />,
    imageAlt: 'Мгновенная автоматизация',
    title: 'Мгновенная автоматизация',
    description: typograph('часть созданных задач в один клик передается в работу профильным Агентам для исполнения — от управления ценами до подготовки ответов на отзывы.'),
  },
];

// Градиенты для слайдов (цвета)
const COLORS = {
  violet: '#8B5CF6',
  pink: '#EC4899',
  blue: '#3B82F6',
  green: '#10B981',
  orange: '#F59E0B',
};

// Inline SVG градиенты для panelBackground
const createGradientSvg = (color1, color2) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${color1}"/><stop offset="100%" style="stop-color:${color2}"/></linearGradient></defs><rect width="600" height="400" fill="url(#g)"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const GRADIENTS = {
  violet: createGradientSvg('#8B5CF6', '#6D28D9'),
  pink: createGradientSvg('#EC4899', '#BE185D'),
  blue: createGradientSvg('#3B82F6', '#1D4ED8'),
  green: createGradientSvg('#10B981', '#047857'),
  orange: createGradientSvg('#F59E0B', '#D97706'),
};

// Данные для FeatureSliderGroup — 5 секций
const featureSliderSections = [
  {
    tabTitle: 'Out-of-Stock',
    sectionTitle: typograph('Предотвращение Out-of-Stock'),
    sectionDescription: typograph('Защита карточки от выпадения из выдачи из-за обнуления остатков.'),
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    panelBackground: GRADIENTS.violet,
    slides: [
      {
        title: typograph('Динамическое торможение спроса'),
        description: typograph('плавно поднимает цену при риске обнуления остатков, способствуя сохранению позиций в поиске.'),
        media: <SlideImage color={COLORS.violet} label="Торможение спроса" />,
        background: GRADIENTS.violet,
      },
      {
        title: typograph('Разделение стратегий FBO и FBS'),
        description: typograph('позволяет настраивать разные сценарии управления ценой в зависимости от оборачиваемости или остатков'),
        media: <SlideImage color={COLORS.violet} label="FBO / FBS" />,
        background: GRADIENTS.violet,
      },
      {
        title: typograph('Мягкий вход в OOS'),
        description: typograph('фиксирует максимально высокую цену перед обнулением, чтобы избежать демпинга при возврате товара в наличие.'),
        media: <SlideImage color={COLORS.violet} label="Мягкий вход" />,
        background: GRADIENTS.violet,
      },
    ],
  },
  {
    tabTitle: 'Неликвид',
    sectionTitle: typograph('Раскачка неликвида'),
    sectionDescription: typograph('Высвобождение «замороженного» капитала и возврат денег в оборот.'),
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    panelBackground: GRADIENTS.pink,
    slides: [
      {
        title: typograph('Автоматический поиск зависших SKU'),
        description: typograph('выявляет товары с низкой оборачиваемостью и помечает их как цели для распродажи.'),
        media: <SlideImage color={COLORS.pink} label="Поиск SKU" />,
        background: GRADIENTS.pink,
      },
      {
        title: typograph('Поиск эффективной цены'),
        description: typograph('система плавно снижает или повышает цену небольшими шагами до первого всплеска заказов, что позволяет быстро вывести позицию из простоя, не снижая цену больше, чем того требует рынок.'),
        media: <SlideImage color={COLORS.pink} label="Эффективная цена" />,
        background: GRADIENTS.pink,
      },
      {
        title: typograph('Режим «Алерт → Цена»'),
        description: typograph('позволяет изменить цену и запустить распродажу неликвида в один клик прямо из уведомления.'),
        media: <SlideImage color={COLORS.pink} label="Алерт → Цена" />,
        background: GRADIENTS.pink,
      },
    ],
  },
  {
    tabTitle: 'Новинки',
    sectionTitle: typograph('Вывод новинок'),
    sectionDescription: typograph('Безопасный старт продаж и поиск рыночной цены'),
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    panelBackground: GRADIENTS.blue,
    slides: [
      {
        title: typograph('Поиск эффективной цены'),
        description: typograph('тестирование разных уровней скидки до появления первых заказов. Позволяет нащупать спрос за несколько дней, сохраняя максимум прибыли.'),
        media: <SlideImage color={COLORS.blue} label="Тестирование цены" />,
        background: GRADIENTS.blue,
      },
      {
        title: typograph('Соблюдение порога маржинальности'),
        description: typograph('установка минимальной цены, ниже которой Агент не опустится. Данные можно загружать массово для всей матрицы, гарантируя поиск точки спроса только в безопасном для бизнеса диапазоне'),
        media: <SlideImage color={COLORS.blue} label="Порог маржи" />,
        background: GRADIENTS.blue,
      },
    ],
  },
  {
    tabTitle: 'Акции',
    sectionTitle: typograph('Участие в акциях'),
    sectionDescription: typograph('Автоматизация входа и выхода из распродаж'),
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    panelBackground: GRADIENTS.green,
    slides: [
      {
        title: typograph('Интеллектуальный вход'),
        description: typograph('анализирует условия акций и рекомендует только те SKU, которые соответствуют целевой прибыли.'),
        media: <SlideImage color={COLORS.green} label="Интеллектуальный вход" />,
        background: GRADIENTS.green,
      },
      {
        title: typograph('Мгновенный откат цен'),
        description: typograph('автоматически возвращает базовую цену в момент завершения акции, исключая торговлю в минус.'),
        media: <SlideImage color={COLORS.green} label="Откат цен" />,
        background: GRADIENTS.green,
      },
      {
        title: typograph('Защита минимальной цены'),
        description: typograph('блокирует любое снижение ниже установленного порога, даже при принудительных скидках маркетплейса.'),
        media: <SlideImage color={COLORS.green} label="Защита цены" />,
        background: GRADIENTS.green,
      },
    ],
  },
  {
    tabTitle: 'Масштабирование',
    sectionTitle: typograph('Масштабирование продаж и контроль маржинальности'),
    sectionDescription: typograph('Системное управление выручкой и доходностью каждого SKU'),
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    panelBackground: GRADIENTS.orange,
    slides: [
      {
        title: typograph('Соблюдение порога маржинальности'),
        description: typograph('блокирует снижение цены ниже установленного лимита. Поддерживает массовую загрузку параметров минимальной доходности для всей матрицы, предотвращая продажи в убыток.'),
        media: <SlideImage color={COLORS.orange} label="Порог маржи" />,
        background: GRADIENTS.orange,
      },
      {
        title: typograph('Восстановление трендов продаж'),
        description: typograph('выявляет артикулы с падающей динамикой заказов и корректирует цену для возврата карточки в целевой объем продаж и сохранения позиций в выдаче.'),
        media: <SlideImage color={COLORS.orange} label="Тренды продаж" />,
        background: GRADIENTS.orange,
      },
      {
        title: typograph('Оптимизация прибыли'),
        description: typograph('находит соотношение цены и спроса, при котором увеличивается объем заказов с сохранением максимально возможной маржинальности.'),
        media: <SlideImage color={COLORS.orange} label="Оптимизация" />,
        background: GRADIENTS.orange,
      },
    ],
  },
];

// Данные для ComparisonSlider
const comparisonSlides = [
  {
    title: 'Приоритет в стратегии',
    agent: {
      text: typograph('Внутренняя экономика: фокус на марже, темпе заказов, остатках и воронке продаж.'),
    },
    competitor: {
      text: typograph('Следование за рынком: основная логика строится на парсинге и повторении цен конкурентов.'),
    },
  },
  {
    title: 'Гибкость настроек',
    agent: {
      text: typograph('Свободные сценарии: логика собирается под задачу бизнеса с помощью промптов и условий.'),
    },
    competitor: {
      text: typograph('Шаблонные модули: выбор только из готового набора стратегий, заложенных разработчиком.'),
    },
  },
  {
    title: 'Сложные (мульти) стратегии',
    agent: {
      text: typograph('В одном сценарии одновременно учитывает спрос, OOS, маржу и план продаж.'),
    },
    competitor: {
      text: typograph('Нет или за доплату: функции часто разделены на платные блоки (отдельно акции, отдельно OOS).'),
    },
  },
  {
    title: 'Работа с воронкой продаж',
    agent: {
      text: typograph('Учитывает CTR и корзины: меняет цену на основе связки «просмотры + корзины + заказы».'),
    },
    competitor: {
      text: typograph('Ограничено: чаще всего не видят данные верха воронки и работают только с фактом заказов.'),
    },
  },
  {
    title: 'Управление неликвидом',
    agent: {
      text: typograph('Предотвращение: плавно меняет цену по шагам, не доводя товар до долгого зависания на складе.'),
    },
    competitor: {
      text: typograph('Реактивно: срабатывают, когда товар уже признан неликвидом по факту.'),
    },
  },
  {
    title: 'Контроль остатков (OOS)',
    agent: {
      text: typograph('Прогноз на горизонт: рассчитывает, на сколько дней хватит товара, и плавно повышает цену для защиты остатка.'),
    },
    competitor: {
      text: typograph('Простые правила: срабатывают по жесткому порогу остатка, часто без учета темпа продаж.'),
    },
  },
  {
    title: 'Тестирование цены',
    agent: {
      text: typograph('Анализ эластичности: ИИ меняет цену в разные интервалы времени, находя точку максимума прибыли.'),
    },
    competitor: {
      text: typograph('Редко: большинство систем не умеют проводить такие тесты в автоматическом режиме.'),
    },
  },
  {
    title: 'Модель оплаты',
    agent: {
      text: typograph('Пакетная (за действия): вы платите за реальные изменения цены; чем выше пакет, тем дешевле действие.'),
    },
    competitor: {
      text: typograph('Абонентская + за SKU: цена растет от количества товаров в кабинете, а не от пользы.'),
    },
  },
];

// Данные для BentoGrid (переопределяем через props)
const bentoItems = [
  {
    id: 'multistrategies',
    title: typograph('Мультистратегии через промпт'),
    description: typograph('Объединение любых параметров (маржа, остатки, воронка продаж, CTR) в один сценарий простыми словами. Все функции доступны сразу, без доплат.'),
    color: '#8B5CF6',
  },
  {
    id: 'analytics',
    title: typograph('Глубокая аналитика воронки'),
    description: typograph('Агент принимает решения на основе реальных данных вашего магазина, а не просто копирует цены конкурентов.'),
    color: '#EC4899',
  },
  {
    id: 'economy',
    title: typograph('Прозрачная экономика'),
    description: typograph('Модель оплаты за результат позволяет платить только за действия, исключая переплаты за простой системы'),
    color: '#3B82F6',
  },
  {
    id: 'newproducts',
    title: typograph('Бесшовная работа с новинками'),
    description: typograph('Гибкие алгоритмы вывода новых артикулов в топ, недоступные в классических репрайсерах цен для Wildberries и Ozon'),
    color: '#10B981',
  },
  {
    id: 'library',
    title: typograph('Библиотека стратегий'),
    description: typograph('запуск готовых сценариев (новинки, неликвид, OOS) от лидеров рынка в один клик.'),
    color: '#F59E0B',
  },
  {
    id: 'modes',
    title: typograph('2 режима контроля'),
    description: typograph('полная автоматизация на «Автопилоте» или ручное подтверждение каждого изменения в «Полуавтомате».'),
    color: '#EF4444',
  },
];

// Моковый аватар (data URL)
const mockAvatar = (color) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ccircle cx='24' cy='24' r='24' fill='${encodeURIComponent(color)}'/%3E%3Ccircle cx='24' cy='18' r='8' fill='white' opacity='0.5'/%3E%3Ccircle cx='24' cy='42' r='14' fill='white' opacity='0.5'/%3E%3C/svg%3E`;

// Данные для AudienceSection
const audienceTabs = [
  {
    id: 'supplier-medium',
    label: 'Среднему поставщику',
    description: typograph('Избавляет от операционного хаоса и ручного контроля матрицы. Позволяет расти без найма людей, фокусируясь на точках прибыли, которые нашёл Агент.'),
    testimonial: {
      avatar: mockAvatar('#9B6FE8'),
      name: 'Средний поставщик',
      text: typograph('Описание опыта среднего поставщика с системой ценообразования Дживио.'),
    },
  },
  {
    id: 'supplier-large',
    label: 'Крупному поставщику',
    description: typograph('Снимает ограничения роста, освобождая до 70% времени. Команда управляет большей матрицей без потери маржи и увеличения ФОТ.'),
    testimonial: {
      avatar: mockAvatar('#7B5FC7'),
      name: 'Игорь, коммерческий директор (бытовая техника)',
      text: typograph('«Раньше работали с классическим репрайсером, но там за каждый чих — контроль маржи или работу с акциями — требовали перехода на другой тариф. В JVO все инструменты доступны сразу, тариф зависит от матрицы и кол-ва действий Агента, всё прозрачно. Мы настроили через промпт сложную мультистратегию, которая учитывает и остатки, и темпы продаж, и теперь система сама балансирует ценами на 5 000 артикулов»'),
    },
  },
  {
    id: 'monobrand',
    label: 'Собственнику монобренда',
    description: typograph('Разрывает зависимость роста штата от выручки. Заменяет обучение сотрудников готовыми AI-сценариями, исключая ошибки из-за человеческого фактора.'),
    testimonial: {
      avatar: mockAvatar('#EC4899'),
      name: 'Оксана, собственник бренда (косметика)',
      text: typograph('«Для меня критически важна была раскачка новинок. Другие сервисы предлагали только шаблоны, которые не учитывали нашу экономику. Агент Дживио за две недели нащупал идеальную цену запуска, не слив маржу в ноль. В итоге мы вывели в топ 15 новых позиций за месяц, просто ставя задачи системе обычными словами»'),
    },
  },
  {
    id: 'ecom-head',
    label: 'Руководителю e-com',
    description: typograph('Возвращает роль стратега при управлении тысячами SKU. Система сама находит проблемы в воронке и даёт инструменты для их мгновенного исправления.'),
    testimonial: {
      avatar: mockAvatar('#3B82F6'),
      name: 'Руководитель e-com',
      text: typograph('Описание опыта руководителя e-com с системой ценообразования Дживио.'),
    },
  },
  {
    id: 'manager',
    label: 'Менеджеру маркетплейсов',
    description: typograph('Освобождает до 4 часов в день от рутины и Excel. Позволяет перейти от «тушения пожаров» к поиску точек роста и повышению своей экспертности.'),
    testimonial: {
      avatar: mockAvatar('#10B981'),
      name: 'Дмитрий, ведущий менеджер (одежда)',
      text: typograph('«Я просто пишу текстом: "Не падай ниже маржи 15% и тормози продажи, если остаток меньше 50 штук". Теперь я трачу на цены 10 минут в день вместо четырех часов»'),
    },
  },
];

// Данные для ProductsSlider (другие продукты, кроме текущего - Агента ценообразования)
const products = [
  {
    id: 'supply-planner',
    name: 'Планировщик поставок',
    description: typograph('Управление товарными запасами и защита от обнуления остатков'),
    color: 'red',
    icon: supplyPlannerIcon,
    image: supplyPlannerScreenshot,
  },
  {
    id: 'seo-pro',
    name: 'SEO Pro',
    description: typograph('Автоматическая оптимизация карточек товаров для максимального охвата в поисковой выдаче'),
    color: 'yellow',
    icon: seoProIcon,
    image: seoProScreenshot,
  },
  {
    id: 'agency',
    name: 'Агентство продвижения',
    description: typograph('Комплексное управление маркетплейсами под ключ — от вывода бренда и консалтинга до продвижения карточек в топ и ведения рекламы'),
    color: 'pink',
    icon: agencyIcon,
    image: agencyScreenshot,
  },
];

// Данные для FAQSection
const faqs = [
  {
    id: 1,
    question: 'На основе чего Агент принимает решение об изменении цены?',
    answer: typograph('Система ориентируется на вашу внутреннюю аналитику: маржу, остатки, скорость заказов и воронку продаж (CTR, добавления в корзину). Важно: Агент не учитывает цены конкурентов, так как его цель — ваша прибыль и юнит-экономика, а не участие в демпинге.'),
  },
  {
    id: 2,
    question: 'С какими именно ценами работает Агент на Wildberries и Ozon?',
    answer: typograph('На Wildberries: Агент управляет базовой ценой или скидкой продавца. Система учитывает СПП (скидка от площадки), обновляя данные раз в 3 часа, и корректирует цену так, чтобы итоговая стоимость для покупателя соответствовала вашей стратегии. На Ozon: Агент меняет либо стартовую цену (до перечеркивания), либо цену со скидкой («Ваша цена»).'),
  },
  {
    id: 3,
    question: 'Может ли Агент управлять участием в акциях на Ozon?',
    answer: typograph('Да, Агент умеет автоматически заходить в акции и выходить из них на основе заданного сценария (например, если участие становится убыточным). Это касается любых акций площадки, включая эластичный бустинг.'),
  },
  {
    id: 4,
    question: 'Будет ли Агент менять цену, если товара нет в наличии?',
    answer: typograph('Да, Агент продолжает управлять ценой даже при нулевых остатках, если это предусмотрено сценарием. Однако ключевая логика Дживио — предотвращение OOS. Если система видит, что товара хватит менее чем на 14 дней, она заранее поднимет цену, чтобы замедлить продажи и сохранить позиции карточки в топе до следующей поставки.'),
  },
  {
    id: 5,
    question: 'Не упадет ли процент выкупа, если Агент снизит цену?',
    answer: typograph('Это риск обычных репрайсеров цен для маркетплейсов, которые резко демпингуют. Агент Дживио работает иначе: он меняет цену плавно, пошагово в пределах нескольких процентов. При таких колебаниях у покупателя не возникает мотивации отказываться от уже заказанного товара ради незначительной экономии.'),
  },
  {
    id: 6,
    question: 'Не допустит ли ИИ ошибку, продав товар в минус?',
    answer: typograph('Исключено. В настройках вы жестко задаете минимальный порог цены, ниже которого система не опустится ни при каких условиях, включая входы в акции.'),
  },
  {
    id: 7,
    question: 'Как быстро обновляются цены на маркетплейсе?',
    answer: typograph('Агент отправляет обновленные данные через API сразу после срабатывания по заранее настроенному графику. На стороне площадки изменение цены обычно отображается в интервале от нескольких секунд до получаса.'),
  },
  {
    id: 8,
    question: 'Учитывает ли Агент автоматически стоимость хранения и логистики?',
    answer: typograph('Да, при настройке стратегий, ориентированных на показатели маржи и маржинальности, система учитывает стоимость хранения и логистики. Если же используется упрощенная модель управления, эти расходы закладываются пользователем в порог минимальной цены.'),
  },
  {
    id: 9,
    question: 'Можно ли настроить разные стратегии для разных групп товаров?',
    answer: typograph('Да. Вы можете прописать индивидуальную логику (промпт) для каждой категории. Например: для новинок — стратегия захвата доли рынка, для флагманов — максимальное удержание маржи, для неликвида — быстрая очистка склада.'),
  },
  {
    id: 10,
    question: 'Нужно ли мне выключать Агента, если я хочу изменить цену вручную?',
    answer: typograph('Вы всегда сохраняете приоритет. Если вы измените цену вручную в кабинете маркетплейса, Агент зафиксирует это. Также есть режим «советника»: ИИ будет только предлагать оптимальную цену, а финальное решение и нажатие кнопки останется за вами.'),
  },
];

/**
 * PricingAgentPage - лендинг "Агент ценообразования"
 */
export function PricingAgentPage({ className = '' }) {
  return (
    <div className={`${styles.page} ${className}`}>
      <Header />

      <main className={styles.main}>
        {/* Hero: SectionHeader + HeroBlock */}
        <SectionHeader
          tag="Агент ценообразования"
          title={typograph('Управление ценами на маркетплейсах на базе ИИ')}
          subtitle={typograph('Автоматизируйте управление ценами на основе данных по воронке продаж, текущих остатков и динамике спроса')}
        />
        <div className={styles.heroBlockWrapper}>
          <HeroBlock
            variant="flat"
            features={typographArray([
              'Защита от Out-of-Stock, потери позиции в рейтинге и обнуления остатков',
              'Управление оборачиваемостью: выявляет падение продаж и помогает реализовать неликвид',
              'Контроль целевой маржи и продаж матрицы с заданной доходностью',
              'Оплата за результат — от 1,5 руб. за действие',
            ])}
            buttonText="Подключить Агента"
            buttonHref="#demo"
            illustration={<MockImage color="#7C3AED" label="Hero Illustration" />}
          />
        </div>

        <Spacer size="xl" />

        {/* Мониторинг и аналитика */}
        <MonitoringSection
          title={typograph('Мониторинг и аналитика')}
          subtitle={typograph('Центр управления и главный движок системы Дживио. Система ежедневно проводит аудит воронки продаж, выявляет отклонения и формирует готовые задачи для автоматизации через ИИ-Агентов.')}
          cards={monitoringCards}
        />

        <Spacer size="xl" />

        {/* FeatureSliderGroup - 5 табов */}
        <FeatureSliderGroup sections={featureSliderSections} />

        <Spacer size="xl" />

        {/* Сравнение с конкурентами */}
        <ComparisonSlider
          title={typograph('Преимущества использования репрайсера цен Дживио')}
          subtitle={typograph('Гибкая настройка стратегий под задачи бизнеса и без ограничений по тарифу')}
          slides={comparisonSlides}
        />

        <Spacer size="xl" />

        {/* BentoGrid - пока используем стандартный */}
        <BentoGrid />

        <Spacer size="xl" />

        {/* Кому необходим */}
        <AudienceSection
          title={typograph('Кому необходим Агент ценообразования на маркетплейсах?')}
          tagText={typograph('Системное управление и кратный рост без расширения штата')}
          bottomText={typograph('Агент позволяет увеличить количество и скорость обрабатываемых артикулов на WB и Ozon без потери качества и необходимости найма новых сотрудников')}
          tabs={audienceTabs}
        />

        <Spacer size="xl" />

        {/* Запуск и внедрение */}
        <LaunchSection
          title={typograph('Запуск и внедрение системы Дживио')}
          subtitle={typograph('Все необходимые инструменты и поддержка для комфортного старта и эффективной работы команды')}
        />

        <Spacer size="xl" />

        {/* Другие продукты */}
        <ProductsSlider
          title="Другие решения системы Дживио"
          subtitle={typograph('Для автоматизации бизнеса на маркетплейсах используйте наши ИИ-продукты:')}
          products={products}
        />

        <Spacer size="xl" />

        <Spacer size="md" background="#15181f" />

        {/* FAQ */}
        <FAQSection
          title="Частые вопросы про Агента ценообразования"
          faqs={faqs}
        />
      </main>

      <Footer />
    </div>
  );
}

PricingAgentPage.propTypes = {
  className: PropTypes.string,
};

export default PricingAgentPage;
