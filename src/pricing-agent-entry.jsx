import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PricingAgentPage } from './pages/PricingAgentPage';
import './index.css';

function initPage() {
  const rootElement = document.getElementById('jvo-pricing-agent-root');
  const mainElement = document.getElementById('jvo-pricing-agent-main');

  if (mainElement) {
    createRoot(mainElement).render(
      <StrictMode>
        <PricingAgentPage embedded />
      </StrictMode>
    );
  } else if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <PricingAgentPage embedded />
      </StrictMode>
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
