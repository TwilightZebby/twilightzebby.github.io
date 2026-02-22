import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from '../components/Home/home';
//import Comissions from '../components/Commissions/commissions';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="commissions" element={<Comissions />} /> Discord Bot Commissions was gonna be a thing, but given the current climate around Discord, probably not a good idea right now. */}
    </Routes>
  </BrowserRouter>
)
