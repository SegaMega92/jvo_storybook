import PropTypes from 'prop-types';
import styles from './MainPage.module.css';

// Components
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { MainHero } from '../../components/MainHero';
import { LogoMarqueeV2 } from '../../components/LogoMarqueeV2';
import { AgentsShowcase } from '../../components/AgentsShowcase';
import { BentoGrid } from '../../components/BentoGrid';
import { ProductsSlider } from '../../components/ProductsSlider';
import { LaunchSection } from '../../components/LaunchSection';
import { CasesSection } from '../../components/CasesSection';
import { ReviewsSection } from '../../components/ReviewsSection';
import { FAQSection } from '../../components/FAQSection';
import { Spacer } from '../../components/Spacer';
import { FeatureSection } from '../../components/FeatureSection';

// Bento assets
import imgControl from '../../assets/bento/control.webp';
import imgSettings from '../../assets/bento/settings.webp';
import imgCenterIcon from '../../assets/bento/center-icon.webp';

// Icons for MainHero tabs
import tabCommunicationsIcon from '../../assets/icons/main-hero/tab-communications.svg';
import tabPricingIcon from '../../assets/icons/main-hero/tab-pricing.svg';
import tabAdvertisingIcon from '../../assets/icons/main-hero/tab-advertising.svg';

// --- Placeholder component for missing sections ---
function Placeholder({ title, description }) {
  return (
    <div className={styles.placeholder}>
      <div className={styles.placeholderInner}>
        <h3 className={styles.placeholderTitle}>{title}</h3>
        <p className={styles.placeholderDescription}>{description}</p>
      </div>
    </div>
  );
}


// --- AwardsSection ---
function AwardsSection() {
  const awards = [
    'Стартап 2025 года — Победитель',
    'Премия «Герои Forbes», номинация «Открытие» — 1 место',
    'Startech.Awards — «Лучшая технология в e-commerce» — № 1',
    'Премия «Большой Оборот 2025» — Победители',
    'Топ-100 самых перспективных компаний',
    'Топ-30 лучших сервисов для e-com',
  ];

  return (
    <section className={styles.awardsSection}>
      <div className={styles.awardsInner}>
        <h2 className={styles.awardsTitle}>Награды и признание</h2>
        <div className={styles.awardsGrid}>
          {awards.map((award, index) => (
            <div key={index} className={styles.awardItem}>
              <span className={styles.awardIcon}>🏆</span>
              <span className={styles.awardText}>{award}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FinalCTASection ---
function FinalCTASection() {
  return (
    <section className={styles.finalCtaSection}>
      <div className={styles.finalCtaInner}>
        <h2 className={styles.finalCtaTitle}>Посмотрите как работает агент</h2>
        <p className={styles.finalCtaSubtitle}>
          На демо покажем как система работает, разберём вашу задачу.
        </p>
        <div className={styles.finalCtaForm}>
          <div className={styles.finalCtaFormPlaceholder}>
            <span className={styles.finalCtaFormLabel}>Форма заявки на демо</span>
            <p className={styles.finalCtaFormFields}>Средний оборот · Название бренда · Email · Телефон</p>
            <button className={styles.finalCtaButton}>Записаться на демо</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Data ---

// MainHero tabs with demo scenarios
const heroTabs = [
  {
    id: 'pricing',
    label: 'Ценообразование',
    icon: tabPricingIcon,
    description: 'Защита от OOS, раскачка неликвида, вывод новинок',
    content: (
      <Placeholder
        title="Агент ценообразования"
        description="Анимированная визуализация работы агента"
      />
    ),
  },
  {
    id: 'communications',
    label: 'Коммуникации',
    icon: tabCommunicationsIcon,
    description: 'Ответы на отзывы, вопросы и кросс-продажи',
    content: (
      <Placeholder
        title="Агент коммуникаций"
        description="Анимированная визуализация работы агента"
      />
    ),
  },
  {
    id: 'advertising',
    label: 'Реклама',
    icon: tabAdvertisingIcon,
    description: 'Оптимизация рекламных кампаний',
    content: (
      <Placeholder
        title="Агент рекламы"
        description="Анимированная визуализация работы агента"
      />
    ),
  },
];

// BentoGrid data — "Как ставить задачу агенту" + "Прозрачность и ограничения"
const controlBentoItems = [
  {
    id: 'natural-language',
    title: 'Задачи — обычным языком',
    description: 'Вы описываете стратегию обычным текстом — как задачу сотруднику. Агент понимает и действует.',
    image: imgSettings,
    imageType: 'icon',
    layout: 'image-left',
  },
  {
    id: 'scenarios',
    title: 'Готовые сценарии',
    description: 'Есть готовые сценарии от лидеров рынка — можно начать с них и адаптировать под себя.',
    image: imgSettings,
    imageType: 'icon',
  },
  {
    id: 'center',
    type: 'center',
    title: 'Контроль\nи прозрачность',
    image: imgCenterIcon,
  },
  {
    id: 'confirmation',
    title: 'Два режима работы',
    description: 'С подтверждением — агент предлагает действие, вы одобряете. Автопилот — агент действует сам.',
    image: imgControl,
    layout: 'image-left',
  },
  {
    id: 'logging',
    title: 'Логирование',
    description: 'Каждое действие агента записано: что сделал, почему, какой результат.',
    image: imgSettings,
    imageType: 'icon',
  },
  {
    id: 'limits',
    title: 'Жёсткие ограничения',
    description: 'Минимальная цена, пороги маржи, запрещённые формулировки — агент их не нарушит.',
    image: imgSettings,
    imageType: 'icon',
  },
];

// FAQ data (v4)
const mainPageFAQs = [
  {
    id: 'faq-1',
    question: 'Чем Дживио отличается от аналитики?',
    answer: 'Аналитика показывает, что происходит. Дживио — делает: корректирует цены, отвечает на отзывы, ведёт рекламу. Разница между дашбордом и сотрудником.',
  },
  {
    id: 'faq-2',
    question: 'Подходит ли для моей категории?',
    answer: 'Дживио работает с любой категорией. Алгоритм продаж устроен одинаково — меняются только ваши правила и данные.',
  },
  {
    id: 'faq-3',
    question: 'Безопасно ли давать доступ к кабинету?',
    answer: 'Подключение через официальные API-ключи без возможности выводить деньги или менять реквизиты. Дживио — авторизованный сервис Wildberries.',
  },
  {
    id: 'faq-4',
    question: 'Можно контролировать каждое действие?',
    answer: 'Да. Держите режим подтверждения столько, сколько нужно: агент предлагает — вы решаете. История каждого решения с объяснением логики сохраняется.',
  },
  {
    id: 'faq-5',
    question: 'Сложно ли начать?',
    answer: 'Задачи ставятся текстом, как обычное сообщение. Есть готовые сценарии на старте. Если нужна помощь — эксперты Дживио настроят агентов вместе с вами.',
  },
];

// Reviews data (v4 testimonials)
const reviews = [
  {
    title: 'Поставил правила — агент работает',
    text: 'Думал что это ещё один инструмент за которым надо следить. Оказалось что следить особо не надо — поставил правила, агент работает. Раз в неделю смотрю отчёт, если что-то не так — поправляю.',
    name: 'Руслан',
    description: 'Операционный директор, электроника',
    placeholderColor: '#6366f1',
  },
  {
    title: 'Данные сразу во что-то превращаются',
    text: 'У нас была аналитика, мы смотрели на данные. Но смотреть и что-то с этим делать — это разные вещи. С Дживио данные сразу во что-то превращаются, не надо каждый раз собирать команду и обсуждать.',
    name: 'Наталья',
    description: 'Руководитель e-com, товары для дома',
    placeholderColor: '#8b5cf6',
  },
  {
    title: 'Агент — лучший сотрудник месяца',
    text: 'Переживал как команда отнесётся. Первое время присматривались. Месяца через полтора один из менеджеров сам предложил отдать агенту ещё несколько задач. Теперь у нас шутка что агент — лучший сотрудник месяца.',
    name: 'Игорь',
    description: 'CEO, одежда, 400+ артикулов',
    placeholderColor: '#ec4899',
  },
  {
    title: 'Зашёл и разобрался в категории',
    text: 'Мы на кормах для животных, думали что универсальный инструмент не зайдёт — там своя специфика, сезонность, аудитория. Зашёл, и довольно быстро разобрался в категории.',
    name: 'Светлана',
    description: 'Маркетолог, зоотовары',
    placeholderColor: '#f59e0b',
  },
  {
    title: 'Пишешь задачу как сообщение',
    text: 'Я не разбираюсь в технологиях совсем. Думала будет сложно. Оказалось пишешь задачу как обычное сообщение, агент понимает. Первый сценарий настроила сама, без помощи.',
    name: 'Марина',
    description: 'Собственник, детские товары',
    placeholderColor: '#10b981',
  },
  {
    title: 'Была очень удивлена',
    text: 'Думала что ИИ-автоматизация это дорого. Но потом посчитала сколько мне стоит менеджер, который весь день отвечает на отзывы. Агент отвечает почти моментально, не ходит в отпуск и не берёт выходных.',
    name: 'Екатерина',
    description: 'Директор по маркетингу, косметика',
    placeholderColor: '#3b82f6',
  },
];

// Cases data (v4)
const cases = [
  {
    brandName: 'Бейби Тренд',
    category: 'FMCG, Бытовая химия, Гигиена',
    description: 'За 30 дней передали ценообразование ИИ-агенту',
  },
  {
    brandName: 'Ладинос',
    category: 'Посуда, Косметика, Ювелирные украшения',
    description: 'Как Ладинос увеличил маржу до 25%',
  },
  {
    brandName: 'Defender',
    category: 'Электроника и товары для дома',
    description: 'Как Defender автоматизировал 82 000+ отзывов',
  },
];

/**
 * MainPage - Главная страница Дживио v4
 * Собрана из готовых блоков + плейсхолдеры для недостающих секций
 */
export function MainPage({ className = '', embedded = false, section }) {
  const showMain = !section || section === 'main';
  const showFaq = !section || section === 'faq';

  return (
    <div className={`${styles.page} ${className}`}>
      {!embedded && <Header />}

      <main className={styles.main}>
        {showMain && (
          <>
            {/* 1. HERO */}
            <MainHero
              title={'ИИ-агенты для автоматизации бизнеса на маркетплейсах'}
              description={'Единая система агентов, которые отвечают на вопросы и отзывы, управляют ценами, рекламой, SEO и поставками на Wildberries и Ozon.'}
              tabs={heroTabs}
              defaultActiveTab="pricing"
            />

            {/* 2. ЛОГОТИПЫ КЛИЕНТОВ */}
            <Spacer size="xs" />
            <LogoMarqueeV2 variant="fixed" />

            <Spacer size="lg" />

            {/* 3. КАК ЭТО РАБОТАЕТ — От данных к действиям */}
            <FeatureSection
              title="От данных — к действиям"
              description="Дживио ежедневно анализирует данные магазина — остатки, продажи, позиции, рекламу — и формирует задачи на рост продаж и сокращение издержек. Агенты выполняют их автоматически — по расписанию или триггеру, который вы укажете."
              bullets={[
                'Заменяет репрайсер, автоответчик и биддер',
                'Все агенты работают в единой среде — видят одни и те же данные и учитывают их в решениях',
              ]}
              buttonText="Оставить заявку"
            />

            <Spacer size="lg" />

            {/* 4. АГЕНТЫ ДЖИВИО — scroll-driven showcase */}
            <AgentsShowcase
              title={'Каждый агент закрывает свою задачу'}
            />

            <Spacer size="lg" />

            {/* 5. КОНТРОЛЬ И ПРОЗРАЧНОСТЬ — BentoGrid */}
            <BentoGrid items={controlBentoItems} />

            <Spacer size="lg" />

            {/* 6. ДОПОЛНИТЕЛЬНЫЕ МОДУЛИ — SEO Pro + Планировщик поставок */}
            <ProductsSlider
              title="Полный цикл управления"
              subtitle="Дополнительные модули для комплексной автоматизации"
              showNavigation={false}
              products={[
                {
                  id: 'seo-pro',
                  name: 'SEO Pro',
                  description: 'Ежедневный мониторинг карточек: наименования, описания, ключевые запросы. Если у конкурентов появился новый работающий ключ — система предложит добавить его. Обновления публикуются на маркетплейс автоматически.',
                  color: 'yellow',
                  href: 'https://jvo.ru/seopro',
                },
                {
                  id: 'supply-planner',
                  name: 'Планировщик поставок',
                  description: 'Рассчитывает потребность каждого склада по каждому товару — с учётом оборачиваемости, коэффициента приёмки и кратности. Распределяет товары по регионам и подбирает наиболее выгодные слоты для отгрузки.',
                  color: 'red',
                  href: 'https://jvo.ru/logistics',
                },
              ]}
            />

            <Spacer size="lg" />

            {/* 7. СТУДИЯ */}
            <FeatureSection
              title="Дживио Студия — для брендов, которым нужна экспертиза"
              description="40+ специалистов, опыт в 150+ нишах, аккредитованное агентство Wildberries. Каждый сотрудник прошёл персональную аккредитацию маркетплейса."
              bullets={[
                'Берём управление кабинетом на себя полностью или частично',
                'Выстраиваем стратегию и сопровождаем вас на каждом шаге',
              ]}
              buttonText="Запросить консультацию"
              reversed
            />

            <Spacer size="lg" />

            {/* 8. ЗАПУСК */}
            <LaunchSection
              title={'Моментальный запуск'}
              subtitle="Готовые сценарии, агент-внедренец и поддержка экспертов"
              cards={[
                {
                  id: 'scenarios',
                  title: 'Готовые сценарии',
                  description: 'Библиотека стратегий от лидеров рынка — выбираете подходящий и запускаете.',
                },
                {
                  id: 'onboarding-agent',
                  title: 'Агент-внедренец',
                  description: 'Задаст вопросы о ваших задачах и подберёт наиболее подходящий сценарий.',
                },
                {
                  id: 'first-day',
                  title: 'Первый рабочий день агентов',
                  description: 'День подключения — первый рабочий день агентов. Агенты начинают действовать сразу после настройки.',
                },
                {
                  id: 'expert-help',
                  title: 'Нужна помощь с запуском?',
                  description: 'Эксперты Дживио подключатся, настроят агентов под ваши задачи и проведут через первые результаты.',
                },
              ]}
              tagText="Быстрый старт"
              bottomText="Агенты начинают действовать сразу после настройки"
            />

            <Spacer size="lg" />

            {/* 9. КЕЙСЫ */}
            <CasesSection
              title="Результаты клиентов"
              subtitle="Все кейсы — в Дживио Журнале"
              cases={cases}
            />

            <Spacer size="lg" />

            {/* 10. ОТЗЫВЫ */}
            <ReviewsSection
              title="Отзывы клиентов"
              reviews={reviews}
            />

            <Spacer size="lg" />

            {/* 11. ДОСТИЖЕНИЯ */}
            <AwardsSection />

            <Spacer size="lg" />

            {/* 12. ФИНАЛЬНЫЙ CTA — форма записи на демо */}
            <FinalCTASection />
          </>
        )}

        {showFaq && (
          <>
            {/* 13. FAQ */}
            <FAQSection
              title="Часто задаваемые вопросы"
              faqs={mainPageFAQs}
            />
          </>
        )}
      </main>

      {!embedded && <Footer />}
    </div>
  );
}

MainPage.propTypes = {
  className: PropTypes.string,
  embedded: PropTypes.bool,
  section: PropTypes.oneOf(['main', 'faq']),
};

export default MainPage;
