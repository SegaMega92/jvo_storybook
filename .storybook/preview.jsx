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
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '800px',
          },
        },
        wide: {
          name: 'Wide',
          styles: {
            width: '1440px',
            height: '900px',
          },
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
