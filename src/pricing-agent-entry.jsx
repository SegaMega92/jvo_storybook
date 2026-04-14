import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PricingAgentPage } from './pages/PricingAgentPage';
import './index.css';

// Встраиваемая версия лендинга "Агент ценообразования"
// Поддерживает три варианта:
// 1. #jvo-pricing-agent-root — весь лендинг целиком
// 2. #jvo-pricing-agent-main + #jvo-pricing-agent-faq — раздельные блоки

function initPricingAgent() {
  const rootElement = document.getElementById('jvo-pricing-agent-root');
  const mainElement = document.getElementById('jvo-pricing-agent-main');
  const faqElement = document.getElementById('jvo-pricing-agent-faq');

  if (mainElement || faqElement) {
    // Раздельный режим: main и faq в разных контейнерах
    if (mainElement) {
      createRoot(mainElement).render(
        <StrictMode>
          <PricingAgentPage embedded section="main" />
        </StrictMode>
      );
    }

    if (faqElement) {
      createRoot(faqElement).render(
        <StrictMode>
          <PricingAgentPage embedded section="faq" />
        </StrictMode>
      );
    }
  } else if (rootElement) {
    // Обычный режим: всё в одном контейнере
    createRoot(rootElement).render(
      <StrictMode>
        <PricingAgentPage embedded />
      </StrictMode>
    );
  }
}

// Ждём загрузки DOM перед инициализацией
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPricingAgent);
} else {
  initPricingAgent();
}
