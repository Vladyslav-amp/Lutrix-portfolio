import { ChevronDown, Globe2, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { translations } from '../../data/translations';
import { useLanguage } from '../../i18n/LanguageContext';
import Button from '../Button/Button';
import './Header.scss';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef(null);
  const {
    language,
    setLanguage
  } = useLanguage();
  const t = translations[language];
  const navigation = [[t.nav.about, 'about'], [t.nav.services, 'services'], [t.nav.technologies, 'technologies'], [t.nav.contact, 'contact']];
  const languages = [{
    value: 'en',
    label: 'English',
    short: 'EN'
  }, {
    value: 'pl',
    label: 'Polski',
    short: 'PL'
  }];
  const activeLanguage = languages.find(item => item.value === language) ?? languages[0];
  const changeLanguage = value => {
    setLanguage(value);
    setLanguageOpen(false);
  };
  useEffect(() => {
    const handleOutsideClick = event => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  const LanguageSwitcher = ({
    mobile = false
  }) => <div className={`header__language ${mobile ? 'header__language--mobile' : 'header__language--desktop'}`} ref={!mobile ? languageRef : undefined}>
      <button type="button" className={`header__language-trigger ${languageOpen ? 'is-open' : ''}`} onClick={() => setLanguageOpen(current => !current)} aria-expanded={languageOpen}>
        <Globe2 size={16} />

        <span>{activeLanguage.short}</span>

        <ChevronDown size={14} className="header__language-chevron" />
      </button>

      {languageOpen && <div className="header__language-dropdown">
          {languages.map(item => <button key={item.value} type="button" className={`header__language-item ${language === item.value ? 'is-active' : ''}`} onClick={() => changeLanguage(item.value)}>
              <span>{item.label}</span>
              <small>{item.short}</small>
            </button>)}
        </div>}
    </div>;
  return <header className="header">
      <div className="container">
        <div className="header__inner">

          <a href="/" className="header__brand" aria-label="Lutrix home">
            <img src="/logo.png" alt="Lutrix" className="header__mark" />
          </a>

          <nav id="main-navigation" className={`header__nav ${open ? 'header__nav--open' : ''}`}>
            <div className="header__nav-links">
              {navigation.map(([label, id]) => <a key={id} href={`#${id}`} className="header__nav-link" onClick={() => setOpen(false)}>
                  {label}
                </a>)}
            </div>

            <div className="header__mobile-actions">
              <LanguageSwitcher mobile />

              <Button as="a" variant="secondary" className="header__mobile-cta" href="#contact" onClick={() => setOpen(false)}>
                {t.nav.cta}
              </Button>
            </div>
          </nav>

          <div className="header__actions">
            <LanguageSwitcher />

            <Button as="a" variant="secondary" className="header__cta" href="#contact">
              {t.nav.cta}
            </Button>

            <button className="header__toggle" type="button" onClick={() => setOpen(current => !current)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="main-navigation">
              {open ? <X /> : <Menu />}
            </button>
          </div>

        </div>
      </div>
    </header>;
}
