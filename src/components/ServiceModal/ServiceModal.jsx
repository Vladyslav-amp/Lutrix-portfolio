import { useEffect } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { translations } from '../../data/translations';
import { useLanguage } from '../../i18n/LanguageContext';
import Button from '../Button/Button';
import './ServiceModal.scss';
export default function ServiceModal({
  service,
  onClose
}) {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  const closeLabel = language === 'en' ? 'Close' : 'Zamknij';
  const content = service[language] || service.pl;
  useEffect(() => {
    const onKey = event => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  if (!service) return null;
  const Icon = service.icon;
  return <div className="service-modal" role="presentation" onMouseDown={event => event.target === event.currentTarget && onClose()}>
    <div className="service-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
      <button className="service-modal__close" type="button" onClick={onClose} aria-label={closeLabel}>
        <X />
        </button>
      <div className="service-modal__head">
        <div className="service-modal__icon">
        <Icon />
        </div>
        <span className="service-modal__label">{t.services.modalLabel}</span>
        </div>
      <h3 id="service-modal-title" className="service-modal__title">{content.title}</h3>
      <p className="service-modal__lead">{content.text}</p>
      <div className="service-modal__list">{content.details.map(item => <div key={item} className="service-modal__list-item">
        <Check />
        <span className="service-modal__list-text">{item}</span>
        </div>)}</div>
      <div className="service-modal__outcome">
        <span className="service-modal__outcome-label">{t.services.outcome}</span>
        <p className="service-modal__outcome-text">{content.outcome}</p>
        </div>
      <Button as="a" variant="main" href="#contact" onClick={onClose}>
        {t.services.modalCta} <ArrowRight size={17} />
      </Button>
    </div>
  </div>;
}
