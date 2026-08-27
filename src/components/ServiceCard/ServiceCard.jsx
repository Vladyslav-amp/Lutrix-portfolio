import { ArrowRight } from 'lucide-react';
import { translations } from '../../data/translations';
import { useLanguage } from '../../i18n/LanguageContext';
import './ServiceCard.scss';
export default function ServiceCard({
  service,
  onMore
}) {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  const Icon = service.icon;
  const content = service[language] || service.pl;
  return <article className="service-card">
      <div className="service-card__top">
        <div className="service-card__icon">
        <Icon />
        </div>
        <span className="service-card__code">{service.id.toUpperCase()}</span>
        </div>
      <h3 className="service-card__title">{content.title}</h3>
      <p className="service-card__description">{content.text}</p>
      <button type="button" onClick={() => onMore(service)} className="service-card__more">{t.services.more} <ArrowRight size={14} />
        </button>
    </article>;
}
