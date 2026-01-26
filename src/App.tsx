import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Events from './components/Events'
import Footer from './components/Footer'
import ClickEffect from './components/ClickEffect'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import JoinPage from './pages/JoinPage'
import TeamPage from './pages/TeamPage'
import TexpoRegisterPage from './pages/TexpoRegisterPage'
import EventsPage from './pages/EventsPage'

function HomePage() {
  const [loadingComplete, setLoadingComplete] = useState(() => {
    // Check if loading has been completed in this session
    return sessionStorage.getItem('loadingComplete') === 'true';
  });
  const showLoading = sessionStorage.getItem('loadingComplete') !== 'true';

  useEffect(() => {
    if (loadingComplete) {
      sessionStorage.setItem('loadingComplete', 'true');
    }
  }, [loadingComplete]);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {showLoading && (
        <LoadingScreen minDuration={2500} onLoadingComplete={() => setLoadingComplete(true)} />
      )}
      <CustomCursor />
      <ClickEffect />
      <Header />
      <main>
        <Hero loadingComplete={loadingComplete} />
        <Mission />
        <Events />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/texpo-register" element={<TexpoRegisterPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
