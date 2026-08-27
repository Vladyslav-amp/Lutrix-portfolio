import { useEffect, useState } from 'react';
import { ExternalLink, Monitor, Smartphone, Tablet, X } from 'lucide-react';
import { translations } from '../data/translations';
import { useLanguage } from '../i18n/LanguageContext';
import './ProjectDemoModal.scss';
export default function ProjectDemoModal({
  project,
  onClose
}) {
  const [viewport, setViewport] = useState('desktop');
  const {
    language
  } = useLanguage();
  const t = translations[language].projects;
  const content = project[language] || project.pl;
  const ui = language === 'en' ? {
    open: 'Open website',
    close: 'Close demo'
  } : {
    open: 'Otwórz stronę',
    close: 'Zamknij demo'
  };
  useEffect(() => {
    const onKey = event => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);
  if (!project) return null;
  const hasUrl = project.demo && project.demo !== '#';
  return <div className="demo-modal" role="dialog" aria-modal="true" aria-label={`${t.preview}: ${content.title}`} onMouseDown={event => event.target === event.currentTarget && onClose()}>
      <div className="demo-modal__shell">
        <header className="demo-modal__header">
          <div className="demo-modal__project-info">
            <b className="demo-modal__project-title">{content.title}</b>
            <span className="demo-modal__project-type">{project.type}</span>
          </div>

          <div className="demo-modal__viewports">
            <button className={viewport === 'desktop' ? 'active' : ''} onClick={() => setViewport('desktop')} aria-label="Desktop">
              <Monitor />
              </button>
            <button className={viewport === 'tablet' ? 'active' : ''} onClick={() => setViewport('tablet')} aria-label="Tablet">
              <Tablet />
              </button>
            <button className={viewport === 'mobile' ? 'active' : ''} onClick={() => setViewport('mobile')} aria-label="Mobile">
              <Smartphone />
              </button>
          </div>

          <div className="demo-modal__actions">
            {hasUrl && <a className="demo-modal__external" href={project.demo} target="_blank" rel="noreferrer">
                {ui.open} <ExternalLink />
              </a>}
            <button className="demo-modal__close" onClick={onClose} aria-label={ui.close}>
              <X />
              </button>
          </div>
        </header>

        <div className="demo-modal__stage">
          <div className={`demo-modal__frame demo-modal__frame--${viewport}`}>
            {hasUrl ? <iframe className="demo-modal__iframe" src={project.demo} title={`${t.preview} ${content.title}`} /> : <div className="demo-modal__placeholder">
                <span className="demo-modal__preview-label">{t.preview}</span>
                <h3 className="demo-modal__preview-title">{content.title}</h3>
                <p className="demo-modal__preview-text">{content.text}</p>
                <div className="demo-modal__stack">
                  {project.stack.map(item => <i className="demo-modal__stack-item" key={item}>{item}</i>)}
                </div>
                <small className="demo-modal__note">{t.noDemo}</small>
              </div>}
          </div>
        </div>
      </div>
    </div>;
}
