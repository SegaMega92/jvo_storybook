import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PricingPage } from './pages/PricingPage';
import './index.css';
import './tilda-overrides.css';

function initPage() {
  const rootElement = document.getElementById('jvo-pricing-root');
  const mainElement = document.getElementById('jvo-pricing-main');

  if (mainElement) {
    createRoot(mainElement).render(
      <StrictMode>
        <PricingPage embedded section="main" />
      </StrictMode>
    );
  } else if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <PricingPage embedded />
      </StrictMode>
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
