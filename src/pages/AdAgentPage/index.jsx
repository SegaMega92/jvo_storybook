import PropTypes from 'prop-types';
import styles from './AdAgentPage.module.css';
import { Header } from '../../components/Header';
import { HeroBlock } from '../../components/HeroBlock';
import { AdCycleSection } from '../../components/AdCycleSection';
import { DataDrivenSection } from '../../components/DataDrivenSection';
import { StrategiesSection } from '../../components/StrategiesSection';
import { AdBenefitsSection } from '../../components/AdBenefitsSection';
import { ScalabilitySection } from '../../components/ScalabilitySection';
import { ComparisonSlider } from '../../components/ComparisonSlider';
import { LaunchSection } from '../../components/LaunchSection';
import { FAQSection } from '../../components/FAQSection';
import { typograph } from '../../utils/typograph';
import adAgentTagIcon from '../../assets/icons/ad-agent-tag.svg';
import heroGradientImg from '../../assets/hero-gradient.webp';
import { IllustrationAdvertising } from '../../components/Illustrations/IllustrationAdvertising';

const heroFeatures = [
  'До 30% экономии бюджета — реакция <5 минут',
  'Автономная работа 24/7 — освобождает 2–3 часа в день',
  'Полная прозрачность — каждое действие агента фиксируется в логе',
  '5 готовых стратегий от «Дживио Студии» с опытом 6+ лет',
  'Интуитивно понятная настройка агента',
];

const comparisonSlides = [
  {
    title: 'Частота проверки ставок',
    agent: {
      text: 'Раз в 3–5 минут. Достаточно для оперативной реакции на изменения аукциона без «дёрготни» ставок и лишнего расхода бюджета',
    },
    competitor: {
      text: 'Разброс от 30 секунд до 2 часов. Слишком редкая проверка — потеря позиций. Слишком частая — избыточные изменения без гарантии роста конверсии',
    },
  },
  {
    title: 'Контроль ДРР',
    agent: {
      text: 'Пользователь задаёт целевой % ДРР через промт. Агент сам регулирует ставки и дневные лимиты для достижения порога. Пример: «Если ДРР артикула ≥ 10% — снизь дневной лимит до 300 ₽»',
    },
    competitor: {
      text: 'ДРР не контролируется автоматически — нужно вручную следить за показателями и корректировать бюджеты кампаний',
    },
  },
  {
    title: 'Исключение кластеров',
    agent: {
      text: 'Автоматически убирает неэффективные поисковые запросы из рекламы WB после 100 показов без конверсии — экономит бюджет точечно',
    },
    competitor: {
      text: 'Ручная работа с кластерами или функция отсутствует полностью',
    },
  },
  {
    title: 'Остановка РК по условию',
    agent: {
      text: 'При срабатывании условия — ставит РК на паузу; при восстановлении показателей — автоматически перезапускает',
    },
    competitor: {
      text: 'Только ручная остановка или простой таймер без привязки к бизнес-метрикам',
    },
  },
  {
    title: 'Связка с остатками',
    agent: {
      text: 'Агент учитывает реальные остатки на складе — не запустит рекламу на товар, которого нет в наличии',
    },
    competitor: {
      text: 'Реклама работает без учёта остатков — возможны показы на OOS-товары и слив бюджета',
    },
  },
  {
    title: 'Прозрачность действий',
    agent: {
      text: 'Каждое изменение фиксируется в логе событий: что изменилось, когда и с каким результатом',
    },
    competitor: {
      text: 'Большинство ведут логи, но часть платформ этой функции не имеет — вы видите результат, но не понимаете логику',
    },
  },
  {
    title: 'Защита от перерасхода',
    agent: {
      text: 'Дневной лимит жёсткий — перерасход невозможен. Агент проверяет расходы каждые 15 минут',
    },
    competitor: {
      text: 'Мягкий лимит — возможен перерасход на 10–30% из-за особенностей работы аукциона',
    },
  },
  {
    title: 'Правила на русском языке',
    agent: {
      text: 'Сценарии задаются простыми словами: «если ДРР выше 7% — снизь дневной лимит». Не нужно знать программирование',
    },
    competitor: {
      text: 'Сложный интерфейс с техническими настройками, требует специальных знаний',
    },
  },
];

const adAgentFaqs = [
  {
    id: 1,
    question: 'Это то же самое, что биддер?',
    answer: 'Нет. Биддер регулирует ставку под позицию в поиске и делает одно действие. Агент рекламы управляет кампанией целиком: контролирует ДРР, CPO, остатки, бюджет, исключает кластеры и может полностью останавливать или перезапускать РК на основе данных вашего бизнеса и правил. Биддер — только один из механизмов внутри агента.',
  },
  {
    id: 2,
    question: 'Как агент принимает решения?',
    answer: 'Агент работает по правилам вида «если X → то Y». Условия проверяются на каждом цикле. Если данных не хватает или метрики нестабильны — агент пропускает шаг и ничего не меняет. Каждое решение записывается в лог.',
  },
  {
    id: 3,
    question: 'Можно подключить существующую рекламную кампанию?',
    answer: 'Пока нет — агент работает только с кампаниями, созданными через него. Созданная через агент кампания одновременно появляется и в Дживио, и на маркетплейсе.',
  },
  {
    id: 4,
    question: 'Агент может потратить больше, чем я планировал?',
    answer: 'На WB — нет. Дневной лимит жёсткий, агент проверяет расходы каждые 15 минут и при достижении лимита автоматически ставит кампанию на паузу. На OZON агент также контролирует расходы на своей стороне.',
  },
  {
    id: 5,
    question: 'Как быстро агент начнёт полноценно работать?',
    answer: 'Сразу после запуска кампании. Но для появления кластеров на WB нужно время: в популярных категориях — иногда с первого дня, в медленных нишах — 1–2 дня.',
  },
  {
    id: 6,
    question: 'Нужны ли специальные знания для управления Агентом?',
    answer: 'Нет. Правила задаются на русском языке простыми фразами. Также доступна библиотека готовых стратегий.',
  },
  {
    id: 7,
    question: 'Можно ли запустить две РК на один товар?',
    answer: 'Да. Можно параллельно использовать несколько кампаний с разными типами и стратегиями.',
  },
  {
    id: 8,
    question: 'Насколько безопасно давать доступ к кабинетам маркетплейсов?',
    answer: 'Подключение происходит через официальные API-ключи с разграничением прав. Финансовые показатели и критические настройки логистики защищены от изменений.',
  },
];

export function AdAgentPage({ className = '', embedded = false }) {
  return (
    <div className={`${styles.page} ${className}`}>
      {!embedded && <Header />}

      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              <span className={styles.heroTagIconBox}>
                <img src={adAgentTagIcon} alt="" className={styles.heroTagIcon} />
              </span>
              <span>{typograph('Агент Рекламы')}</span>
            </div>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                {typograph('Автоматическое управление рекламой на маркетплейсах')}
              </h1>
              <p className={styles.heroSubtitle}>
                {typograph('ИИ-агент самостоятельно управляет ставками, бюджетом и эффективностью рекламных кампаний на Wildberries и Ozon — по правилам, которые задаёте вы')}
              </p>
            </div>
          </div>

          <HeroBlock
            variant="flat"
            features={heroFeatures}
            buttonText={typograph('Подключить ИИ-агента')}
            buttonHref="https://jvo.ru/requestdemo"
            illustration={
              <div className={styles.heroIllustration}>
                <img src={heroGradientImg} alt="" className={styles.heroGradientBg} />
                <div className={styles.heroIllustrationContent}>
                  <IllustrationAdvertising isActive={true} />
                </div>
              </div>
            }
            className={styles.heroBlock}
          />
        </section>

        <AdCycleSection />

        <DataDrivenSection className={styles.dataSection} />

        <StrategiesSection />

        <AdBenefitsSection className={styles.benefitsSection} />

        <ScalabilitySection />

        <ComparisonSlider
          title={typograph('Преимущества Агента перед конкурентами')}
          subtitle={typograph('Сравните возможности ИИ-агента «Дживио» с типовыми решениями на рынке')}
          slides={comparisonSlides}
        />

        <LaunchSection
          title={typograph('Всё для комфортного старта')}
          subtitle={typograph('Все необходимые инструменты и поддержка для быстрого подключения и эффективной работы команды')}
        />

        <FAQSection faqs={adAgentFaqs} />

      </main>
    </div>
  );
}

AdAgentPage.propTypes = {
  className: PropTypes.string,
  embedded: PropTypes.bool,
};

export default AdAgentPage;
