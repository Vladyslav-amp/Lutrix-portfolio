import { Bot, Code2, LifeBuoy, Workflow } from 'lucide-react';
export const services = [{
  id: 'web',
  icon: Code2,
  pl: {
    title: 'Full-stack Web Development',
    text: 'Aplikacje i serwisy webowe od interfejsu po backend, bazę danych i wdrożenie.',
    details: ['React / nowoczesny front-end i responsywne UI', 'Backend, REST API, logika biznesowa i autoryzacja', 'Bazy danych, integracje i panele administracyjne', 'Modernizacja, optymalizacja i utrzymanie istniejących stron'],
    outcome: 'Dostajesz kompletne rozwiązanie, które można rozwijać bez przepisywania wszystkiego od zera.'
  },
  en: {
    title: 'Full-stack Web Development',
    text: 'Web applications and services from interface to backend, database and deployment.',
    details: ['React / modern frontend and responsive UI', 'Backend, REST APIs, business logic and authorization', 'Databases, integrations and admin panels', 'Modernization, optimization and maintenance of existing websites'],
    outcome: 'You get a complete solution that can grow without rebuilding everything from scratch.'
  }
}, {
  id: 'ai',
  icon: Bot,
  pl: {
    title: 'Agenci AI i Chatboty',
    text: 'Asystenci, chatboty i agenci AI, którzy odpowiadają, analizują dane i wykonują zadania.',
    details: ['Chatboty FAQ, sprzedażowe i supportowe', 'Agenci AI pracujący na danych i regułach firmy', 'Integracje AI z formularzami, CRM, e-mailem i API', 'Interfejsy konwersacyjne dopasowane do procesu biznesowego'],
    outcome: 'AI staje się częścią procesu, a nie tylko efektownym dodatkiem na stronie.'
  },
  en: {
    title: 'AI Agents & Chatbots',
    text: 'Assistants, chatbots and AI agents that answer, analyze data and perform tasks.',
    details: ['FAQ, sales and support chatbots', 'AI agents working with company data and rules', 'AI integrations with forms, CRM, email and APIs', 'Conversational interfaces tailored to business workflows'],
    outcome: 'AI becomes part of the workflow instead of a decorative feature.'
  }
}, {
  id: 'automation',
  icon: Workflow,
  pl: {
    title: 'Automatyzacja Procesów',
    text: 'Łączę systemy i automatyzuję powtarzalną pracę, komunikację oraz przepływ danych.',
    details: ['Automatyzacje leadów, e-maili i zgłoszeń', 'Power Automate / Microsoft 365 / webhooki', 'Synchronizacja danych pomiędzy usługami', 'Automatyczne raporty, powiadomienia i akcje'],
    outcome: 'Mniej ręcznej pracy, mniej błędów i szybsza obsługa codziennych procesów.'
  },
  en: {
    title: 'Process Automation',
    text: 'I connect systems and automate repetitive work, communication and data flow.',
    details: ['Lead, email and ticket automation', 'Power Automate / Microsoft 365 / webhooks', 'Data synchronization between services', 'Automated reports, notifications and actions'],
    outcome: 'Less manual work, fewer errors and faster day-to-day operations.'
  }
}, {
  id: 'support',
  icon: LifeBuoy,
  pl: {
    title: 'Wsparcie IT i Integracje',
    text: 'Pomagam rozwijać, naprawiać i integrować istniejące strony, aplikacje i narzędzia.',
    details: ['Poprawki i rozbudowa istniejących projektów', 'Integracje z zewnętrznymi API i usługami', 'Diagnostyka błędów, wydajność i wdrożenia', 'Stałe wsparcie techniczne dla małych firm'],
    outcome: 'Nie musisz budować wszystkiego od nowa — często lepiej uporządkować i rozwinąć to, co już działa.'
  },
  en: {
    title: 'IT Support & Integrations',
    text: 'I help develop, fix and integrate existing websites, applications and tools.',
    details: ['Fixes and extensions for existing projects', 'Integrations with external APIs and services', 'Debugging, performance and deployments', 'Ongoing technical support for small businesses'],
    outcome: 'You do not always need a rebuild — often the best move is to improve what already works.'
  }
}];
