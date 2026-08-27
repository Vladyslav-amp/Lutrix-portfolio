import { ArrowRight, Braces, Database, ServerCog, Sparkles } from 'lucide-react';
import { profile, profileEn } from '../../data/profile';
import { translations } from '../../data/translations';
import { useLanguage } from '../../i18n/LanguageContext';
import HeroVisual from '../HeroVisual/HeroVisual';
import Button from '../Button/Button';
import Reveal from '../Reveal/Reveal';
import './Hero.scss';
export default function Hero() {
  const {
    language
  } = useLanguage();
  const siteConfig = language === 'en' ? profileEn : profile;
  const t = translations[language];
  return <section className="hero" id="top">
    <div className="hero__glow" />
    <div className="hero__gridlines" />
    <div className="hero__inner container">
      <Reveal className="hero__copy">
        <h1 className="hero__title section-heading">
          <span className="hero__title-line">{siteConfig.hero.titleLine1}</span>
          <span className="hero__accent">{siteConfig.hero.titleLine2}</span>
          <span className="hero__title-line">{siteConfig.hero.titleLine3}</span>
        </h1>
        <p className="hero__description section-description">{siteConfig.hero.description}</p>
        <div className="hero__actions">
          {/* <Button as="a" variant="main" href="#projects">
            {t.hero.caseStudies} <ArrowRight size={17} />
           </Button> */}
          <Button as="a" variant="secondary" href="#contact">
            {t.hero.talk} <ArrowRight size={17} />
          </Button>
        </div>
        <div className="hero__stack">
          <span className="hero__stack-item">
            <Braces /> React / UI</span>
          <span className="hero__stack-item">
            <ServerCog /> Node / Python</span>
          <span className="hero__stack-item">
            <Database /> API / Data</span>
          <span className="hero__stack-item">
            <Sparkles /> Agents / AI</span>
        </div>
      </Reveal>
      <Reveal className="hero__visual-wrap" delay={140}>
        <HeroVisual />
      </Reveal>
    </div>
  </section>;
}
