import { Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Bronze from './pages/Bronze'
import Gold from './pages/Gold'
import Silver from './pages/Silver'
import Gaming from './pages/Gaming'
import Colocation from './pages/Colocation'
import Partners from './pages/partners'
function App() {
  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bronze" element={<Bronze />} />
        <Route path="/gold" element={<Gold />} />
        <Route path="/silver" element={<Silver />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/Colocation" element={<Colocation />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </ParallaxProvider>
  )
}

export default App
