import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from '../components/Home/home';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/placeholder" element={<Placeholder />} /> */}
    </Routes>
  </BrowserRouter>
)
