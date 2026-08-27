import { Blocks, Bot, CloudCog, Code2, Database, Network, Workflow } from 'lucide-react';
import { profile, profileEn } from '../../data/profile';
import { useLanguage } from '../../i18n/LanguageContext';
import Reveal from '../Reveal/Reveal';
import './About.scss';
export default function About() {
  const {
    language
  } = useLanguage();
  const siteConfig = language === 'en' ? profileEn : profile;
  return <section className="section section--spacious about" id="about">
    <div className="container about__layout">
      <Reveal className="about__copy">
        <span className="section__eyebrow">{siteConfig.about.eyebrow}</span>
        <h2 className="section__title section-heading">{siteConfig.about.title}</h2>
        <p className="about__description-primary section-description">{siteConfig.about.paragraph1}</p>
        <p className="about__description-secondary section-description">{siteConfig.about.paragraph2}</p>
        <div className="about__chips">{siteConfig.about.chips.map(chip => <span key={chip} className="about__chip">{chip}</span>)}</div>
      </Reveal>
      <div className="about__system">
        <div className="about__core">
          <Blocks />
          <b className="about__core-title">FULL-STACK</b>
          <span className="about__core-subtitle">product layer</span>
        </div>
        <div className="about__sat about__sat--front">
          <Code2 />
          <span className="about__sat-label">FRONT</span>
        </div>
        <div className="about__sat about__sat--back">
          <Database />
          <span className="about__sat-label">BACKEND</span>
        </div>
        <div className="about__sat about__sat--api">
          <Network />
          <span className="about__sat-label">API</span>
        </div>
        <div className="about__sat about__sat--ai">
          <Bot />
          <span className="about__sat-label">AI AGENT</span>
        </div>
        <div className="about__sat about__sat--flow">
          <Workflow />
          <span className="about__sat-label">AUTOMATION</span>
        </div>
        <div className="about__sat about__sat--cloud">
          <CloudCog />
          <span className="about__sat-label">DEPLOY</span>
        </div>
      </div>
    </div>
  </section>;
}
