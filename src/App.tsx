import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Events from './components/Events'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
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

function HomePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <LoadingScreen minDuration={2500} />
      <CustomCursor />
      <ClickEffect />
      <Header />
      <main>
        <Hero />
        <Mission />
        <Events />
        <Gallery />
        <CTA />
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
