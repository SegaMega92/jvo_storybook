import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LandingPage } from './pages/LandingPage';
import './index.css';

function initPage() {
  const rootElement = document.getElementById('jvo-landing-root');
  const mainElement = document.getElementById('jvo-landing-main');

  if (mainElement) {
    createRoot(mainElement).render(
      <StrictMode>
        <LandingPage embedded />
      </StrictMode>
    );
  } else if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <LandingPage embedded />
      </StrictMode>
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
