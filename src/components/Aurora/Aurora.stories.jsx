import { Aurora } from './index';

export default {
  title: 'Components/Aurora',
  component: Aurora,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Анимированный градиентный фон "Aurora". Используется как декоративный элемент на страницах.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <Story />
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          fontFamily: 'RF Dewi Extended, sans-serif',
          fontSize: '48px',
          fontWeight: 700,
          color: '#200131',
        }}>
          Aurora Background Effect
        </div>
      </div>
    ),
  ],
};
