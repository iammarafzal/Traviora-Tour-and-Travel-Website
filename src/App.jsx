import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ScrollToTop from './components/Shared/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About/About'
import Tour from './pages/Tour/Tour'
import Blogs from './pages/Blogs/Blogs'
import Contact from './pages/Contact/Contact'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App
