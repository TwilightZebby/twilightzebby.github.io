import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from '../components/Home/home';
import Portfolio from '../components/Portfolio/portfolio';
import Resources from '../components/Resources/resources';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  </BrowserRouter>
)
