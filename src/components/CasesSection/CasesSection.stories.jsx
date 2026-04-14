import { CasesSection } from './index';

// Ассеты из Figma
import fireIconSrc from '../../assets/cases/fire.png';
import cosmobeautyLogoSrc from '../../assets/cases/logos/cosmobeauty.svg';
import larettoLogoSrc from '../../assets/cases/logos/laretto.svg';
import agroimpexLogoSrc from '../../assets/cases/logos/agroimpex.svg';
import cosmobeautyPhoto from '../../assets/cases/photos/cosmobeauty.png';
import larettoPhoto from '../../assets/cases/photos/laretto.png';
import agroimpexPhoto from '../../assets/cases/photos/agroimpex.png';

export default {
  title: 'Sections/CasesSection',
  component: CasesSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Секция "Результаты в кейсах" - показывает успешные кейсы клиентов с фото, суммой и категорией.

На десктопе при ховере раскрывается описание и кнопка "к кейсу".
На мобильном - горизонтальный слайдер, тап раскрывает карточку.`,
      },
    },
  },
  tags: ['autodocs'],
};

// Иконка огня
const FireIcon = () => (
  <img src={fireIconSrc} alt="" width="72" height="72" />
);

// Логотипы брендов
const CosmobeautyLogo = () => (
  <img src={cosmobeautyLogoSrc} alt="Cosmobeauty" />
);

const LarettoLogo = () => (
  <img src={larettoLogoSrc} alt="LARETTO" />
);

const AgroimpexLogo = () => (
  <img src={agroimpexLogoSrc} alt="Agroimpex" />
);

// Данные кейсов с реальными фото из Figma
const defaultCases = [
  {
    image: cosmobeautyPhoto,
    brandLogo: <CosmobeautyLogo />,
    brandName: 'Cosmobeauty',
    amount: '+ 10 000 000',
    category: 'Косметика',
    description: 'Заработали 10+ млн рублей за месяц на 30 артикулах косметики',
    href: '#case-cosmobeauty',
  },
  {
    image: larettoPhoto,
    brandLogo: <LarettoLogo />,
    brandName: 'Laretto',
    amount: '+ 9 878 856',
    category: 'Одежда',
    description: 'Заработали 10+ млн рублей за месяц на 30 артикулах косметики',
    href: '#case-laretto',
  },
  {
    image: agroimpexPhoto,
    brandLogo: <AgroimpexLogo />,
    brandName: 'Agroimpex',
    amount: '+ 34 000 000',
    category: 'Орехи и сухофрукты',
    description: 'Увеличили продажи в 3 раза за счет автоматизации ответов на отзывы',
    href: '#case-agroimpex',
  },
];

// Базовый пример
export const Default = {
  args: {
    icon: <FireIcon />,
    title: 'Результаты в кейсах',
    subtitle: 'Описание, про что этот блок, преимущества или фишки, справа показываем демонстрацию того о чём пишем.',
    cases: defaultCases,
  },
};

// Без иконки
export const WithoutIcon = {
  args: {
    title: 'Результаты в кейсах',
    subtitle: 'Реальные результаты наших клиентов на маркетплейсах',
    cases: defaultCases,
  },
};

// С другим заголовком
export const CustomTitle = {
  args: {
    icon: <FireIcon />,
    title: 'Наши успешные проекты',
    subtitle: 'Посмотрите, каких результатов достигли наши клиенты',
    cases: defaultCases,
  },
};

// Два кейса
export const TwoCases = {
  args: {
    icon: <FireIcon />,
    title: 'Результаты в кейсах',
    subtitle: 'Описание блока',
    cases: defaultCases.slice(0, 2),
  },
};

// Без описания в кейсах (только бейджи)
export const WithoutDescriptions = {
  args: {
    icon: <FireIcon />,
    title: 'Результаты в кейсах',
    subtitle: 'Описание блока',
    cases: defaultCases.map(({ description, href, ...rest }) => rest),
  },
};
