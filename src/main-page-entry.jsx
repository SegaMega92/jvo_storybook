import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MainPage } from './pages/MainPage';
import './index.css';
import './tilda-overrides.css';

function initPage() {
  const rootElement = document.getElementById('jvo-main-page-root');
  const mainElement = document.getElementById('jvo-main-page-main');

  if (mainElement) {
    createRoot(mainElement).render(
      <StrictMode>
        <MainPage embedded section="main" />
      </StrictMode>
    );
  } else if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <MainPage embedded />
      </StrictMode>
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
