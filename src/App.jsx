import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Bronze from './pages/Bronze'
import Contact from './pages/Contact'
import BronzeHero from './components/BronzeHero/BronzeHero'
import GoldHero from './components/BronzeHero/GoldHero'
import Selver from './components/BronzeHero/Selver'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bronze" element={<Bronze />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bronzehero" element={<BronzeHero />} />
      <Route path="/goldhero" element={<GoldHero />} />
      <Route path="/selverhero" element={<Selver />} />
    </Routes>
  )
}

export default App
