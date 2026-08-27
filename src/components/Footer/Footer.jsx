import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { translations } from '../../data/translations';
import { useLanguage } from '../../i18n/LanguageContext';
import './Footer.scss';
export default function Footer() {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return <footer className="footer">
    <div className="container footer__inner">
      <div className="footer__brand">
        <b className="footer__brand-name">&lt;/&gt; &nbsp;{siteConfig.name}</b>
        <small className="footer__brand-role">{siteConfig.role}</small>
      </div>
      <span className="footer__copyright">© {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}</span>
      <div className="footer__social">
        <a href={siteConfig.linkedin} className="footer__social-link">
          <Linkedin />
        </a>
        <a href={siteConfig.github} className="footer__social-link">
          <Github />
        </a>
        <a href={`mailto:${siteConfig.email}`} className="footer__social-link">
          <Mail />
        </a>
      </div>
    </div>
  </footer>;
}
