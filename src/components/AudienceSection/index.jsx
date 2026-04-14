import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './AudienceSection.module.css';

// Фото для отзывов
import avatarAnna from '../../assets/avatars/female-1.webp';
import avatarElena from '../../assets/avatars/female-2.webp';
import avatarNatalya from '../../assets/avatars/female-3.webp';
import avatarDmitriy from '../../assets/avatars/male-1.webp';
import avatarAleksandr from '../../assets/avatars/male-2.webp';
import avatarMikhail from '../../assets/avatars/male-3.webp';

// Данные табов (контент для каждой аудитории)
const defaultTabs = [
  {
    id: 'supplier-medium',
    label: 'Среднему поставщику',
    description: 'Избавляет от операционного хаоса и ручного контроля матрицы. Позволяет расти без найма новых сотрудников и превращать часть обращений в дополнительные продажи за счёт умных рекомендаций.',
    testimonial: {
      avatar: avatarDmitriy,
      name: 'Дмитрий, владелец магазина товаров для дома',
      text: '«Раньше отвечал на отзывы сам по вечерам. Теперь Агент обрабатывает 90% обращений, а кросс-продажи приносят дополнительные заказы. Вырос в 2 раза за год без нового сотрудника»',
    },
  },
  {
    id: 'supplier-large',
    label: 'Крупному поставщику',
    description: 'Снимает ограничения роста и освобождает до 70% времени команды. Позволяет работать с расширенной матрицей и большим объёмом обращений без раздувания ФОТ.',
    testimonial: {
      avatar: avatarNatalya,
      name: 'Наталья, директор по развитию (Электроника)',
      text: '«При масштабировании до 15 000 SKU объём отзывов вырос втрое. Раньше пришлось бы нанимать ещё 4 человека — теперь Агент закрывает этот объём, а команда фокусируется на стратегических задачах. Экономия на ФОТ окупила систему за первый месяц»',
    },
  },
  {
    id: 'monobrand',
    label: 'Собственнику монобренда',
    description: 'Разрывает зависимость роста штата от объёма входящих обращений и количества артикулов. Заменяет обучение сотрудников готовыми AI-сценариями, исключая ошибки из-за человеческого фактора.',
    testimonial: {
      avatar: avatarMikhail,
      name: 'Михаил, владелец бренда сложной бытовой техники',
      text: '«У нас специфический товар. Загрузили в сценарии все технические регламенты — теперь Агент консультирует покупателей по характеристикам на уровне специалистов. Полноценный инструмент поддержки»',
    },
  },
  {
    id: 'ecom-head',
    label: 'Руководителю e-com',
    description: 'Возвращает роль стратега при управлении тысячами SKU. Система сама находит проблемы в воронке и даёт инструменты для их мгновенного исправления.',
    testimonial: {
      avatar: avatarAnna,
      name: 'Анна, руководитель e-com направления (Одежда и обувь)',
      text: '«Агент реально помогает продавать. Самое ценное — он видит остатки в реальном времени. Если конкретной модели нет в наличии, он не предложит её в пару к покупке, а подберёт подходящий товар исходя из контекста отзыва и текущего склада»',
    },
  },
  {
    id: 'mp-manager',
    label: 'Менеджеру маркетплейсов',
    description: 'Освобождает до 4 часов в день от рутины и Excel. Позволяет перейти от «тушения пожаров» к поиску точек роста и повышению своей экспертности.',
    testimonial: {
      avatar: avatarElena,
      name: 'Елена, ведущий менеджер (Аксессуары)',
      text: '«Очень выручает функция работы с рейтингом. Агент сам замечает, когда покупатель ставит низкую оценку при хорошем отзыве, и вежливо просит её пересмотреть. Благодаря этому удалось поднять средний рейтинг бренда, просто исправляя такие случайные ошибки»',
    },
  },
  {
    id: 'marketing',
    label: 'Маркетингу и производству',
    description: 'Превращает отзывы в базу инсайтов. Позволяет быстро устранять брак, дорабатывать продукт под рынок и находить точные триггеры для рекламы.',
    testimonial: {
      avatar: avatarAleksandr,
      name: 'Александр, операционный директор (бренд косметики)',
      text: '«Ценю систему за аналитику. Раз в неделю получаем отчёт с проблемами — падение выкупа, вопросы к продукту. Оперативно вносим правки в производство, опираясь на реальную обратную связь»',
    },
  },
];

/**
 * AudienceSection - секция "Кому необходим Агент"
 * Табы слева, контент справа, отзыв внизу
 */
export function AudienceSection({
  title = 'Кому необходим Агент коммуникаций',
  tabs = defaultTabs,
  tagText = 'Системное управление и кратный рост без расширения штата',
  bottomText = 'Агент позволяет увеличить количество и скорость обрабатываемых артикулов без потери качества и необходимости найма новых сотрудников',
  className = '',
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const tabsRef = useRef([]);
  const tabsMenuRef = useRef(null);

  // Анимация появления при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateIn}`);
    elements?.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Скролл активного таба в видимую область при появлении секции
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Прокручиваем активный таб в видимую область
            setTimeout(() => {
              tabsRef.current[activeTab]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
              });
            }, 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [activeTab]);

  // Смена таба с анимацией
  const handleTabChange = (index) => {
    if (index === activeTab || isAnimating) return;

    // Скроллим таб в видимую область
    tabsRef.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });

    setIsAnimating(true);
    contentRef.current?.classList.add(styles.fadeOut);

    setTimeout(() => {
      setActiveTab(index);
      contentRef.current?.classList.remove(styles.fadeOut);
      contentRef.current?.classList.add(styles.fadeIn);

      setTimeout(() => {
        contentRef.current?.classList.remove(styles.fadeIn);
        setIsAnimating(false);
      }, 300);
    }, 200);
  };

  // Навигация стрелками для мобильной версии
  const goToPrev = () => {
    const newIndex = activeTab > 0 ? activeTab - 1 : tabs.length - 1;
    handleTabChange(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeTab < tabs.length - 1 ? activeTab + 1 : 0;
    handleTabChange(newIndex);
  };

  const currentTab = tabs[activeTab];

  return (
    <section className={`${styles.section} ${className}`} ref={sectionRef}>
      {/* Заголовок */}
      <h2 className={`${styles.title} ${styles.animateIn}`}>{title}</h2>

      {/* Основной блок с табами */}
      <div className={`${styles.mainBlock} ${styles.animateIn}`}>
        {/* Меню табов - десктоп */}
        <div className={styles.tabsMenu} ref={tabsMenuRef}>
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => (tabsRef.current[index] = el)}
              className={`${styles.tabButton} ${index === activeTab ? styles.tabButtonActive : ''}`}
              onClick={() => handleTabChange(index)}
            >
              {index === activeTab && <span className={styles.tabArrow}>→ </span>}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Навигация стрелками - мобильная */}
        <div className={styles.mobileNav}>
          <button
            className={styles.navArrow}
            onClick={goToPrev}
            aria-label="Предыдущий"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className={styles.mobileNavCenter}>
            <span className={styles.mobileNavLabel}>{currentTab.label}</span>
            <span className={styles.mobileNavCounter}>{activeTab + 1} из {tabs.length}</span>
          </div>
          <button
            className={styles.navArrow}
            onClick={goToNext}
            aria-label="Следующий"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Контент */}
        <div className={styles.content} ref={contentRef}>
          <p className={styles.contentDescription}>{currentTab.description}</p>

          {/* Отзыв */}
          <div className={styles.testimonial}>
            <img
              src={currentTab.testimonial.avatar}
              alt=""
              className={styles.testimonialAvatar}
              loading="lazy"
            />
            <div className={styles.testimonialText}>
              <p className={styles.testimonialName}>{currentTab.testimonial.name}</p>
              <p className={styles.testimonialQuote}>{currentTab.testimonial.text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Нижний блок с тегом */}
      <div className={`${styles.bottomBlock} ${styles.animateIn}`}>
        <div className={styles.tag}>
          <span className={styles.tagIcon}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5L5 9L13 1" stroke="#C16FFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className={styles.tagText}>{tagText}</span>
        </div>
        <p className={styles.bottomText}>{bottomText}</p>
      </div>
    </section>
  );
}

AudienceSection.propTypes = {
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      testimonial: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    })
  ),
  tagText: PropTypes.string,
  bottomText: PropTypes.string,
  className: PropTypes.string,
};

export default AudienceSection;
