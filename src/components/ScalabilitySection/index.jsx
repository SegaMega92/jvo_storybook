import PropTypes from 'prop-types';
import { AudienceSection } from '../AudienceSection';
import { typograph } from '../../utils/typograph';

const scalabilityTabs = [
  {
    id: 'supplier-medium',
    label: 'Средний поставщик',
    description: typograph('Избавляет от ручного контроля рекламы, позволяет расти без найма отдельного специалиста по рекламе.'),
  },
  {
    id: 'supplier-large',
    label: 'Крупный поставщик',
    description: typograph('Управляет большой матрицей артикулов без потери качества — каждая кампания под контролем.'),
  },
  {
    id: 'monobrand',
    label: 'Собственник монобренда',
    description: typograph('Точечная работа с одним брендом: защита позиций, контроль ДРР, масштабирование лучших товаров.'),
  },
  {
    id: 'ecom-head',
    label: 'Руководитель e-com',
    description: typograph('Системное управление и отчётность по рекламным расходам без операционного погружения в каждую кампанию.'),
  },
  {
    id: 'mp-manager',
    label: 'Менеджер маркетплейсов',
    description: typograph('Освобождает от рутины изменения ставок, позволяет фокусироваться на стратегии и аналитике.'),
  },
];

export function ScalabilitySection({ className = '' }) {
  return (
    <AudienceSection
      title={typograph('Агент Рекламы для любого масштаба бизнеса')}
      tabs={scalabilityTabs}
      showTestimonial={false}
      showBottomBlock={false}
      className={className}
    />
  );
}

ScalabilitySection.propTypes = {
  className: PropTypes.string,
};

export default ScalabilitySection;
