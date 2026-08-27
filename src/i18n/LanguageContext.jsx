import { createContext, useContext, useEffect, useMemo, useState } from 'react';
const LanguageContext = createContext(null);
export function LanguageProvider({
  children
}) {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'pl');
  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);
  const value = useMemo(() => ({
    language,
    setLanguage
  }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
