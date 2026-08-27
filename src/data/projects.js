export const projects = [{
  id: 'sales-dashboard',
  type: 'FULL-STACK SaaS',
  stack: ['React', 'Node.js', 'PostgreSQL'],
  demo: '#',
  visual: 'analytics',
  metric: '-7h / week',
  pl: {
    title: 'Sales Intelligence Dashboard',
    text: 'Panel operacyjny, który porządkuje dane sprzedażowe, KPI i raportowanie w jednym miejscu.',
    metricLabel: 'mniej pracy przy raportach',
    challenge: 'Zespół pracował na kilku źródłach danych, a przygotowanie aktualnego obrazu sprzedaży wymagało ręcznego łączenia informacji.',
    solution: 'Aplikacja full-stack zbiera dane przez API, obsługuje role użytkowników i automatycznie przelicza kluczowe wskaźniki.'
  },
  en: {
    title: 'Sales Intelligence Dashboard',
    text: 'An operational dashboard that brings sales data, KPIs and reporting into one place.',
    metricLabel: 'less reporting work',
    challenge: 'The team relied on multiple data sources, and getting a current view of sales required manual consolidation.',
    solution: 'A full-stack application collects data through APIs, handles user roles and calculates key metrics automatically.'
  }
}, {
  id: 'ai-assistant',
  type: 'AI PRODUCT',
  stack: ['React', 'Python', 'REST API'],
  demo: '#',
  visual: 'chat',
  metric: '24/7',
  pl: {
    title: 'AI Customer Assistant',
    text: 'Asystent konwersacyjny, który odpowiada na najczęstsze pytania, porządkuje zapytania i kieruje je do właściwej ścieżki.',
    metricLabel: 'pierwsza linia kontaktu',
    challenge: 'Powtarzalne pytania klientów obciążały zespół i wydłużały czas reakcji na sprawy wymagające indywidualnej obsługi.',
    solution: 'Asystent wykorzystuje przygotowaną bazę wiedzy i scenariusze rozmowy, a w odpowiednim momencie przekazuje kontakt dalej.'
  },
  en: {
    title: 'AI Customer Assistant',
    text: 'A conversational assistant that answers common questions, organizes inquiries and routes them to the right path.',
    metricLabel: 'first line of contact',
    challenge: 'Repeated customer questions consumed team time and slowed responses to cases that needed individual attention.',
    solution: 'The assistant uses a curated knowledge base and conversation flows, then hands the conversation over when human input is needed.'
  }
}, {
  id: 'lead-automation',
  type: 'AUTOMATION',
  stack: ['Power Automate', 'Microsoft 365', 'API'],
  demo: '#',
  visual: 'automation',
  metric: '4 → 1',
  pl: {
    title: 'Lead Automation Flow',
    text: 'Workflow, który przejmuje lead od formularza, porządkuje dane i uruchamia kolejne działania bez ręcznego przepisywania informacji.',
    metricLabel: 'systemy połączone w jeden proces',
    challenge: 'Informacje o leadach były przenoszone ręcznie pomiędzy narzędziami, co powodowało opóźnienia i ryzyko utraty danych.',
    solution: 'Automatyzacja waliduje zgłoszenie, aktualizuje rekordy, wysyła powiadomienia i uruchamia kolejne kroki procesu.'
  },
  en: {
    title: 'Lead Automation Flow',
    text: 'A workflow that takes a lead from the form, structures the data and triggers the next actions without manual copying.',
    metricLabel: 'systems connected in one flow',
    challenge: 'Lead information was moved manually between tools, creating delays and a risk of losing data.',
    solution: 'The automation validates submissions, updates records, sends notifications and triggers the next workflow steps.'
  }
}];
