import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Layout
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

// Components
import ScrollProgress from './components/ScrollProgress';
import HomePageNav from './components/HomePageNav';

// Sections (Home page)
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Education from './sections/Education';

// Pages
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <HomePageNav />
        <About />
        <Skills />
        <TechStack />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
