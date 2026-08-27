import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, Sparkles, UserRound } from 'lucide-react';
import { profile, profileEn } from '../../data/profile';
import { useLanguage } from '../../i18n/LanguageContext';
import './ContactForm.scss';
const copy = {
  pl: {
    types: ['Full-stack web development', 'Agent AI / chatbot', 'Automatyzacja procesów', 'Integracja API / IT support', 'Inny projekt'],
    project: 'Projekt',
    contact: 'Kontakt',
    brief: 'Brief',
    step: 'KROK',
    build: 'Co chcesz zbudować?',
    choose: 'Wybierz obszar, który najlepiej opisuje Twój projekt.',
    next: 'DALEJ',
    howContact: 'Jak mogę się z Tobą skontaktować?',
    basics: 'Podaj podstawowe dane. Telefon jest opcjonalny.',
    firstName: 'Imię',
    lastName: 'Nazwisko',
    phone: 'Telefon',
    optional: 'opcjonalnie',
    back: 'WRÓĆ',
    short: 'Krótko o projekcie.',
    shortText: 'Napisz, co chcesz uruchomić, poprawić lub zautomatyzować.',
    selected: 'WYBRANY OBSZAR',
    message: 'Wiadomość',
    placeholder: 'Cel projektu, najważniejsze funkcje, termin lub problem do rozwiązania...',
    send: 'WYŚLIJ',
    sent: 'Otwieram Twoją aplikację pocztową.'
  },
  en: {
    types: ['Full-stack web development', 'AI agent / chatbot', 'Process automation', 'API integration / IT support', 'Other project'],
    project: 'Project',
    contact: 'Contact',
    brief: 'Brief',
    step: 'STEP',
    build: 'What would you like to build?',
    choose: 'Choose the area that best describes your project.',
    next: 'NEXT',
    howContact: 'How can I contact you?',
    basics: 'Share the basic details. Phone number is optional.',
    firstName: 'First name',
    lastName: 'Last name',
    phone: 'Phone',
    optional: 'optional',
    back: 'BACK',
    short: 'Tell me about the project.',
    shortText: 'Describe what you want to launch, improve or automate.',
    selected: 'SELECTED AREA',
    message: 'Message',
    placeholder: 'Project goal, key features, timeline or the problem you want to solve...',
    send: 'SEND',
    sent: 'Opening your email application.'
  }
};
export default function ContactForm() {
  const {
    language
  } = useLanguage();
  const t = copy[language];
  const siteConfig = language === 'en' ? profileEn : profile;
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({
    projectType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const update = (field, value) => setData(current => ({
    ...current,
    [field]: value
  }));
  const next = () => setStep(current => Math.min(3, current + 1));
  const back = () => setStep(current => Math.max(1, current - 1));
  const submit = event => {
    event.preventDefault();
    const labels = language === 'en' ? ['Name', 'E-mail', 'Phone', 'Project type'] : ['Imię', 'E-mail', 'Telefon', 'Typ projektu'];
    const body = `${labels[0]}: ${data.firstName} ${data.lastName}\n${labels[1]}: ${data.email}\n${labels[2]}: ${data.phone}\n${labels[3]}: ${data.projectType}\n\n${data.message}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.contact.formSubject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return <form className="contact-form contact-form--steps" onSubmit={submit}>
      <div className="contact-form__progress" aria-label={`${t.step} ${step} / 3`}>
        {[1, 2, 3].map(number => <div className={`contact-form__progress-step${step === number ? ' is-active' : ''}${step > number ? ' is-done' : ''}`} key={number}>
            <span className="contact-form__progress-number">
              {step > number ? <CheckCircle2 /> : number}
            </span>
            <small className="contact-form__progress-label">
              {number === 1 ? t.project : number === 2 ? t.contact : t.brief}
            </small>
          </div>)}
        <div className="contact-form__progress-line">
          <span className="contact-form__progress-value" style={{
          width: `${(step - 1) / 2 * 100}%`
        }} />
        </div>
      </div>

      <div className="contact-form__stage" key={step}>
        {step === 1 && <>
            <div className="contact-form__stage-head">
              <Sparkles />
              <div className="contact-form__stage-copy">
                <small className="contact-form__stage-step">{t.step} 01</small>
                <h3 className="contact-form__stage-title">{t.build}</h3>
                <p className="contact-form__stage-text">{t.choose}</p>
              </div>
            </div>

            <div className="contact-form__choices">
              {t.types.map((type, index) => <button className={`contact-form__choice${data.projectType === type ? ' is-selected' : ''}`} type="button" onClick={() => update('projectType', type)} key={type}>
                  <span className="contact-form__choice-index">0{index + 1}</span>
                  <b className="contact-form__choice-label">{type}</b>
                  <i className="contact-form__choice-mark" />
                </button>)}
            </div>

            <div className="contact-form__actions contact-form__actions--end">
              <button className="contact-form__next" type="button" onClick={next} disabled={!data.projectType}>
                {t.next} <ArrowRight />
              </button>
            </div>
          </>}

        {step === 2 && <>
            <div className="contact-form__stage-head">
              <UserRound />
              <div className="contact-form__stage-copy">
                <small className="contact-form__stage-step">{t.step} 02</small>
                <h3 className="contact-form__stage-title">{t.howContact}</h3>
                <p className="contact-form__stage-text">{t.basics}</p>
              </div>
            </div>

            <div className="contact-form__row">
              <label className="contact-form__field">
                {t.firstName}
                <input className="contact-form__input" value={data.firstName} onChange={event => update('firstName', event.target.value)} required placeholder={language === 'en' ? 'John' : 'Jan'} />
              </label>
              <label className="contact-form__field">
                {t.lastName}
                <input className="contact-form__input" value={data.lastName} onChange={event => update('lastName', event.target.value)} required placeholder={language === 'en' ? 'Smith' : 'Kowalski'} />
              </label>
            </div>

            <div className="contact-form__row">
              <label className="contact-form__field">
                E-mail
                <input className="contact-form__input" value={data.email} onChange={event => update('email', event.target.value)} type="email" required placeholder="hello@company.com" />
              </label>
              <label className="contact-form__field">
                {t.phone} <span className="contact-form__optional">{t.optional}</span>
                <input className="contact-form__input" value={data.phone} onChange={event => update('phone', event.target.value)} type="tel" placeholder="+48 ..." />
              </label>
            </div>

            <div className="contact-form__actions">
              <button className="contact-form__back" type="button" onClick={back}>
                <ArrowLeft /> {t.back}</button>
              <button className="contact-form__next" type="button" onClick={next} disabled={!data.firstName || !data.lastName || !data.email}>{t.next} <ArrowRight />
                </button>
            </div>
          </>}

        {step === 3 && <>
            <div className="contact-form__stage-head">
              <Mail />
              <div className="contact-form__stage-copy">
                <small className="contact-form__stage-step">{t.step} 03</small>
                <h3 className="contact-form__stage-title">{t.short}</h3>
                <p className="contact-form__stage-text">{t.shortText}</p>
              </div>
            </div>

            <div className="contact-form__summary">
              <span className="contact-form__summary-label">{t.selected}</span>
              <b className="contact-form__summary-value">{data.projectType}</b>
            </div>

            <label className="contact-form__field">
              {t.message}
              <textarea className="contact-form__textarea" value={data.message} onChange={event => update('message', event.target.value)} required rows="6" placeholder={t.placeholder} />
            </label>

            <div className="contact-form__actions">
              <button className="contact-form__back" type="button" onClick={back}>
                <ArrowLeft /> {t.back}</button>
              <button className="contact-form__next contact-form__next--submit" type="submit" disabled={!data.message}>{t.send} <ArrowRight />
                </button>
            </div>

            {sent && <span className="contact-form__status">
              <CheckCircle2 /> {t.sent}</span>}
          </>}
      </div>
    </form>;
}
