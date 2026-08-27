import { useEffect, useMemo, useRef, useState } from 'react';
import { Bot, MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { translations } from '../../data/translations';
import { useLanguage } from '../../i18n/LanguageContext';
import './PortfolioAgent.scss';
export default function PortfolioAgent() {
  const {
    language
  } = useLanguage();
  const t = translations[language].agent;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{
    from: 'assistant',
    text: t.greeting
  }]);
  const endRef = useRef(null);
  const suggestions = useMemo(() => t.faq, [t]);
  useEffect(() => {
    setMessages([{
      from: 'assistant',
      text: t.greeting
    }]);
  }, [language, t.greeting]);
  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 2200);
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => {
    endRef.current?.scrollIntoView?.({
      behavior: 'smooth',
      block: 'nearest'
    });
  }, [messages, open]);
  const answerFor = (text = '') => {
    const question = String(text).toLowerCase();
    if (/ai|agent|chatbot|bot/.test(question)) return t.faq[1][1];
    if (/automat|workflow|proces|process|power/.test(question)) return t.faq[2][1];
    if (/stron|web|react|backend|full|api|build|app/.test(question)) return t.faq[0][1];
    if (/popraw|support|wspar|błąd|modern|existing|system/.test(question)) return t.faq[3][1];
    if (/kontakt|współprac|cena|wycen|price|cost|contact/.test(question)) return t.pricing;
    return t.fallback;
  };
  const ask = (question, answer) => {
    const value = String(question || '').trim();
    if (!value) return;
    setMessages(current => [...current, {
      from: 'user',
      text: value
    }, {
      from: 'assistant',
      text: answer || answerFor(value)
    }]);
    setInput('');
  };
  const submit = event => {
    event.preventDefault();
    ask(input);
  };
  return <div className={`portfolio-agent ${open ? 'portfolio-agent--open' : ''}`}>
      {!open && <button type="button" className="portfolio-agent__launcher" onClick={() => setOpen(true)} aria-label={t.launcher}>
          <span className="portfolio-agent__launcher-icon">
            <Bot />
          </span>
          <span className="portfolio-agent__launcher-label">{t.launcher}</span>
          <i className="portfolio-agent__online-dot" aria-hidden="true" />
        </button>}

      {open && <aside className="portfolio-agent__panel" aria-label={t.title}>
          <header className="portfolio-agent__header">
            <div className="portfolio-agent__avatar">
              <Bot />
              <i className="portfolio-agent__online-dot" aria-hidden="true" />
            </div>

            <div className="portfolio-agent__identity">
              <b className="portfolio-agent__title">{t.title}</b>
              <span className="portfolio-agent__status">
                <i className="portfolio-agent__status-dot" /> {t.status}
              </span>
            </div>

            <button type="button" onClick={() => setOpen(false)} aria-label={t.close} className="portfolio-agent__close">
              <X />
            </button>
          </header>

          <div className="portfolio-agent__messages">
            {messages.map((message, index) => <div key={`${message.from}-${index}`} className={`portfolio-agent__message portfolio-agent__message--${message.from}`}>
                {message.from === 'assistant' && <Sparkles />}
                <p className="portfolio-agent__message-text">{message.text}</p>
              </div>)}
            <div ref={endRef} className="portfolio-agent__messages-end" />
          </div>

          <div className="portfolio-agent__suggestions">
            {suggestions.map(([question, answer]) => <button type="button" key={question} onClick={() => ask(question, answer)} className="portfolio-agent__suggestion">
                {question}
              </button>)}
          </div>

          <form className="portfolio-agent__form" onSubmit={submit}>
            <input value={input} onChange={event => setInput(event.target.value)} placeholder={t.placeholder} aria-label={t.placeholder} className="portfolio-agent__input" />
            <button type="submit" disabled={!input.trim()} aria-label={t.send} className="portfolio-agent__send">
              <Send />
            </button>
          </form>

          <small className="portfolio-agent__footer">
            <MessageCircle /> {t.footer}
          </small>
        </aside>}
    </div>;
}
