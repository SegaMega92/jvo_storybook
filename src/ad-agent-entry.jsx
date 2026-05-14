import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AdAgentPage } from './pages/AdAgentPage';
import './index.css';
import './tilda-overrides.css';

function initPage() {
  const rootElement = document.getElementById('jvo-ad-agent-root');
  const mainElement = document.getElementById('jvo-ad-agent-main');

  if (mainElement) {
    createRoot(mainElement).render(
      <StrictMode>
        <AdAgentPage embedded />
      </StrictMode>
    );
  } else if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <AdAgentPage />
      </StrictMode>
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
