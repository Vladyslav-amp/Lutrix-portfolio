import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Sparkles, Zap } from 'lucide-react';
import { profile, profileEn } from '../../data/profile';
import { translations } from '../../data/translations';
import { useLanguage } from '../../i18n/LanguageContext';
import ContactForm from '../ContactForm/ContactForm';
import Reveal from '../Reveal/Reveal';
import './Contact.scss';
export default function Contact() {
  const {
    language
  } = useLanguage();
  const siteConfig = language === 'en' ? profileEn : profile;
  const t = translations[language].contact;
  return <section className="section section--spacious contact-section" id="contact">
    <div className="contact-section__glow contact-section__glow--one" />
    <div className="contact-section__glow contact-section__glow--two" />
    <div className="container">
      <Reveal className="contact">
        <div className="contact__lead">
          <div className="contact__topline">
            <span className="section__eyebrow">{siteConfig.contact.eyebrow}</span>
            <span className="contact__availability">
              <i className="contact__availability-dot" /> {siteConfig.contact.availability}</span>
          </div>
          <div className="contact__headline">
            <span className="contact__kicker">
              <Sparkles /> {siteConfig.contact.kicker}</span>
            <h2 className="contact__title section-heading">{siteConfig.contact.titleLine1}<br className="contact__title-break" />
              <em className="contact__title-accent">{siteConfig.contact.titleLine2}</em>
            </h2>
            <p className="contact__description section-description">{siteConfig.contact.description}</p>
          </div>
          <div className="contact__signal" aria-hidden="true">
            <div className="contact__signal-line">
              <span className="contact__signal-pulse" />
            </div>
            <div className="contact__signal-card contact__signal-card--a">
              <Zap />
              <span className="contact__signal-label">
                <b className="contact__signal-index">01</b> {t.brief}</span>
            </div>
            <div className="contact__signal-card contact__signal-card--b">
              <MessageCircle />
              <span className="contact__signal-label">
                <b className="contact__signal-index">02</b> {t.contact}</span>
            </div>
            <div className="contact__signal-card contact__signal-card--c">
              <ArrowUpRight />
              <span className="contact__signal-label">
                <b className="contact__signal-index">03</b> {t.start}</span>
            </div>
          </div>
          <div className="contact__details">
            <a href={`mailto:${siteConfig.email}`} className="contact__detail-link">
              <span className="contact__detail-icon">
                <Mail />
              </span>
              <span className="contact__detail-content">
                <small className="contact__detail-label">{t.email}</small>{siteConfig.email}</span>
              <ArrowUpRight className="contact__detail-arrow" />
            </a>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="contact__detail-link">
              <span className="contact__detail-icon">
                <Phone />
              </span>
              <span className="contact__detail-content">
                <small className="contact__detail-label">{t.phone}</small>{siteConfig.phone}</span>
              <ArrowUpRight className="contact__detail-arrow" />
            </a>
            <div className="contact__detail-item">
              <span className="contact__detail-icon">
                <MapPin />
              </span>
              <span className="contact__detail-content">
                <small className="contact__detail-label">{t.location}</small>{siteConfig.location}</span>
            </div>
          </div>
        </div>
        <div className="contact__form-shell">
          <div className="contact__form-orbit contact__form-orbit--one" />
          <div className="contact__form-orbit contact__form-orbit--two" />
          <div className="contact__form-wrap">
            <div className="contact__form-head">
              <div className="contact__form-title-group">
                <span className="contact__form-label">{siteConfig.contact.formLabel}</span>
                <b className="contact__form-title">{siteConfig.contact.formTitle}</b>
              </div>
              <div className="contact__form-index">03<span className="contact__form-steps-label">{t.steps}</span>
              </div>
            </div>
            <ContactForm />
          </div>
          <div className="contact__floating-note">
            <i className="contact__floating-dot" />
            <span className="contact__floating-text">{siteConfig.contact.responseNote}</span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;
}
