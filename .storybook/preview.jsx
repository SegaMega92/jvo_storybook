import '../src/tokens/tokens.css';
import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'dark',
      values: [
        // Base
        { name: 'white', value: '#ffffff' },
        { name: 'gray', value: '#e9ebf0' },
        { name: 'black', value: '#15181f' },
        // Theme
        { name: 'dark', value: '#282537' },
        { name: 'darker', value: '#1a1825' },
        // Violet
        { name: 'violet-light', value: '#ead7fe' },
        { name: 'violet-dark', value: '#300247' },
        // Pink
        { name: 'pink-light', value: '#ffdbf1' },
        { name: 'pink-dark', value: '#3f0030' },
        // Orange
        { name: 'orange-light', value: '#ffdbd2' },
        { name: 'orange-dark', value: '#381300' },
        // Green
        { name: 'green-light', value: '#d8f995' },
        { name: 'green-dark', value: '#172104' },
        // Yellow
        { name: 'yellow-light', value: '#ffecb7' },
        { name: 'yellow-dark', value: '#2a1e01' },
        // Red
        { name: 'red-light', value: '#fea4a4' },
        { name: 'red-dark', value: '#480404' },
      ],
    },

    viewport: {
      viewports: {
        // Мобильные
        mobileS: {
          name: '360px - Mobile S',
          styles: { width: '360px', height: '640px' },
        },
        mobileM: {
          name: '375px - Mobile M',
          styles: { width: '375px', height: '667px' },
        },
        mobileL: {
          name: '480px - Mobile L',
          styles: { width: '480px', height: '800px' },
        },
        // Планшеты
        tabletS: {
          name: '640px - Tablet S',
          styles: { width: '640px', height: '900px' },
        },
        tablet: {
          name: '768px - Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        tabletL: {
          name: '900px - Tablet L',
          styles: { width: '900px', height: '1200px' },
        },
        // Десктоп
        laptop: {
          name: '1024px - Laptop',
          styles: { width: '1024px', height: '768px' },
        },
        laptopL: {
          name: '1180px - Laptop L',
          styles: { width: '1180px', height: '800px' },
        },
        desktop: {
          name: '1280px - Desktop',
          styles: { width: '1280px', height: '800px' },
        },
        wide: {
          name: '1440px - Wide',
          styles: { width: '1440px', height: '900px' },
        },
      },
    },

    a11y: {
      test: 'todo',
    },
  },

  decorators: [
    (Story) => (
      <div style={{ fontFamily: 'var(--font-family-primary)' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
