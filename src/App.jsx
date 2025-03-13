import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Bronze from './pages/Bronze'
import Gold from './pages/Gold'
import Selver from './pages/Selver'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bronze" element={<Bronze />} />
      <Route path="/gold" element={<Gold />} />
      <Route path="/selver" element={<Selver />} />
    </Routes>
  )
}

export default App
