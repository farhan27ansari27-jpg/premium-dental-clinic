import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsApp from './components/WhatsApp';
import Footer from './components/Footer';
import RevealWrapper from './components/RevealWrapper';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <RevealWrapper>
          <About />
        </RevealWrapper>
        <RevealWrapper>
          <Services />
        </RevealWrapper>
        <RevealWrapper>
          <Testimonials />
        </RevealWrapper>
        <RevealWrapper>
          <FAQ />
        </RevealWrapper>
        <RevealWrapper>
          <Contact />
        </RevealWrapper>
      </main>
      <Footer />
      <WhatsApp />
    </div>
  );
}
