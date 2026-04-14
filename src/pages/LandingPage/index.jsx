import PropTypes from 'prop-types';
import styles from './LandingPage.module.css';
import { typograph, typographArray } from '../../utils/typograph';

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
import { AgentWorkflowDemo } from '../../components/Illustrations/AgentWorkflowDemo';
import illustrationCommunication from '../../assets/illustrations/communication.svg';

// Assets for HeroBlock
import tagIconAgent from '../../assets/icons/tag-agent.svg';

// Assets for FeatureSlider slides
import slideAutoresponse1 from '../../assets/slides/tonality-1.webp';
import slideAutoresponse2 from '../../assets/slides/tonality-2.webp';
import slideAutoresponse3 from '../../assets/slides/tonality-3.webp';
import slideAutoresponse4 from '../../assets/slides/tonality-4.webp';
import slideCrossSell1 from '../../assets/slides/cross-sales-1.webp';
import slideCrossSell2 from '../../assets/slides/cross-sales-2.webp';
import slideCrossSell3 from '../../assets/slides/cross-sales-3.webp';
import slideAnalytics1 from '../../assets/slides/analytics-1.webp';
import slideAnalytics2 from '../../assets/slides/analytics-2.webp';
import slideAnalytics3 from '../../assets/slides/analytics-3.webp';
import slideAnalytics4 from '../../assets/slides/analytics-4.webp';
import gradientViolet from '../../assets/slides/gradient-violet.svg';
import gradientPink from '../../assets/slides/gradient-pink.svg';
import gradientMagenta from '../../assets/slides/gradient-magenta.svg';

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

// Данные для MonitoringSection
const monitoringCards = [
  {
    image: <LeftIllustration />,
    imageAlt: 'Приоритезация алертов',
    title: 'Приоритезация алертов',
    description: typograph('Система распределяет найденные отклонения по уровням критичности — от рекомендованных до важных и критических — для фокуса на задачах, которые требуют решения в первую очередь.'),
  },
  {
    image: <RightIllustration />,
    imageAlt: 'Мгновенная автоматизация',
    title: 'Мгновенная автоматизация',
    description: typograph('Часть созданных задач в один клик передаётся в работу профильным Агентам — от управления ценами до подготовки ответов на отзывы.'),
  },
];

// SVG Иконки для v2 фич
const IconTonality = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>
);

const IconRating = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconObjections = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconQuestions = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M9 9a3 3 0 115.12 2.12c-.54.54-1.12 1.13-1.12 2.38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

const IconRecommendations = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    <path d="M17.5 14v7M14 17.5h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconStock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPersonalization = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M16 3l2 2-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconProduct = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconProduction = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconMarketing = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconLogistics = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" strokeWidth="2" />
    <path d="M16 8h4l3 3v5a1 1 0 01-1 1h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Данные для FeatureSliderGroup v2 — 3 секции
const featureSliderSectionsV2 = [
  {
    title: typograph('Автоответы на вопросы\nи отзывы'),
    description: typograph('Агент обеспечивает экспертную коммуникацию на основе полных технических данных о товаре'),
    buttonText: 'Оставить заявку',
    buttonHref: '#form',
    features: [
      {
        icon: <IconTonality />,
        title: typograph('Работа с тональностью'),
        description: typograph('Распознаёт контекст и специфику обращений, подбирая точную реакцию без использования универсальных фраз'),
        image: slideAutoresponse1,
        background: gradientViolet,
      },
      {
        icon: <IconRating />,
        title: 'Корректировка рейтинга',
        description: typograph('Определяет несоответствие между содержанием отзыва и поставленной оценкой, предлагая клиенту её скорректировать.'),
        image: slideAutoresponse2,
        background: gradientViolet,
      },
      {
        icon: <IconObjections />,
        title: 'Отработка возражений',
        description: typograph('Формирует ответы на основе характеристик товара, описания карточки и заданных правил и ограничений.'),
        image: slideAutoresponse3,
        background: gradientViolet,
      },
      {
        icon: <IconQuestions />,
        title: typograph('Ответы на вопросы'),
        description: typograph('Оперативно отвечает на вопросы покупателей, используя данные карточки товара и базу знаний бренда'),
        image: slideAutoresponse4,
        background: gradientViolet,
      },
    ],
  },
  {
    title: 'Умные\nкросс‑продажи',
    description: typograph('Автоматические рекомендации релевантных товаров в ответах с учётом остатков на складах'),
    buttonText: 'Оставить заявку',
    buttonHref: '#form',
    features: [
      {
        icon: <IconRecommendations />,
        title: typograph('Рекомендации до 5 артикулов'),
        description: typograph('Анализирует покупку, контекст отзыва и предлагает дополняющие товары, которые действительно интересны покупателю.'),
        image: slideCrossSell1,
        background: gradientPink,
      },
      {
        icon: <IconStock />,
        title: 'Проверка остатков',
        description: typograph('Автоматически проверяет наличие товаров на складах и исключает из рекомендаций позиции, которых нет в наличии'),
        image: slideCrossSell2,
        background: gradientPink,
      },
      {
        icon: <IconPersonalization />,
        title: 'Персонализация',
        description: typograph('Учитывает историю покупок и предпочтения клиента для формирования наиболее релевантных предложений'),
        image: slideCrossSell3,
        background: gradientPink,
      },
    ],
  },
  {
    title: 'Аналитические\nотчёты',
    description: typograph('Готовые решения и рекомендации по улучшению продукта на основе обратной связи от покупателей'),
    buttonText: 'Оставить заявку',
    buttonHref: '#form',
    features: [
      {
        icon: <IconProduct />,
        title: 'Для развития продукта',
        description: typograph('Детализирует повторяющиеся запросы и фиксирует незакрытые потребности покупателей для доработки ассортимента и поиска новых точек роста.'),
        image: slideAnalytics1,
        background: gradientMagenta,
      },
      {
        icon: <IconProduction />,
        title: 'Для производства',
        description: typograph('Систематизирует данные по причинам брака, критическим замечаниям к характеристикам и повторяющимся дефектам товара'),
        image: slideAnalytics2,
        background: gradientMagenta,
      },
      {
        icon: <IconMarketing />,
        title: 'Для маркетинга',
        description: typograph('Выявляет ключевые преимущества продукта по мнению покупателей и формирует рекомендации для позиционирования'),
        image: slideAnalytics4,
        background: gradientMagenta,
      },
      {
        icon: <IconLogistics />,
        title: 'Для логистики',
        description: typograph('Анализирует отзывы о доставке и упаковке, выявляя проблемные зоны в цепочке поставок'),
        image: slideAnalytics3,
        background: gradientMagenta,
      },
    ],
  },
];

/**
 * LandingPage - полная страница лендинга "Агент Коммуникаций"
 * @param {string} section - "main" (без FAQ), "faq" (только FAQ), или undefined (всё)
 */
export function LandingPage({ className = '', embedded = false, section }) {
  const showMain = !section || section === 'main';
  const showFaq = !section || section === 'faq';

  return (
    <div className={`${styles.page} ${className}`}>
      {!embedded && <Header />}

      <main className={styles.main}>
        {showMain && (
          <>
            {/* Hero: SectionHeader + HeroBlock */}
            <SectionHeader
              tag="Агент коммуникаций"
              tagIcon={tagIconAgent}
              title={typograph('Ответы на отзывы, вопросы и кросс‑продажи')}
              subtitle={typograph('Автоматизируйте общение с покупателями, превращайте отзывы в повторные продажи и получайте готовую аналитику для бизнеса')}
            />
            <div className={styles.heroBlockWrapperWide}>
              <HeroBlock
                variant="flat"
                features={typographArray([
                  'Оплата только за результат — от 1,3 ₽ за действие',
                  'Кросс-продажи до 5 артикулов с проверкой остатков',
                  'Готовые отчёты для производства, логистики и маркетинга',
                ])}
                buttonText="Подключить ИИ-агента"
                buttonHref="#form"
                videoSrc="https://kinescope.io/embed/xkELCPCoL3CtbZguap7EHb"
              />
            </div>

            <Spacer size="xl" />

            <MonitoringSection
              title={typograph('Мониторинг и аналитика')}
              subtitle={typograph('Система ежедневно проводит аудит воронки продаж, выявляет отклонения и формирует готовые задачи для автоматизации через ИИ-Агентов')}
              cards={monitoringCards}
            />

            <Spacer size="xl" />

            <FeatureSliderGroup variant="v2" sections={featureSliderSectionsV2} autoplayInterval={8000} />

            <Spacer size="xl" />

            <ComparisonSlider
              title="Преимущества Агента перед конкурентами"
              subtitle={typograph('Сравните возможности нашего Агента с типовыми решениями на рынке')}
            />

            <Spacer size="xl" />

            <BentoGrid />

            <Spacer size="xl" />

            <AudienceSection
              title="Кому необходим Агент коммуникаций"
            />

            <Spacer size="xl" />

            <LaunchSection
              title={typograph('Запуск и внедрение системы Дживио')}
              subtitle={typograph('Все необходимые инструменты и поддержка для комфортного старта и эффективной работы команды')}
            />

            <Spacer size="xl" />
          </>
        )}

        {showFaq && (
          <>
            <Spacer size="md" background="#15181f" />

            <FAQSection
              title="Часто задаваемые вопросы"
            />
          </>
        )}
      </main>

      {!embedded && <Footer />}
    </div>
  );
}

LandingPage.propTypes = {
  className: PropTypes.string,
  embedded: PropTypes.bool,
  section: PropTypes.oneOf(['main', 'faq']),
};

export default LandingPage;
