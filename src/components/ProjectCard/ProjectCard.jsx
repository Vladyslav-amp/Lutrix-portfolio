import { useState } from 'react';
import { ArrowUpRight, BarChart3, ExternalLink, MessageSquare, Workflow } from 'lucide-react';
import { translations } from '../../data/translations';
import { useLanguage } from '../../i18n/LanguageContext';
import ProjectDemoModal from '../ProjectDemoModal';
import './ProjectCard.scss';
const icons = {
  analytics: BarChart3,
  chat: MessageSquare,
  automation: Workflow
};
export default function ProjectCard({
  project,
  index
}) {
  const [demoOpen, setDemoOpen] = useState(false);
  const {
    language
  } = useLanguage();
  const t = translations[language];
  const content = project[language] || project.pl;
  const Icon = icons[project.visual] || BarChart3;
  return <>
      <article className={`project-card ${index % 2 ? 'project-card--reverse' : ''}`}>
        <div className={`project-card__visual project-card__visual--${project.visual}`}>
          <div className="project-card__window">
            <div className="project-card__windowbar">
              <i className="project-card__window-dot project-card__window-dot--one" />
              <i className="project-card__window-dot project-card__window-dot--two" />
              <i className="project-card__window-dot project-card__window-dot--three" />
              <span className="project-card__window-type">{project.type}</span>
            </div>

            <div className="project-card__scene">
              <Icon className="project-card__scene-icon" />
              <div className="project-card__lines">
                <i className="project-card__line project-card__line--one" />
                <i className="project-card__line project-card__line--two" />
                <i className="project-card__line project-card__line--three" />
                <i className="project-card__line project-card__line--four" />
              </div>
              <div className="project-card__mini">
                <b className="project-card__metric">{project.metric}</b>
                <span className="project-card__metric-label">{content.metricLabel}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card__body">
          <span className="project-card__type">{project.type}</span>
          <h3 className="project-card__title">{content.title}</h3>
          <p className="project-card__intro">{content.text}</p>

          <div className="project-card__story">
            <div className="project-card__story-item">
              <span className="project-card__story-label">{t.projects.challenge}</span>
              <p className="project-card__story-text">{content.challenge}</p>
            </div>
            <div className="project-card__story-item">
              <span className="project-card__story-label">{t.projects.solution}</span>
              <p className="project-card__story-text">{content.solution}</p>
            </div>
          </div>

          <div className="project-card__tags">
            {project.stack.map(item => <span className="project-card__tag" key={item}>{item}</span>)}
          </div>

          <button className="project-card__demo" type="button" onClick={() => setDemoOpen(true)}>
            {t.projects.demo} <ExternalLink size={14} />
          </button>
          <ArrowUpRight className="project-card__corner" />
        </div>
      </article>

      {demoOpen && <ProjectDemoModal project={project} onClose={() => setDemoOpen(false)} />}
    </>;
}
