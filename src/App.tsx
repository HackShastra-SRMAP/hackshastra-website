import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Events from './components/Events'
import Footer from './components/Footer'
import ClickEffect from './components/ClickEffect'
import LoadingScreen from './components/LoadingScreen'
import SmoothScroll from './components/SmoothScroll'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import JoinPage from './pages/JoinPage'
import TeamPage from './pages/TeamPage'
import TexpoRegisterPage from './pages/TexpoRegisterPage'
import EventsPage from './pages/EventsPage'
import NotFoundPage from './pages/NotFoundPage'

/** Global SVG filter for GooeyButton — rendered once to avoid duplicate IDs */
function GooeyButtonFilter() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
      <defs>
        <filter id="goo-button">
          <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  )
}

/** Global Layout wrapper rendering Header, Smooth Scroll, and background effects across all pages */
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <SmoothScroll />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
      >
        Skip to content
      </a>
      <GooeyButtonFilter />
      <ClickEffect />
      <div id="main-content">
        {children}
      </div>
      <Footer />
    </>
  )
}

function HomePage() {
  const [loadingComplete, setLoadingComplete] = useState(() => {
    return sessionStorage.getItem('loadingComplete') === 'true';
  });
  const [userInteracted, setUserInteracted] = useState(false);
  const showLoading = sessionStorage.getItem('loadingComplete') !== 'true';

  const handleLoadingComplete = useCallback(() => {
    setLoadingComplete(true);
    setUserInteracted(true);
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      sessionStorage.setItem('loadingComplete', 'true');
    }
  }, [loadingComplete]);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {showLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      <main>
        <Hero loadingComplete={loadingComplete} userInteracted={userInteracted} />
        <Events />
        <Mission />
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/texpo-register" element={<TexpoRegisterPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
