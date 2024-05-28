import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './MainPages/Home';
import About from './MainPages/About';
import Gallery from './MainPages/gallery';
import FAQ from './MainPages/faq';
import Contact from './MainPages/contact';
import Layout from './Layout/layout';
import ServiceDetail from './MainPages/services';
import { ThemeProvider } from './CustomComponents/darkmode';
import ScrollToTop from './CustomComponents/ScrollToTop';
import PrivacyPolicy from './MainPages/privacypolicy';
import TermsConditions from './MainPages/TermsConditions';
import './App.css';

function App() {
  return (

    <ThemeProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;