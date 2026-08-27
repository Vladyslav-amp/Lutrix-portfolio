import { useMemo, useState } from 'react';
import { Check, ChevronRight, Circle, TerminalSquare } from 'lucide-react';
import { technologyGroups } from '../../data/technologies';
import { translations } from '../../data/translations';
import { useLanguage } from '../../i18n/LanguageContext';
import Reveal from '../Reveal/Reveal';
import './Technologies.scss';
const meta = [{
  code: 'frontend',
  label: 'UI / FRONTEND',
  status: 'production',
  note: 'HTML, styling, JavaScript i interfejsy React'
}, {
  code: 'backend',
  label: 'BACKEND / DATA',
  status: 'ready',
  note: 'API, logika serwerowa, Python i dane w Supabase'
}, {
  code: 'automation',
  label: 'AI / MICROSOFT',
  status: 'active',
  note: 'Copilot Studio, automatyzacje i usługi Microsoft'
}, {
  code: 'tools',
  label: 'CMS / TOOLS',
  status: 'toolkit',
  note: 'WordPress, Git, organizacja pracy i projektowanie UI'
}];
export default function Technologies() {
  const {
    language
  } = useLanguage();
  const t = translations[language].technologies;
  const [active, setActive] = useState(0);
  const current = technologyGroups[active];
  const currentMeta = meta[active];
  const total = useMemo(() => technologyGroups.reduce((sum, group) => sum + group.items.length, 0), []);
  return <section className="section section--spacious technologies" id="technologies">
    <div className="technologies__glow technologies__glow--purple" aria-hidden="true" />
    <div className="technologies__glow technologies__glow--gold" aria-hidden="true" />
    <div className="container">
      <Reveal>
        <span className="section__eyebrow">{t.eyebrow}</span>
        <div className="section__intro">
          <h2 className="section__title section-heading">{t.title}</h2>
          <p className="technologies__description section-description">{t.intro}</p>
        </div>
      </Reveal>
      <div className="technologies__workspace">
        <aside className="technologies__sidebar" aria-label={t.categories}>
          <div className="technologies__sidebar-head">
            <span className="technologies__sidebar-title">STACK EXPLORER</span>
            <small className="technologies__module-count">{String(total).padStart(2, '0')} {t.modules}</small>
          </div>
          <div className="technologies__tabs">
              {technologyGroups.map((group, index) => <button className={`technologies__tab${active === index ? ' is-active' : ''}`} onClick={() => setActive(index)} type="button" key={group.title}>
              <span className="technologies__tab-index">0{index + 1}</span>
              <span className="technologies__tab-copy">
                <b className="technologies__tab-title">{meta[index].label}</b>
                <small className="technologies__tab-count">{group.items.length} {t.technologies}</small>
              </span>
              <ChevronRight />
            </button>)}
          </div>
          <div className="technologies__sidebar-foot">
            <span className="technologies__system-status-label">
              <Circle /> system_status</span>
            <b className="technologies__system-status-value">{t.ready}</b>
          </div>
        </aside>
        <div className="technologies__terminal">
          <div className="technologies__terminal-bar">
            <div className="technologies__window-dots" aria-hidden="true">
              <i className="technologies__window-dot" />
              <i className="technologies__window-dot" />
              <i className="technologies__window-dot" />
            </div>
            <span className="technologies__terminal-title">
              <TerminalSquare /> stack.console</span>
            <small className="technologies__terminal-user">portfolio@fullstack:~</small>
          </div>
          <div className="technologies__terminal-body" key={current.title}>
            <div className="technologies__command">
              <span className="technologies__prompt">$</span>
              <span className="technologies__command-text">inspect --layer={currentMeta.code}</span>
              <i className="technologies__cursor" aria-hidden="true" />
            </div>
            <div className="technologies__result-head">
              <div className="technologies__result-copy">
                <span className="technologies__result-label">{t.loadedLayer}</span>
                <h3 className="technologies__result-title">{current.title}</h3>
                <p className="technologies__result-description">{currentMeta.note}</p>
              </div>
              <div className="technologies__status">
                <i className="technologies__status-dot" /> {currentMeta.status}
              </div>
            </div>
            <div className="technologies__rows">
                {current.items.map(({
                name,
                icon: Icon
              }, index) => <div className="technologies__row" style={{
                '--delay': `${index * 75}ms`
              }} key={name}>
              <span className="technologies__line-no">{String(index + 1).padStart(2, '0')}</span>
              <span className="technologies__tech-icon">
                <Icon />
              </span>
              <div className="technologies__tech-copy">
                <b className="technologies__tech-name">{name}</b>
                <span className="technologies__tech-path">module/{currentMeta.code}/{name.toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')}</span>
              </div>
              <span className="technologies__loaded">
                <Check /> {t.loaded}</span>
            </div>)}
          </div>
          <div className="technologies__terminal-foot">
            <span className="technologies__summary-item">
              <b className="technologies__summary-value">{current.items.length}</b> {t.modules}</span>
            <span className="technologies__summary-item">
              <b className="technologies__summary-value">0</b> {t.conflicts}</span>
            <span className="technologies__terminal-ready">
              <i className="technologies__ready-dot" /> {t.readyShort}</span>
          </div>
        </div>
        <div className="technologies__scan" aria-hidden="true" />
      </div>
    </div>
  </div>
  </section>;
}
