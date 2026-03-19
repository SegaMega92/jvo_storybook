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
import heroIllustration from '../../assets/hero/illustration-agent.png';
import heroGradient from '../../assets/hero/gradient.png';
import tagIconAgent from '../../assets/icons/tag-agent.svg';

// Assets for FeatureSlider slides
import slideAutoresponse1 from '../../assets/slides/tonality-1.png';
import slideAutoresponse2 from '../../assets/slides/tonality-2.png';
import slideAutoresponse3 from '../../assets/slides/tonality-3.png';
import slideAutoresponse4 from '../../assets/slides/tonality-4.png';
import slideCrossSell1 from '../../assets/slides/cross-sales-1.png';
import slideCrossSell2 from '../../assets/slides/cross-sales-2.png';
import slideCrossSell3 from '../../assets/slides/cross-sales-3.png';
import slideAnalytics1 from '../../assets/slides/analytics-1.png';
import slideAnalytics2 from '../../assets/slides/analytics-2.png';
import slideAnalytics3 from '../../assets/slides/analytics-3.png';
import slideAnalytics4 from '../../assets/slides/analytics-4.png';
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
    description: typograph('система распределяет найденные отклонения по уровням критичности — от рекомендованных до важных и критических — для фокусировки на задачах, требующих решения в первую очередь.'),
  },
  {
    image: <RightIllustration />,
    imageAlt: 'Мгновенная автоматизация',
    title: 'Мгновенная автоматизация',
    description: typograph('Часть созданных задач в один клик передаётся в работу профильным Агентам для исполнения — от управления ценами до подготовки ответов на отзывы'),
  },
];

// Компонент для отображения картинки слайда
const SlideImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className={styles.slideImage}
  />
);

SlideImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

// Данные для FeatureSliderGroup — 3 секции с полным набором слайдов
const featureSliderSections = [
  {
    tabTitle: 'Автоответы',
    sectionTitle: typograph('Автоответы на вопросы и отзывы на маркетплейсах'),
    sectionDescription: typograph('Агент обеспечивает экспертную коммуникацию на основе полных технических данных о товаре'),
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    panelBackground: gradientViolet,
    slides: [
      {
        title: typograph('Работа с тональностью'),
        description: typograph('Распознаёт контекст и специфику обращений, подбирая точную реакцию без использования универсальных фраз'),
        media: <SlideImage src={slideAutoresponse1} alt="Работа с тональностью" />,
        background: gradientViolet,
      },
      {
        title: 'Корректировка рейтинга',
        description: typograph('Определяет несоответствие содержания отзыва и поставленной оценки, предлагая клиенту скорректировать оценку'),
        media: <SlideImage src={slideAutoresponse2} alt="Корректировка рейтинга" />,
        background: gradientViolet,
      },
      {
        title: 'Отработка возражений',
        description: typograph('Формирует ответы на основе реальных характеристик, описания карточки и заданных правил и ограничений'),
        media: <SlideImage src={slideAutoresponse3} alt="Отработка возражений" />,
        background: gradientViolet,
      },
      {
        title: typograph('Ответы на вопросы'),
        description: typograph('Оперативно отвечает на вопросы покупателей, используя данные карточки товара и базу знаний бренда'),
        media: <SlideImage src={slideAutoresponse4} alt="Ответы на вопросы" />,
        background: gradientViolet,
      },
    ],
  },
  {
    tabTitle: 'Кросс-продажи',
    sectionTitle: 'Умные кросс-продажи',
    sectionDescription: typograph('Автоматические рекомендации релевантных товаров в ответах с учётом остатков на складах'),
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    panelBackground: gradientPink,
    slides: [
      {
        title: typograph('Рекомендация до 5 артикулов'),
        description: typograph('Агент анализирует покупку, контекст отзыва и предлагает дополняющие товары, которые действительно интересны покупателю.'),
        media: <SlideImage src={slideCrossSell1} alt="Рекомендация до 5 артикулов" />,
        background: gradientPink,
      },
      {
        title: 'Проверка остатков',
        description: typograph('Автоматически проверяет наличие товаров на складах и исключает из рекомендаций позиции, которых нет в наличии'),
        media: <SlideImage src={slideCrossSell2} alt="Проверка остатков" />,
        background: gradientPink,
      },
      {
        title: 'Персонализация',
        description: typograph('Учитывает историю покупок и предпочтения клиента для формирования наиболее релевантных предложений'),
        media: <SlideImage src={slideCrossSell3} alt="Персонализация" />,
        background: gradientPink,
      },
    ],
  },
  {
    tabTitle: 'Аналитика',
    sectionTitle: 'Аналитические отчёты',
    sectionDescription: typograph('Готовые решения и рекомендации по улучшению продукта на основе обратной связи от покупателей'),
    buttonText: 'Оставить заявку',
    buttonHref: '#demo',
    panelBackground: gradientMagenta,
    slides: [
      {
        title: 'Для развития продукта',
        description: typograph('Детализирует повторяющиеся запросы и фиксирует незакрытые потребности покупателей для доработки ассортимента и поиска новых точек роста.'),
        media: <SlideImage src={slideAnalytics1} alt="Для развития продукта" />,
        background: gradientMagenta,
      },
      {
        title: 'Для производства',
        description: typograph('Систематизирует данные по причинам брака, критическим замечаниям к характеристикам и повторяющимся дефектам товара'),
        media: <SlideImage src={slideAnalytics2} alt="Для производства" />,
        background: gradientMagenta,
      },
      {
        title: 'Для маркетинга',
        description: typograph('Выявляет ключевые преимущества продукта по мнению покупателей и формирует рекомендации для позиционирования'),
        media: <SlideImage src={slideAnalytics4} alt="Для маркетинга" />,
        background: gradientMagenta,
      },
      {
        title: 'Для логистики',
        description: typograph('Анализирует отзывы о доставке и упаковке, выявляя проблемные зоны в цепочке поставок'),
        media: <SlideImage src={slideAnalytics3} alt="Для логистики" />,
        background: gradientMagenta,
      },
    ],
  },
];

/**
 * LandingPage - полная страница лендинга "Агент Коммуникаций"
 */
export function LandingPage({ className = '' }) {
  return (
    <div className={`${styles.page} ${className}`}>
      <Header />

      <main className={styles.main}>
        {/* Hero: SectionHeader + HeroBlock */}
        <SectionHeader
          tag="Агент коммуникаций"
          tagIcon={tagIconAgent}
          title={typograph('Ответы на отзывы, вопросы и кросс-продажи')}
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
            buttonHref="#demo"
            videoSrc="https://kinescope.io/embed/xkELCPCoL3CtbZguap7EHb"
          />
        </div>

        <Spacer size="xl" />

        <MonitoringSection
          title={typograph('Мониторинг и аналитика')}
          subtitle={typograph('Это центр управления и главный движок Дживио. Система ежедневно проводит аудит воронки продаж, выявляет отклонения и формирует готовые задачи для автоматизации через ИИ-Агентов')}
          cards={monitoringCards}
        />

        <Spacer size="xl" />

        <FeatureSliderGroup sections={featureSliderSections} />

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

        <ProductsSlider
          title="Другие решения системы Дживио"
          subtitle={typograph('Для автоматизации бизнеса на маркетплейсах используйте наши ИИ-продукты:')}
        />

        <Spacer size="xl" />

        <Spacer size="md" background="#15181f" />

        <FAQSection
          title="Часто задаваемые вопросы"
        />
      </main>

      <Footer />
    </div>
  );
}

LandingPage.propTypes = {
  className: PropTypes.string,
};

export default LandingPage;
