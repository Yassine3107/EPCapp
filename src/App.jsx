import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';


import Asbest from './pages/Asbest';
import EPC from './pages/EPC'
import FAQ from './pages/FAQ';
import Home from './Pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/TermsAndConditions';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/epc",
    element: <EPC/>
  },
  {
    path: "/asbest",
    element: <Asbest/>
  }
])

function App() {
  const basename = '/EPCapp';

  return (
    <Router basename={basename}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/epc" element={<EPC />} />
      <Route path="/asbest" element={<Asbest />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/policy" element={<PrivacyPolicy />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  </Router>

  )
}

export default App
