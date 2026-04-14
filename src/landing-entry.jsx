import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LandingPage } from './pages/LandingPage';
import './index.css';

// Встраиваемая версия лендинга (без Header/Footer)
// Поддерживает три варианта:
// 1. #jvo-landing-root — весь лендинг целиком
// 2. #jvo-landing-main + #jvo-landing-faq — раздельные блоки

function initLanding() {
  const rootElement = document.getElementById('jvo-landing-root');
  const mainElement = document.getElementById('jvo-landing-main');
  const faqElement = document.getElementById('jvo-landing-faq');

  if (mainElement || faqElement) {
    // Раздельный режим: main и faq в разных контейнерах
    if (mainElement) {
      createRoot(mainElement).render(
        <StrictMode>
          <LandingPage embedded section="main" />
        </StrictMode>
      );
    }

    if (faqElement) {
      createRoot(faqElement).render(
        <StrictMode>
          <LandingPage embedded section="faq" />
        </StrictMode>
      );
    }
  } else if (rootElement) {
    // Обычный режим: всё в одном контейнере
    createRoot(rootElement).render(
      <StrictMode>
        <LandingPage embedded />
      </StrictMode>
    );
  }
}

// Ждём загрузки DOM перед инициализацией
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanding);
} else {
  initLanding();
}
