import { projects } from '../../data/projects';
import { translations } from '../../data/translations';
import { useLanguage } from '../../i18n/LanguageContext';
import ProjectCard from '../ProjectCard/ProjectCard';
import Reveal from '../Reveal/Reveal';
import './Projects.scss';
export default function Projects() {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return <section className="section section--spacious projects" id="projects">
      <div className="container">
        <Reveal>
          <span className="section__eyebrow">{t.projects.eyebrow}</span>
          <div className="section__intro">
            <h2 className="section__title section-heading">{t.projects.title}</h2>
            <p className="projects__description section-description">{t.projects.intro}</p>
            </div>
        </Reveal>
        <div className="projects__list">
          {projects.map((project, index) => <Reveal key={project.id} delay={index % 2 * 90}>
            <ProjectCard project={project} index={index} />
            </Reveal>)}
        </div>
      </div>
    </section>;
}
