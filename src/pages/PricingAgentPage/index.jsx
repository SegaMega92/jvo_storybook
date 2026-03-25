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

// MonitoringSection illustrations
import illustrationCommunication from '../../assets/illustrations/communication.svg';
import { AgentWorkflowDemo } from '../../components/Illustrations/AgentWorkflowDemo';

// Pricing Agent images - FeatureSlider slides
import dynamicBrakingImg from '../../assets/pricing-agent/dynamic-braking.png';
import fboFbsStrategiesImg from '../../assets/pricing-agent/fbo-fbs-strategies.png';
import softOosEntryImg from '../../assets/pricing-agent/soft-oos-entry.png';
import stuckSkuSearchImg from '../../assets/pricing-agent/stuck-sku-search.png';
import effectivePriceSearchImg from '../../assets/pricing-agent/effective-price-search.png';
import alertPriceImg from '../../assets/pricing-agent/alert-price.png';
import effectivePriceNewproductsImg from '../../assets/pricing-agent/effective-price-search-newproducts.png';
import marginThresholdImg from '../../assets/pricing-agent/margin-threshold.png';
import smartEntryImg from '../../assets/pricing-agent/smart-entry.png';
import instantPriceRollbackImg from '../../assets/pricing-agent/instant-price-rollback.png';
import minPriceProtectionImg from '../../assets/pricing-agent/min-price-protection.png';
import marginThresholdScaleImg from '../../assets/pricing-agent/margin-threshold-scale.png';
import salesTrendsRecoveryImg from '../../assets/pricing-agent/sales-trends-recovery.png';
import profitOptimizationImg from '../../assets/pricing-agent/profit-optimization.png';

// Pricing Agent images - Bento section
import bentoLibraryImg from '../../assets/pricing-agent/bento-library.png';
import bentoTwoModesImg from '../../assets/pricing-agent/bento-two-modes.png';
import bentoNewproductsIconImg from '../../assets/pricing-agent/bento-newproducts-icon.png';
import bentoMultistrategiesImg from '../../assets/pricing-agent/bento-multistrategies.png';
import bentoAnalyticsIconImg from '../../assets/pricing-agent/bento-analytics-icon.png';
import bentoStockIconImg from '../../assets/pricing-agent/bento-stock-icon.png';
import bentoEconomyIconImg from '../../assets/pricing-agent/bento-economy-icon.png';

// Avatar images for AudienceSection
import avatarSupplierMedium from '../../assets/pricing-agent/avatars/avatar-supplier-medium.png';
import avatarSupplierLarge from '../../assets/pricing-agent/avatars/avatar-supplier-large.png';
import avatarManager from '../../assets/pricing-agent/avatars/avatar-manager.png';
import avatarMonobrand from '../../assets/pricing-agent/avatars/avatar-monobrand.png';
import avatarEcomHead from '../../assets/pricing-agent/avatars/avatar-ecom-head.png';

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

// Обёртка для левой иллюстрации с градиентом
const LeftIllustration = () => (
  <div className={styles.illustrationWrapper}>
    <div className={styles.dotsPattern} />
    <img
      src={illustrationCommunication}
      alt="Приоритезация алертов"
      className={styles.illustrationImg}
    />
  </div>
);

// Обёртка для правой иллюстрации с градиентом и интерактивным AgentWorkflowDemo
const RightIllustration = () => (
  <div className={styles.illustrationWrapperRight}>
    <div className={styles.dotsPattern} />
    <AgentWorkflowDemo />
  </div>
);

// Компонент для изображения слайда
const SlideImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      borderRadius: '12px',
    }}
  />
);

SlideImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

// Данные для MonitoringSection
const monitoringCards = [
  {
    image: <LeftIllustration />,
    imageAlt: 'Приоритезация алертов',
    title: 'Приоритезация алертов',
    description: typograph('система распределяет найденные отклонения по уровням критичности — от рекомендованных до важных и критических — для фокусировки на задачах, требующих решения в первую очередь.'),
  },
  {
    image: <RightIllustration />,
    imageAlt: 'Мгновенная автоматизация',
    title: 'Мгновенная автоматизация',
    description: typograph('часть созданных задач в один клик передается в работу профильным Агентам для исполнения — от управления ценами до подготовки ответов на отзывы.'),
  },
];

// Градиенты для слайдов
import gradientStuckSku from '../../assets/pricing-agent/gradient-stuck-sku.svg';
import gradientMinPrice from '../../assets/pricing-agent/gradient-min-price.svg';
import gradientSoftEntry from '../../assets/pricing-agent/gradient-soft-entry.svg';
import gradientEffectivePrice from '../../assets/pricing-agent/gradient-effective-price.svg';
import gradientMargin from '../../assets/pricing-agent/gradient-margin.svg';

// Данные для FeatureSliderGroup — 5 секций
const featureSliderSections = [
  {
    tabTitle: 'Out-of-Stock',
    sectionTitle: typograph('Предотвращение Out-of-Stock'),
    sectionDescription: typograph('Защита карточки от выпадения из выдачи из-за обнуления остатков.'),
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    panelBackground: gradientSoftEntry,
    slides: [
      {
        title: typograph('Динамическое торможение спроса'),
        description: typograph('плавно поднимает цену при риске обнуления остатков, способствуя сохранению позиций в поиске.'),
        media: <SlideImage src={dynamicBrakingImg} alt="Динамическое торможение спроса" />,
        background: gradientSoftEntry,
      },
      {
        title: typograph('Разделение стратегий FBO и FBS'),
        description: typograph('позволяет настраивать разные сценарии управления ценой в зависимости от оборачиваемости или остатков'),
        media: <SlideImage src={fboFbsStrategiesImg} alt="Разделение стратегий FBO и FBS" />,
        background: gradientSoftEntry,
      },
      {
        title: typograph('Мягкий вход в OOS'),
        description: typograph('фиксирует максимально высокую цену перед обнулением, чтобы избежать демпинга при возврате товара в наличие.'),
        media: <SlideImage src={softOosEntryImg} alt="Мягкий вход в OOS" />,
        background: gradientSoftEntry,
      },
    ],
  },
  {
    tabTitle: 'Неликвид',
    sectionTitle: typograph('Раскачка неликвида'),
    sectionDescription: typograph('Высвобождение «замороженного» капитала и возврат денег в оборот.'),
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    panelBackground: gradientStuckSku,
    slides: [
      {
        title: typograph('Автоматический поиск зависших SKU'),
        description: typograph('выявляет товары с низкой оборачиваемостью и помечает их как цели для распродажи.'),
        media: <SlideImage src={stuckSkuSearchImg} alt="Автоматический поиск зависших SKU" />,
        background: gradientStuckSku,
      },
      {
        title: typograph('Поиск эффективной цены'),
        description: typograph('система плавно снижает или повышает цену небольшими шагами до первого всплеска заказов, что позволяет быстро вывести позицию из простоя, не снижая цену больше, чем того требует рынок.'),
        media: <SlideImage src={effectivePriceSearchImg} alt="Поиск эффективной цены" />,
        background: gradientStuckSku,
      },
      {
        title: typograph('Режим «Алерт → Цена»'),
        description: typograph('позволяет изменить цену и запустить распродажу неликвида в один клик прямо из уведомления.'),
        media: <SlideImage src={alertPriceImg} alt="Режим Алерт-Цена" />,
        background: gradientStuckSku,
      },
    ],
  },
  {
    tabTitle: 'Новинки',
    sectionTitle: typograph('Вывод новинок'),
    sectionDescription: typograph('Безопасный старт продаж и поиск рыночной цены'),
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    panelBackground: gradientEffectivePrice,
    slides: [
      {
        title: typograph('Поиск эффективной цены'),
        description: typograph('тестирование разных уровней скидки до появления первых заказов. Позволяет нащупать спрос за несколько дней, сохраняя максимум прибыли.'),
        media: <SlideImage src={effectivePriceNewproductsImg} alt="Поиск эффективной цены" />,
        background: gradientEffectivePrice,
      },
      {
        title: typograph('Соблюдение порога маржинальности'),
        description: typograph('установка минимальной цены, ниже которой Агент не опустится. Данные можно загружать массово для всей матрицы, гарантируя поиск точки спроса только в безопасном для бизнеса диапазоне'),
        media: <SlideImage src={marginThresholdImg} alt="Соблюдение порога маржинальности" />,
        background: gradientEffectivePrice,
      },
    ],
  },
  {
    tabTitle: 'Акции',
    sectionTitle: typograph('Участие в акциях'),
    sectionDescription: typograph('Автоматизация входа и выхода из распродаж'),
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    panelBackground: gradientMinPrice,
    slides: [
      {
        title: typograph('Интеллектуальный вход'),
        description: typograph('анализирует условия акций и рекомендует только те SKU, которые соответствуют целевой прибыли.'),
        media: <SlideImage src={smartEntryImg} alt="Интеллектуальный вход" />,
        background: gradientMinPrice,
      },
      {
        title: typograph('Мгновенный откат цен'),
        description: typograph('автоматически возвращает базовую цену в момент завершения акции, исключая торговлю в минус.'),
        media: <SlideImage src={instantPriceRollbackImg} alt="Мгновенный откат цен" />,
        background: gradientMinPrice,
      },
      {
        title: typograph('Защита минимальной цены'),
        description: typograph('блокирует любое снижение ниже установленного порога, даже при принудительных скидках маркетплейса.'),
        media: <SlideImage src={minPriceProtectionImg} alt="Защита минимальной цены" />,
        background: gradientMinPrice,
      },
    ],
  },
  {
    tabTitle: 'Масштабирование',
    sectionTitle: typograph('Масштабирование продаж и контроль маржинальности'),
    sectionDescription: typograph('Системное управление выручкой и доходностью каждого SKU'),
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    panelBackground: gradientMargin,
    slides: [
      {
        title: typograph('Соблюдение порога маржинальности'),
        description: typograph('блокирует снижение цены ниже установленного лимита. Поддерживает массовую загрузку параметров минимальной доходности для всей матрицы, предотвращая продажи в убыток.'),
        media: <SlideImage src={marginThresholdScaleImg} alt="Соблюдение порога маржинальности" />,
        background: gradientMargin,
      },
      {
        title: typograph('Восстановление трендов продаж'),
        description: typograph('выявляет артикулы с падающей динамикой заказов и корректирует цену для возврата карточки в целевой объем продаж и сохранения позиций в выдаче.'),
        media: <SlideImage src={salesTrendsRecoveryImg} alt="Восстановление трендов продаж" />,
        background: gradientMargin,
      },
      {
        title: typograph('Оптимизация прибыли'),
        description: typograph('находит соотношение цены и спроса, при котором увеличивается объем заказов с сохранением максимально возможной маржинальности.'),
        media: <SlideImage src={profitOptimizationImg} alt="Оптимизация прибыли" />,
        background: gradientMargin,
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

// Данные для BentoGrid — 7 преимуществ из документа (порядок по макету Figma)
const bentoItems = [
  {
    id: 'library',
    title: typograph('Библиотека стратегий'),
    description: typograph('Запуск готовых сценариев (новинки, неликвид, OOS) от лидеров рынка в один клик.'),
    image: bentoLibraryImg,
    size: 'wide', // cols 1-2, row 1
    layout: 'image-left',
  },
  {
    id: 'economy',
    title: typograph('Прозрачная экономика'),
    description: typograph('Модель оплаты за результат позволяет платить только за действия, исключая переплаты за простой системы'),
    image: bentoEconomyIconImg,
    imageType: 'icon', // col 3, row 1
  },
  {
    id: 'modes',
    title: typograph('Два режима контроля'),
    description: typograph('полная автоматизация на «Автопилоте» или ручное подтверждение каждого изменения в «Полуавтомате».'),
    image: bentoTwoModesImg,
    layout: 'image-left', // col 1, row 2 - телефон слева, текст справа
  },
  {
    id: 'analytics',
    title: typograph('Глубокая аналитика воронки'),
    description: typograph('Агент принимает решения на основе реальных данных вашего магазина, а не просто копирует цены конкурентов.'),
    image: bentoAnalyticsIconImg,
    imageType: 'icon', // col 2, row 2
  },
  {
    id: 'stock-link',
    title: typograph('Связка с остатками'),
    description: typograph('принимает решения на основе реального товарного запаса и скорости его оборота.'),
    image: bentoStockIconImg,
    imageType: 'icon', // col 3, row 2
  },
  {
    id: 'newproducts',
    title: typograph('Бесшовная работа с новинками'),
    description: typograph('Гибкие алгоритмы вывода новых артикулов в топ, недоступные в классических репрайсерах цен для Wildberries и Ozon'),
    image: bentoNewproductsIconImg,
    imageType: 'icon', // col 1, row 3
  },
  {
    id: 'multistrategies',
    title: typograph('Мультистратегии через промпт'),
    description: typograph('Объединение любых параметров (маржа, остатки, воронка продаж, CTR) в один сценарий простыми словами. В отличие от других сервисов, все функции доступны сразу, без доплат.'),
    image: bentoMultistrategiesImg,
    size: 'wide', // cols 2-3, row 3
    layout: 'image-right',
  },
];

// Данные для AudienceSection
const audienceTabs = [
  {
    id: 'supplier-medium',
    label: 'Среднему поставщику',
    description: typograph('Избавляет от операционного хаоса и ручного контроля матрицы. Позволяет расти без найма людей, фокусируясь на точках прибыли, которые нашёл Агент.'),
    testimonial: {
      avatar: avatarSupplierMedium,
      name: 'Алексей, владелец магазина (товары для дома)',
      text: typograph('«Сначала не верил в автоматику — думал, сам лучше знаю свои цены. Но когда Агент за неделю поднял маржу на 4% без падения продаж, я просто перестал лезть руками. Теперь только смотрю отчёты»'),
    },
  },
  {
    id: 'supplier-large',
    label: 'Крупному поставщику',
    description: typograph('Снимает ограничения роста, освобождая до 70% времени. Команда управляет большей матрицей без потери маржи и увеличения ФОТ.'),
    testimonial: {
      avatar: avatarSupplierLarge,
      name: 'Игорь, коммерческий директор (бытовая техника)',
      text: typograph('«В других репрайсерах за каждую функцию — контроль маржи, акции — требовали доплату. В JVO всё включено сразу. Настроили мультистратегию через промпт, и теперь система сама балансирует ценами на 5 000 артикулов»'),
    },
  },
  {
    id: 'monobrand',
    label: 'Собственнику монобренда',
    description: typograph('Разрывает зависимость роста штата от выручки. Заменяет обучение сотрудников готовыми AI-сценариями, исключая ошибки из-за человеческого фактора.'),
    testimonial: {
      avatar: avatarMonobrand,
      name: 'Оксана, собственник бренда (косметика)',
      text: typograph('«Для меня важна была раскачка новинок. Другие сервисы предлагали шаблоны без учёта нашей экономики. Агент за две недели нашёл идеальную цену запуска. Вывели в топ 15 позиций за месяц, ставя задачи обычными словами»'),
    },
  },
  {
    id: 'ecom-head',
    label: 'Руководителю e-com',
    description: typograph('Возвращает роль стратега при управлении тысячами SKU. Система сама находит проблемы в воронке и даёт инструменты для их мгновенного исправления.'),
    testimonial: {
      avatar: avatarEcomHead,
      name: 'Марина, руководитель e-com направления (электроника)',
      text: typograph('«У нас 8 категорийщиков, и каждый тянул одеяло на себя — кто-то демпинговал, кто-то завышал. Агент дал единые правила игры. Конфликтов меньше, прибыль выше, а я наконец-то вижу картину целиком»'),
    },
  },
  {
    id: 'manager',
    label: 'Менеджеру маркетплейсов',
    description: typograph('Освобождает до 4 часов в день от рутины и Excel. Позволяет перейти от «тушения пожаров» к поиску точек роста и повышению своей экспертности.'),
    testimonial: {
      avatar: avatarManager,
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
    answer: typograph('На Wildberries: Агент управляет базовой ценой или скидкой продавца. Система учитывает СПП (скидка от площадки), обновляя данные раз в 3 часа, и корректирует цену так, чтобы итоговая стоимость для покупателя соответствовала вашей стратегии.\nНа Ozon: Агент меняет либо стартовую цену (до перечеркивания), либо цену со скидкой («Ваша цена»).'),
  },
  {
    id: 3,
    question: 'Может ли Агент управлять участием в акциях на Ozon?',
    answer: typograph('Да, Агент умеет автоматически заходить в акции и выходить из них на основе заданного сценария (например, если участие становится убыточным). Это касается любых акций площадки, включая эластичный бустинг. Агент не сравнивает акции между собой, а работает по условиям вашего промпта. Акции, созданные поставщиком вручную, обычно не входят в зону управления Агента.'),
  },
  {
    id: 4,
    question: 'Будет ли Агент менять цену, если товара нет в наличии?',
    answer: typograph('Да, Агент продолжает управлять ценой даже при нулевых остатках, если это предусмотрено сценарием. Однако ключевая логика Дживио — предотвращение OOS. Если система видит, что товара хватит менее чем на 14 дней, она заранее поднимет цену, чтобы замедлить продажи и сохранить позиции карточки в топе до следующей поставки.'),
  },
  {
    id: 5,
    question: 'Не упадет ли процент выкупа, если Агент снизит цену?',
    answer: typograph('Это риск обычных репрайсеров цен для маркетплейсов, которые резко демпингуют. Агент Дживио работает иначе: он меняет цену плавно, пошагово в пределах нескольких процентов.. При таких колебаниях у покупателя не возникает мотивации отказываться от уже заказанного товара ради незначительной экономии. Плавность изменений сохраняет ваш процент выкупа и позиции карточки.'),
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
    answer: typograph('Да, при настройке стратегий, ориентированных на показатели маржи и маржинальности, система учитывает стоимость хранения и логистики. Если же используется упрощенная модель управления, эти расходы закладываются пользователем в порог минимальной цены, ниже которого Агент не опускается. Это позволяет сохранять целевую доходность при любом выбранном сценарии управления.'),
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
              'Защита от Out-of-Stock, потери позиций в рейтинге и обнуления остатков',
              'Управление оборачиваемостью: выявляет падение продаж и помогает реализовать неликвид',
              'Контроль целевой маржи и продаж матрицы с заданной доходностью',
              'Оплата за результат — от 1,5 руб. за действие.',
            ])}
            buttonText="Подключить Агента"
            buttonHref="#demo"
            videoSrc="https://kinescope.io/embed/fiCG9ns1ZgH9jMX5gGEvgm"
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

        {/* Преимущества Агента ценообразования - Bento Grid */}
        <BentoGrid items={bentoItems} variant="simple" />

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
          subtitle={typograph('Используйте наши ИИ-продукты для автоматизации бизнеса на маркетплейсах')}
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
