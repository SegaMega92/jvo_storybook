import PropTypes from 'prop-types';
import styles from './AdBenefitsSection.module.css';
import { BentoGrid } from '../BentoGrid';
import { typograph } from '../../utils/typograph';

import imgTransparency from '../../assets/bento-ad/transparency.webp';
import imgApiBadge from '../../assets/bento-ad/api-badge.webp';
import imgModes from '../../assets/bento-ad/modes.webp';
import imgOverspend from '../../assets/bento-ad/overspend.webp';
import imgRules from '../../assets/bento-ad/rules.webp';
import imgProductsIcon from '../../assets/bento-ad/products-icon.webp';

const adItems = [
  {
    id: 'transparency',
    title: typograph('Полная прозрачность действий'),
    description: typograph('Каждое действие Агента записывается в раздел «События»: что изменилось, когда и с каким результатом. Контроль всегда у вас.'),
    image: imgTransparency,
  },
  {
    id: 'api',
    title: typograph('Только официальный API'),
    description: typograph('Работа исключительно через официальный API маркетплейса — без парсинга и риска блокировки аккаунта. Безопасно по умолчанию.'),
    image: imgApiBadge,
    imageType: 'badge',
  },
  {
    id: 'modes',
    title: typograph('Два режима контроля'),
    description: typograph('Полная автоматизация на «Автопилоте» или ручное подтверждение каждого изменения — вы выбираете уровень вовлечённости.'),
    image: imgModes,
    imageType: 'modes',
  },
  {
    id: 'overspend',
    title: typograph('Защита от перерасхода'),
    description: typograph('Дневной лимит жёсткий — перерасход невозможен. Агент проверяет расходы каждые 15 минут и автоматически ставит РК на паузу.'),
    image: imgOverspend,
  },
  {
    id: 'rules',
    title: typograph('Правила на русском языке'),
    description: typograph('Сценарии задаются простыми словами: «если ДРР выше 7% — снизь дневной лимит». Не нужно знать программирование.'),
    image: imgRules,
  },
  {
    id: 'products',
    title: typograph('Связка с товарными данными'),
    description: typograph('Агент учитывает реальные остатки и оборачиваемость — не запустит рекламу на товар, которого нет на складе.'),
    image: imgProductsIcon,
    imageType: 'icon',
  },
];

export function AdBenefitsSection({ className = '' }) {
  return (
    <section className={`${styles.wrapper} ${className}`}>
      <h2 className={styles.title}>{typograph('Преимущества')}</h2>
      <BentoGrid items={adItems} variant="ad" />
    </section>
  );
}

AdBenefitsSection.propTypes = {
  className: PropTypes.string,
};

export default AdBenefitsSection;
