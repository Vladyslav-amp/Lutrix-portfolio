import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PortfolioAgent from './components/PortfolioAgent/PortfolioAgent';
export default function App() {
  return <>
    <Header />
    <main>
      <Hero />
      <Services />
      {/* <Projects /> */}
      <About />
      <Technologies />
      <Contact />
    </main>
    <Footer />
    {/* <PortfolioAgent /> */}
  </>;
}