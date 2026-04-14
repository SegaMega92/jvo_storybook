import { useState } from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';
const jvoLogo = 'https://storage.yandexcloud.net/jvo-files/jvo-site/logos/jvo_logo_white.svg';

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Default navigation structure from jvo.ru
const defaultNavItems = [
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
];

/**
 * JVO Header component - light theme with dropdowns
 * Based on Figma design and jvo.ru
 */
export function Header({
  navItems = defaultNavItems,
  phone = '+7 499 322-09-33',
  email = 'hi@jvo.ru',
  ctaText = 'Запросить демо',
  ctaHref = 'https://jvo.ru/requestdemo',
  loginText = 'Войти',
  loginHref = 'https://lk.jvo.ru/',
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {/* Left: Logo + Navigation */}
        <div className={styles.header__left}>
          <a href="https://jvo.ru/" className={styles.header__logo} aria-label="JVO - На главную">
            <img src={jvoLogo} alt="JVO" className={styles.header__logoImg} />
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.header__nav} aria-label="Главная навигация">
          <ul className={styles.header__navList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.header__navItem}>
                <a href={item.href} className={styles.header__navLink}>
                  {item.label}
                  {item.dropdown && (
                    <span className={styles.header__navArrow}>
                      <ChevronDown />
                    </span>
                  )}
                </a>
                {item.dropdown && (
                  <div className={styles.header__dropdown}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className={styles.header__dropdownLink}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        </div>

        {/* Right section */}
        <div className={styles.header__right}>
          <a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.header__phone}>
            {phone}
          </a>
          <div className={styles.header__buttons}>
            <a href={ctaHref} className={styles.header__buttonPrimary}>
              {ctaText}
            </a>
            <a href={loginHref} className={styles.header__buttonSecondary}>
              {loginText}
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className={styles.header__menuButton}
          aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className={`${styles.header__menuIcon} ${mobileMenuOpen ? styles['header__menuIcon--open'] : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.header__mobileMenu} ${mobileMenuOpen ? styles['header__mobileMenu--open'] : ''}`}>
        <ul className={styles.header__mobileNavList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.header__mobileNavItem}>
              {item.dropdown ? (
                <>
                  <button
                    className={styles.header__mobileNavLink}
                    onClick={() => toggleMobileDropdown(index)}
                  >
                    {item.label}
                    <span className={`${styles.header__navArrow} ${openDropdown === index ? styles['header__navArrow--open'] : ''}`}>
                      <ChevronDown />
                    </span>
                  </button>
                  <div className={`${styles.header__mobileDropdown} ${openDropdown === index ? styles['header__mobileDropdown--open'] : ''}`}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className={styles.header__mobileDropdownLink}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a href={item.href} className={styles.header__mobileNavLink}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.header__mobileButtons}>
          <a href={ctaHref} className={styles.header__buttonPrimary}>
            {ctaText}
          </a>
          <a href={loginHref} className={styles.header__buttonSecondary}>
            {loginText}
          </a>
        </div>

        {/* Contact info */}
        <div className={styles.header__mobileContacts}>
          <a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.header__mobilePhone}>
            {phone}
          </a>
          <a href={`mailto:${email}`} className={styles.header__mobileEmail}>
            {email}
          </a>
        </div>

      </div>
    </header>
  );
}

Header.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      dropdown: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        })
      ),
    })
  ),
  phone: PropTypes.string,
  email: PropTypes.string,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
  loginText: PropTypes.string,
  loginHref: PropTypes.string,
};

export default Header;
