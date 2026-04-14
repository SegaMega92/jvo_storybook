import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './FAQSection.module.css';

// Данные FAQ по умолчанию
const defaultFAQs = [
  {
    id: 1,
    question: 'Как Агент поймет специфику моего товара, если он технически сложный?',
    answer: 'Вы загружаете в сценарий текст объемом до 50 000 знаков: инструкции, составы, регламенты и даже скрипты общения. Агент отвечает на основе этих правил и даёт технически точные ответы в тональности бренда.',
  },
  {
    id: 2,
    question: 'Не напишет ли Агент лишнего в автоответе на отзыв покупателю?',
    answer: 'В Дживио используются жесткие фильтры: Агент берет информацию только из заданного сценария, описания карточки и характеристик. Если ответа на вопрос там нет, он либо ответит по заданному вами шаблону, либо пропустит и передаст диалог менеджеру.',
  },
  {
    id: 3,
    question: 'Может ли ИИ предлагать товары, которых сейчас нет в наличии?',
    answer: 'Исключено. Агент синхронизирован с вашими остатками на складах. Он рекомендует только те артикулы, которые доступны к покупке в данный момент, исключая риск рекламы отсутствующих позиций (OOS).',
  },
  {
    id: 4,
    question: 'Можно ли настроить публикацию автоответов на вопросы и отзывы только после проверки менеджером?',
    answer: 'Да. Вы можете отключить тумблер «Публиковать без подтверждения» — тогда все ответы Агента будут сохраняться как черновики. Пока этот режим настраивается на уровне артикула и применяется ко всем отзывам по выбранному товару.',
  },
  {
    id: 5,
    question: 'Умеет ли Агент анализировать вопросы, а не просто давать на них ответы?',
    answer: 'Да, Агент проводит глубокий анализ: распознает суть проблемы, собирает детали и действует по заданному сценарию. Или использует ответ как инструмент для закрытия возражений и кросс-продаж.',
  },
  {
    id: 6,
    question: 'Может ли Агент сам написать приветственное сообщение покупателю в чате WB?',
    answer: 'Нет. Агент работает только в режиме реакции. Согласно техническим настройкам и правилам площадки, он не инициирует диалог первым, но мгновенно отвечает на любое входящее обращение.',
  },
  {
    id: 7,
    question: 'Будет ли Агент отвечать на старые отзывы и вопросы, накопившиеся до подключения?',
    answer: 'Агент не перезаписывает ответы, которые уже были даны вами или другим сервисом. Однако он может проанализировать и отработать все старые отзывы и вопросы, на которые ранее не было дано никакого ответа.',
  },
  {
    id: 8,
    question: 'Насколько безопасно давать доступ к кабинетам маркетплейсов?',
    answer: 'Подключение происходит через официальные API-ключи с четким разграничением прав. На Wildberries для аналитики используются ключи на все разделы в режиме чтения, а для работы Агентов — права на редактирование только в категории «Вопросы и отзывы». На Ozon применяются роли Admin Read Only для аудита и Review/Questions/Admin для управления ответами. Такая архитектура позволяет системе эффективно работать с контентом и аналитикой, при этом финансовые показатели и критические настройки логистики остаются защищенными от изменений.',
  },
  {
    id: 9,
    question: 'Как Агент выстраивает приоритетность задач?',
    answer: 'Приоритезацию формирует блок Мониторинга на основе ежедневного аудита воронки продаж. Система раз в сутки выявляет отклонения и ранжирует их по уровням критичности. Задачи, наиболее значимые для рейтинга и конверсии, получают высший приоритет и становятся доступны для автоматизации через Агентов в первую очередь.',
  },
];

/**
 * FAQSection - секция "Часто задаваемые вопросы"
 * Аккордеон с вопросами и ответами
 */
export function FAQSection({
  title = 'Часто задаваемые вопросы',
  icon,
  faqs = defaultFAQs,
  className = '',
}) {
  const [openId, setOpenId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Анимация появления при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={`${styles.section} ${className}`} ref={sectionRef}>
      {/* Заголовок с иконкой */}
      <div className={`${styles.header} ${styles.animateIn} ${isVisible ? styles.visible : ''}`}>
        {icon && (
          <div className={styles.iconWrapper}>
            <img src={icon} alt="" className={styles.icon} />
          </div>
        )}
        <h2 className={styles.title}>{title}</h2>
      </div>

      {/* FAQ аккордеон */}
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={`${styles.faqItem} ${styles.animateIn} ${isVisible ? styles.visible : ''} ${openId === faq.id ? styles.faqItemOpen : ''}`}
            style={{ transitionDelay: isVisible ? `${(index + 1) * 0.05}s` : '0s' }}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => toggleQuestion(faq.id)}
              aria-expanded={openId === faq.id}
            >
              <span className={styles.faqQuestionText}>
                {index + 1}. {faq.question}
              </span>
              <span className={styles.faqChevron}>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.chevronIcon}
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div className={styles.faqAnswer}>
              <p className={styles.faqAnswerText}>{faq.answer}</p>
            </div>
            {index < faqs.length - 1 && <div className={styles.faqDivider} />}
          </div>
        ))}
      </div>
    </section>
  );
}

FAQSection.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
};

export default FAQSection;
