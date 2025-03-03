import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Bronze from './pages/Bronze'
import Contact from './pages/Contact'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bronze" element={<Bronze />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
