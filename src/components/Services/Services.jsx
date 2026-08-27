import { useState } from 'react';
import { services } from '../../data/services';
import { translations } from '../../data/translations';
import { useLanguage } from '../../i18n/LanguageContext';
import ServiceCard from '../ServiceCard/ServiceCard';
import ServiceModal from '../ServiceModal/ServiceModal';
import Reveal from '../Reveal/Reveal';
import './Services.scss';
export default function Services() {
  const [selected, setSelected] = useState(null);
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return <>
      <section className="section section--spacious services" id="services">
        <div className="container">
          <Reveal>
            <span className="section__eyebrow">{t.services.eyebrow}</span>
            <div className="section__intro">
              <h2 className="section__title section-heading">{t.services.title}</h2>
              <p className="services__description section-description">{t.services.intro}</p>
            </div>
          </Reveal>
          <div className="services__grid">
            {services.map((service, index) => <Reveal key={service.id} delay={index % 2 * 100}>
                <ServiceCard service={service} onMore={setSelected} />
              </Reveal>)}
          </div>
        </div>
      </section>
      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </>;
}
